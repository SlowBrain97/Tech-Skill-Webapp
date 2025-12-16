
import { bulkSaveStaticTopics, getAllStaticTopics, StaticTopic } from '../db/db';
import { STATIC_TOPICS } from './preload';

import toast from 'react-hot-toast';

// ... existing code ...

const API_URL = import.meta.env.VITE_API_URL || '';

interface DynamicTopic {
    _id: string;
    name: string;
    displayName?: {
        en: string;
        vi: string;
        jp: string;
    };
    isActive: boolean;
}

interface TopicsResponse {
    static: string[];
    dynamic: DynamicTopic[];
}


export async function fetchTopicsFromBackend(): Promise<TopicsResponse | null> {
    try {
        const response = await fetch(`${API_URL}/api/topics`);
        if (!response.ok) {
            throw new Error('Failed to fetch topics');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch topics:', error);
        toast.error('Failed to update topics');
        return null;
    }
}


export async function syncTopics(): Promise<{
    staticCount: number;
    dynamicCount: number;
}> {
    const backendTopics = await fetchTopicsFromBackend();

    // Get existing static topics
    const existingTopics = await getAllStaticTopics();
    const existingIds = new Set(existingTopics.map(t => t.id));

    const newTopics: StaticTopic[] = [];

    // Add dynamic topics from backend
    if (backendTopics?.dynamic) {
        for (const dt of backendTopics.dynamic) {
            if (!existingIds.has(dt.name)) {
                newTopics.push({
                    id: dt.name,
                    name: dt.name,
                    displayName: dt.displayName || { en: dt.name, vi: dt.name, jp: dt.name },
                    questionCount: 0,
                });
            }
        }
    }

    // Save new topics
    if (newTopics.length > 0) {
        await bulkSaveStaticTopics(newTopics);
    }

    return {
        staticCount: STATIC_TOPICS.length,
        dynamicCount: backendTopics?.dynamic?.length || 0,
    };
}


export async function getAllAvailableTopics(): Promise<StaticTopic[]> {
    // Try to sync first
    await syncTopics();

    // Return all topics from IDB
    return getAllStaticTopics();
}
