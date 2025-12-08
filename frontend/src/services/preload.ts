/**
 * Preload service for static questions after A2HS
 */

import {
    bulkSaveStaticQuestions,
    bulkSaveStaticTopics,
    getStaticQuestionCount,
    StaticQuestion,
    StaticTopic,
    Difficulty,
} from '../db/db';

// Static topics configuration
export const STATIC_TOPICS = [
    'javascript',
    'typescript',
    'react',
    'java',
    'spring-boot',
    'nosql',
    'rdbms',
    'microservices',
] as const;

export type StaticTopicId = (typeof STATIC_TOPICS)[number];

export const DIFFICULTIES: Difficulty[] = ['fresher', 'junior', 'middle', 'senior'];

// Topic display names
const TOPIC_DISPLAY_NAMES: Record<StaticTopicId, Record<'en' | 'vi' | 'jp', string>> = {
    javascript: { en: 'JavaScript', vi: 'JavaScript', jp: 'JavaScript' },
    typescript: { en: 'TypeScript', vi: 'TypeScript', jp: 'TypeScript' },
    react: { en: 'React', vi: 'React', jp: 'React' },
    java: { en: 'Java', vi: 'Java', jp: 'Java' },
    'spring-boot': { en: 'Spring Boot', vi: 'Spring Boot', jp: 'Spring Boot' },
    nosql: { en: 'NoSQL', vi: 'NoSQL', jp: 'NoSQL' },
    rdbms: { en: 'RDBMS', vi: 'RDBMS', jp: 'RDBMS' },
    microservices: { en: 'Microservices', vi: 'Microservices', jp: 'マイクロサービス' },
};

interface PreloadProgress {
    topic: string;
    difficulty: string;
    loaded: number;
    total: number;
}

type ProgressCallback = (progress: PreloadProgress) => void;

/**
 * Dynamic import a question file
 */
async function importQuestionFile(topic: string, difficulty: string): Promise<any[]> {
    try {
        // Dynamic import based on topic and difficulty
        const module = await import(`../data-store/${topic}/${difficulty}.js`);

        // Handle different export formats
        const exportName = Object.keys(module).find(
            key => Array.isArray(module[key]) && key !== 'default'
        );

        return module.default || (exportName ? module[exportName] : []);
    } catch (error) {
        console.warn(`Could not load ${topic}/${difficulty}:`, error);
        return [];
    }
}

/**
 * Transform raw question data to StaticQuestion format
 */
function transformQuestion(raw: any, topicId: string, difficulty: Difficulty): StaticQuestion {
    return {
        id: raw._id || raw.id || `${topicId}-${difficulty}-${Math.random().toString(36).slice(2)}`,
        topicId,
        difficulty,
        tags: raw.tags || [],
        content: raw.content,
    };
}

/**
 * Preload all static questions into IndexedDB
 */
export async function preloadStaticQuestions(onProgress?: ProgressCallback): Promise<number> {
    const totalCombinations = STATIC_TOPICS.length * DIFFICULTIES.length;
    let loadedCombinations = 0;
    let totalQuestions = 0;

    // First, save topic metadata
    const topicMetadata: StaticTopic[] = [];

    for (const topic of STATIC_TOPICS) {
        let topicQuestionCount = 0;

        for (const difficulty of DIFFICULTIES) {
            try {
                const rawQuestions = await importQuestionFile(topic, difficulty);
                const questions = rawQuestions.map((q: any) =>
                    transformQuestion(q, topic, difficulty)
                );

                if (questions.length > 0) {
                    await bulkSaveStaticQuestions(questions);
                    totalQuestions += questions.length;
                    topicQuestionCount += questions.length;
                }

                loadedCombinations++;

                if (onProgress) {
                    onProgress({
                        topic,
                        difficulty,
                        loaded: loadedCombinations,
                        total: totalCombinations,
                    });
                }
            } catch (error) {
                console.warn(`Failed to load ${topic}/${difficulty}:`, error);
                loadedCombinations++;
            }
        }

        topicMetadata.push({
            id: topic,
            name: topic,
            displayName: TOPIC_DISPLAY_NAMES[topic],
            questionCount: topicQuestionCount,
        });
    }

    // Save topic metadata
    await bulkSaveStaticTopics(topicMetadata);

    console.log(`Preloaded ${totalQuestions} questions from ${STATIC_TOPICS.length} topics`);
    return totalQuestions;
}

/**
 * Check if preload is needed
 */
export async function isPreloadNeeded(): Promise<boolean> {
    const count = await getStaticQuestionCount();
    return count === 0;
}

/**
 * Get preload status
 */
export async function getPreloadStatus(): Promise<{
    isPreloaded: boolean;
    questionCount: number;
}> {
    const count = await getStaticQuestionCount();
    return {
        isPreloaded: count > 0,
        questionCount: count,
    };
}
