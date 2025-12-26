/**
 * App store using Zustand
 * Manages app state, settings, and UI state
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
    getSettings,
    saveSettings,
    getDevice,
    Settings,
    Device,
    Difficulty,
    StaticQuestion,
    PushedItem,
} from '../db/db';

interface CurrentQuestion {
    id: string;
    topicId: string;
    difficulty: Difficulty;
    content: {
        en: { title: string; body: string; solution: string };
        vi: { title: string; body: string; solution: string };
        jp: { title: string; body: string; solution: string };
    };
    source: 'static' | 'dynamic';
}

interface AppState {
    // Device state
    device: Device | null;
    isDeviceLoaded: boolean;

    // Settings state
    settings: Settings;
    isSettingsLoaded: boolean;

    // App state
    isInstalled: boolean;
    isPreloaded: boolean;
    isLoading: boolean;
    preloadProgress: number;
    allStaticQuestions: Map<string, StaticQuestion>;
    todayPushedQuestions: PushedItem[];
    historyPushedQuestions: any[];

    // Current question (from notification)
    currentQuestion: CurrentQuestion | null;
    showAnswer: boolean;

    // Actions
    setDevice: (device: Device | null) => void;
    setSettings: (settings: Settings) => void;
    updateSettings: (partial: Partial<Settings>) => Promise<void>;
    setIsInstalled: (installed: boolean) => void;
    setIsPreloaded: (preloaded: boolean) => void;
    setIsLoading: (loading: boolean) => void;
    setPreloadProgress: (progress: number) => void;
    setCurrentQuestion: (question: CurrentQuestion | null) => void;
    toggleShowAnswer: () => void;
    loadFromIndexedDB: () => Promise<void>;
    setAllStaticQuestions: (questions: Map<string, StaticQuestion>) => void;
    setTodayPushedQuestions: (questions: PushedItem[]) => void;
    setHistoryPushedQuestions: (data: any[]) => void;

    // Topic management
    addSelectedTopic: (topicId: string) => Promise<void>;
    removeSelectedTopic: (topicId: string) => Promise<void>;
}

const DEFAULT_SETTINGS: Settings = {
    selectedTopics: [],
    difficulty: 'junior',
    pushPerDay: 3,
    timeStart: '09:00',
    timeEnd: '21:00',
    language: 'en',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            // Initial state
            device: null,
            isDeviceLoaded: false,
            settings: DEFAULT_SETTINGS,
            isSettingsLoaded: false,
            isInstalled: false,
            isPreloaded: false,
            isLoading: false,
            preloadProgress: 0,
            currentQuestion: null,
            showAnswer: false,
            allStaticQuestions: new Map<string, StaticQuestion>(),
            todayPushedQuestions: [] as PushedItem[],
            historyPushedQuestions: [] as PushedItem[],

            // Device actions
            setDevice: (device) => set({ device, isDeviceLoaded: true }),

            // Settings actions
            setSettings: (settings) => set({ settings, isSettingsLoaded: true }),

            updateSettings: async (partial) => {
                const current = get().settings;
                const updated = { ...current, ...partial };
                await saveSettings(updated);
                set({ settings: updated });
            },

            // App state actions
            setIsInstalled: (installed) => set({ isInstalled: installed }),
            setIsPreloaded: (preloaded) => set({ isPreloaded: preloaded }),
            setIsLoading: (loading) => set({ isLoading: loading }),
            setPreloadProgress: (progress) => set({ preloadProgress: progress }),

            // Question actions
            setCurrentQuestion: (question) => set({ currentQuestion: question, showAnswer: false }),
            toggleShowAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
            setAllStaticQuestions: (questions: Map<string, StaticQuestion>) => set({ allStaticQuestions: questions }),
            setTodayPushedQuestions: (questions: PushedItem[]) => set({ todayPushedQuestions: questions }),
            setHistoryPushedQuestions: (data: any[]) => set({ historyPushedQuestions: data }),
            // Load from IndexedDB
            loadFromIndexedDB: async () => {
                try {
                    const [device, settings] = await Promise.all([
                        getDevice(),
                        getSettings(),
                    ]);
                    set({
                        device: device || null,
                        isDeviceLoaded: true,
                        settings: settings || DEFAULT_SETTINGS,
                        isSettingsLoaded: true,
                    });
                } catch (error) {
                    console.error('Failed to load from IndexedDB:', error);
                    set({
                        isDeviceLoaded: true,
                        isSettingsLoaded: true,
                    });
                }
            },

            // Topic management
            addSelectedTopic: async (topicId) => {
                const { settings } = get();
                if (settings.selectedTopics.includes(topicId)) return;

                const updated = {
                    ...settings,
                    selectedTopics: [...settings.selectedTopics, topicId],
                };
                await saveSettings(updated);
                set({ settings: updated });
            },

            removeSelectedTopic: async (topicId) => {
                const { settings } = get();
                const updated = {
                    ...settings,
                    selectedTopics: settings.selectedTopics.filter(id => id !== topicId),
                };
                await saveSettings(updated);
                set({ settings: updated });
            },
        }),
        {
            name: 'tech-skill-app',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                isInstalled: state.isInstalled,
                isPreloaded: state.isPreloaded,
            }),
        }
    )
);
