/**
 * IndexedDB wrapper using idb library for Tech Skill Notification PWA
 * Stores: device, settings, staticTopics, staticQuestions, pushedToday, pushedHistory
 */

import { openDB, DBSchema, IDBPDatabase } from 'idb';

// Types
export type Difficulty = 'fresher' | 'junior' | 'middle' | 'senior';
export type Language = 'en' | 'vi' | 'jp';

export interface ContentDetail {
    title: string;
    body: string;
    solution: string;
}

export interface QuestionContent {
    en: ContentDetail;
    vi: ContentDetail;
    jp: ContentDetail;
}

export interface Device {
    uuid: string;
    createdAt: string;
}

export interface Settings {
    selectedTopics: string[];
    difficulty: Difficulty;
    pushPerDay: number;
    timeStart: string;
    timeEnd: string;
    language: Language;
    timeZone: string;
}

export interface StaticTopic {
    id: string;
    name: string;
    displayName: Record<Language, string>;
    questionCount: number;
}

export interface StaticQuestion {
    id: string;
    topicId: string;
    difficulty: Difficulty;
    tags?: string[];
    content: QuestionContent;
}
export type Question = StaticQuestion;

export interface PushedItem {
    question: Question;
    pushedAt: string;
}

export interface PushedHistory {
    date: string;
    items: Array<{ id: string; topicId: string }>;
}

// Database schema
interface TechSkillDB extends DBSchema {
    device: {
        key: 'current';
        value: Device;
    };
    settings: {
        key: 'current';
        value: Settings;
    };
    staticTopics: {
        key: string;
        value: StaticTopic;
        indexes: { 'by-name': string };
    };
    staticQuestions: {
        key: string;
        value: StaticQuestion;
        indexes: {
            'by-topic': string;
            'by-difficulty': Difficulty;
            'by-topic-difficulty': [string, Difficulty];
        };
    };
    pushedToday: {
        key: string;
        value: PushedItem;
    };
    pushedHistory: {
        key: string;
        value: PushedHistory;
    };
}

const DB_NAME = 'TechSkillDB';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase<TechSkillDB> | null = null;

/**
 * Initialize and get database instance
 */
export async function getDB(): Promise<IDBPDatabase<TechSkillDB>> {
    if (dbInstance) return dbInstance;

    dbInstance = await openDB<TechSkillDB>(DB_NAME, DB_VERSION, {
        upgrade(db) {
            // Device store
            if (!db.objectStoreNames.contains('device')) {
                db.createObjectStore('device');
            }

            // Settings store
            if (!db.objectStoreNames.contains('settings')) {
                db.createObjectStore('settings');
            }

            // Static topics store
            if (!db.objectStoreNames.contains('staticTopics')) {
                const topicsStore = db.createObjectStore('staticTopics', { keyPath: 'id' });
                topicsStore.createIndex('by-name', 'name');
            }

            // Static questions store
            if (!db.objectStoreNames.contains('staticQuestions')) {
                const questionsStore = db.createObjectStore('staticQuestions', { keyPath: 'id' });
                questionsStore.createIndex('by-topic', 'topicId');
                questionsStore.createIndex('by-difficulty', 'difficulty');
                questionsStore.createIndex('by-topic-difficulty', ['topicId', 'difficulty']);
            }

            // Pushed today store
            if (!db.objectStoreNames.contains('pushedToday')) {
                db.createObjectStore('pushedToday', { keyPath: 'id' });
            }

            // Pushed history store
            if (!db.objectStoreNames.contains('pushedHistory')) {
                db.createObjectStore('pushedHistory', { keyPath: 'date' });
            }
        },
    });

    return dbInstance;
}

// ==================== Device ====================

/**
 * Get device info (UUID)
 */
export async function getDevice(): Promise<Device | undefined> {
    const db = await getDB();
    return db.get('device', 'current');
}

/**
 * Save device info
 */
export async function saveDevice(device: Device): Promise<void> {
    const db = await getDB();
    await db.put('device', device, 'current');
}

/**
 * Generate and save new UUID
 */
export async function generateDeviceUUID(): Promise<string> {
    const uuid = crypto.randomUUID();
    await saveDevice({
        uuid,
        createdAt: new Date().toISOString(),
    });
    return uuid;
}

// ==================== Settings ====================

