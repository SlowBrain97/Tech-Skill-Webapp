/// <reference lib="webworker" />
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

declare let self: ServiceWorkerGlobalScope;

// Clean old caches and precache assets
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

// Take control immediately
self.skipWaiting();
clientsClaim();

// IndexedDB access in service worker
const DB_NAME = 'TechSkillDB';
const DB_VERSION = 1;

async function openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

async function getFromStore<T>(storeName: string, key: string): Promise<T | undefined> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function putToStore(storeName: string, value: any, key?: string): Promise<void> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const request = key ? store.put(value, key) : store.put(value);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

async function getAllFromIndex(storeName: string, indexName: string, query: any): Promise<any[]> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const index = store.index(indexName);
        const request = index.getAll(query);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function getAllFromStore(storeName: string): Promise<any[]> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Get blocked question IDs from last 3 days
async function getBlockedIds(): Promise<Set<string>> {
    const ids = new Set<string>();

    // Today's pushed
    const today = await getAllFromStore('pushedToday');
    today.forEach((p: any) => ids.add(p.id));

    // Last 3 days
    const now = new Date();
    for (let i = 0; i < 3; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const history = await getFromStore<any>('pushedHistory', dateStr);
        if (history?.items) {
            history.items.forEach((item: any) => ids.add(item.id));
        }
    }

    return ids;
}

// Select random question for static topic
async function selectRandomQuestion(topicId: string, difficulty: string): Promise<any | null> {
    const blockedIds = await getBlockedIds();

    // Get questions by topic + difficulty
    let questions = await getAllFromIndex('staticQuestions', 'by-topic-difficulty', [topicId, difficulty]);

    // Filter blocked
    let candidates = questions.filter((q: any) => !blockedIds.has(q.id));

    // Fallback
    if (candidates.length === 0) {
        questions = await getAllFromIndex('staticQuestions', 'by-topic', topicId);
        candidates = questions.filter((q: any) => !blockedIds.has(q.id));
        if (candidates.length === 0) candidates = questions;
    }

    if (candidates.length === 0) return null;

    const selected = candidates[Math.floor(Math.random() * candidates.length)];

    // Save to pushedToday
    await putToStore('pushedToday', {
        id: selected.id,
        topicId: selected.topicId,
        pushedAt: new Date().toISOString(),
    });

    return selected;
}
let questionId: string | null = null;
// Handle push notification
self.addEventListener('push', (event: PushEvent) => {
    console.log('[SW] Push received');
    event.waitUntil(handlePush(event));
});

async function handlePush(event: PushEvent) {
    try {
        const payload = event.data?.json();
        console.log('[SW] Push payload:', payload);

        // Get language from settings
        const settings = await getFromStore<any>('settings', 'current');
        const lang = settings?.language || 'en';
        const difficulty = settings?.difficulty || 'junior';

        let question: any = null;
        let notificationBody = 'New tech question available!';

        if (payload?.type === 'static') {
            // Static topic - select random question locally
            question = await selectRandomQuestion(payload.topicId, difficulty);

            if (question) {
                notificationBody = question.content[lang]?.title || question.content.en.title;
            }
        } else if (payload?.type === 'dynamic') {
            // Dynamic topic - questions provided by backend
            const questions = payload.questions || [];

            // Filter by difficulty
            let candidates = questions.filter((q: any) => q.difficulty === difficulty);
            if (candidates.length === 0) candidates = questions;

            // Get blocked
            const blockedIds = await getBlockedIds();
            let available = candidates.filter((q: any) => !blockedIds.has(q.id));
            if (available.length === 0) available = candidates;

            if (available.length > 0) {
                question = available[Math.floor(Math.random() * available.length)];
                questionId = question.id;
                // Save to pushedToday
                await putToStore('pushedToday', {
                    id: question.id,
                    topicId: payload.topicId,
                    pushedAt: new Date().toISOString(),
                });

                notificationBody = question.content[lang]?.title || question.content.en.title;
            }
        }

        // Show notification
        await self.registration.showNotification('📚 Question', {
            body: notificationBody,
            icon: '/pwa-192x192.png',
            badge: '/pwa-192x192.png',
            tag: 'tech-question',
            data: {
                question,
                type: payload?.type || 'static',
                topicId: payload?.topicId,
            },
        });

    } catch (error) {
        console.error('[SW] Push handling error:', error);

        // Show fallback notification
        await self.registration.showNotification('📚 Tech Skill', {
            body: 'New question available!',
            icon: '/pwa-192x192.png',
        });
    }
}

// Handle notification click
self.addEventListener('notificationclick', (event: NotificationEvent) => {
    console.log('[SW] Notification clicked:', event.action);
    event.notification.close();
    if (event.action === 'dismiss') {
        return;
    }

    const data = event.notification.data;
    const url = data?.question ? `/question?id=${data.question.id}` : `/${questionId}`;

    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
            // Try to focus existing window
            for (const client of clients) {
                if ('focus' in client) {
                    client.focus();
                    // Post message to client with question data
                    client.postMessage({
                        type: 'NOTIFICATION_CLICK',
                        question: data?.question,
                    });
                    return;
                }
            }

            // Open new window
            if (self.clients.openWindow) {
                return self.clients.openWindow(url);
            }
        })
    );
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);

    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
