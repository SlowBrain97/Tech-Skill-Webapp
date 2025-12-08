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
                // Only persist these fields in localStorage for fast load
                isInstalled: state.isInstalled,
                isPreloaded: state.isPreloaded,
            }),
        }
    )
);