const DEFAULT_SETTINGS: Settings = {
    selectedTopics: [],
    difficulty: 'junior',
    pushPerDay: 3,
    timeStart: '09:00',
    timeEnd: '21:00',
    language: 'en',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

/**
 * Get user settings
 */
export async function getSettings(): Promise<Settings> {
    const db = await getDB();
    const settings = await db.get('settings', 'current');
    return settings || DEFAULT_SETTINGS;
}

/**
 * Save user settings
 */
export async function saveSettings(settings: Settings): Promise<void> {
    const db = await getDB();
    await db.put('settings', settings, 'current');
}

// ==================== Static Topics ====================

/**
 * Get all static topics
 */
export async function getAllStaticTopics(): Promise<StaticTopic[]> {
    const db = await getDB();
    return db.getAll('staticTopics');
}

/**
 * Save static topic
 */
export async function saveStaticTopic(topic: StaticTopic): Promise<void> {
    const db = await getDB();
    await db.put('staticTopics', topic);
}

/**
 * Bulk save static topics
 */
export async function bulkSaveStaticTopics(topics: StaticTopic[]): Promise<void> {
    const db = await getDB();
    const tx = db.transaction('staticTopics', 'readwrite');
    await Promise.all([
        ...topics.map(topic => tx.store.put(topic)),
        tx.done,
    ]);
}

// ==================== Static Questions ====================

/**
 * Get questions by topic
 */
export async function getQuestionsByTopic(topicId: string): Promise<StaticQuestion[]> {
    const db = await getDB();
    return db.getAllFromIndex('staticQuestions', 'by-topic', topicId);
}

/**
 * Get questions by topic and difficulty
 */
export async function getQuestionsByTopicAndDifficulty(
    topicId: string,
    difficulty: Difficulty
): Promise<StaticQuestion[]> {
    const db = await getDB();
    return db.getAllFromIndex('staticQuestions', 'by-topic-difficulty', [topicId, difficulty]);
}

/**
 * Get all static questions
 */
export async function getAllStaticQuestions(): Promise<StaticQuestion[]> {
    const db = await getDB();
    return db.getAll('staticQuestions');
}

/**
 * Save static question
 */
export async function saveStaticQuestion(question: StaticQuestion): Promise<void> {
    const db = await getDB();
    await db.put('staticQuestions', question);
}

/**
 * Bulk save static questions
 */
export async function bulkSaveStaticQuestions(questions: StaticQuestion[]): Promise<void> {
    const db = await getDB();
    const tx = db.transaction('staticQuestions', 'readwrite');
    await Promise.all([
        ...questions.map(q => tx.store.put(q)),
        tx.done,
    ]);
}

/**
 * Clear all static questions
 */
export async function clearStaticQuestions(): Promise<void> {
    const db = await getDB();
    await db.clear('staticQuestions');
}

/**
 * Get question count
 */
export async function getStaticQuestionCount(): Promise<number> {
    const db = await getDB();
    return db.count('staticQuestions');
}

// ==================== Pushed Today ====================

/**
 * Get all pushed items for today
 */
export async function getPushedToday(): Promise<PushedItem[]> {
    const db = await getDB();
    return db.getAll('pushedToday');
}

/**
 * Add pushed item to today
 */
export async function addPushedToday(item: PushedItem): Promise<void> {
    const db = await getDB();
    await db.put('pushedToday', item);
}

/**
 * Clear pushed today
 */
export async function clearPushedToday(): Promise<void> {
    const db = await getDB();
    await db.clear('pushedToday');
}

// ==================== Pushed History ====================

/**
 * Get pushed history for a specific date
 */
export async function getPushedHistoryByDate(date: string): Promise<PushedHistory | undefined> {
    const db = await getDB();
    return db.get('pushedHistory', date);
}

/**
 * Get all pushed history
 */
export async function getAllPushedHistory(): Promise<PushedHistory[]> {
    const db = await getDB();
    return db.getAll('pushedHistory');
}

/**
 * Save pushed history for a date
 */
export async function savePushedHistory(history: PushedHistory): Promise<void> {
    const db = await getDB();
    await db.put('pushedHistory', history);
}

/**
 * Delete pushed history for a date
 */
export async function deletePushedHistory(date: string): Promise<void> {
    const db = await getDB();
    await db.delete('pushedHistory', date);
}

// ==================== Helpers ====================

/**
 * Get date string in YYYY-MM-DD format
 */
export function getDateString(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
}

/**
 * Get last N days dates
 */
export function getLastNDaysDates(n: number): string[] {
    const dates: string[] = [];
    for (let i = 0; i < n; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(getDateString(date));
    }
    return dates;
}

/**
 * Get all blocked question IDs from last 3 days + today
 */
export async function getBlockedQuestionIds(): Promise<Set<string>> {
    const ids = new Set<string>();

    // Get today's pushed
    const todayPushed = await getPushedToday();
    todayPushed.forEach(p => ids.add(p.question.id));

    // Get last 3 days from history
    const last3Days = getLastNDaysDates(3);
    for (const date of last3Days) {
        const history = await getPushedHistoryByDate(date);
        if (history) {
            history.items.forEach(item => ids.add(item.id));
        }
    }

    return ids;
}

/**
 * Daily cleanup: Move today to history, delete old entries
 */
export async function performDailyCleanup(): Promise<void> {
    const today = new Date().toISOString();

    // Get today's pushed items
    const todayPushed = await getPushedToday();
    const yesterdayPushed = todayPushed[0].pushedAt;
    if (yesterdayPushed !== today && todayPushed.length > 0) {
        const existingHistory = await getPushedHistoryByDate(today);

        if (existingHistory) {
            const existingIds = new Set(existingHistory.items.map(i => i.id));
            const newItems = todayPushed
                .filter(p => !existingIds.has(p.question.id))
                .map(p => ({ id: p.question.id, topicId: p.question.topicId }));

            await savePushedHistory({
                date: today,
                items: [...existingHistory.items, ...newItems],
            });
        } else {
            // Create new history entry
            await savePushedHistory({
                date: today,
                items: todayPushed.map(p => ({ id: p.question.id, topicId: p.question.topicId })),
            });
        }
    }

    // Clear today's pushed
    await clearPushedToday();

    // Delete history older than 3 days
    const keepDates = new Set(getLastNDaysDates(3));
    const allHistory = await getAllPushedHistory();

    for (const history of allHistory) {
        if (!keepDates.has(history.date)) {
            await deletePushedHistory(history.date);
        }
    }
}
