import { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface TopicSelectorProps {
    selectedTopics: string[];
    onChange: (topics: string[]) => void;
}

const AVAILABLE_TOPICS = [
    { id: 'javascript', label: 'JavaScript', color: 'bg-yellow-500' },
    { id: 'typescript', label: 'TypeScript', color: 'bg-blue-500' },
    { id: 'react', label: 'React', color: 'bg-cyan-500' },
    { id: 'java', label: 'Java', color: 'bg-red-500' },
    { id: 'spring-boot', label: 'Spring Boot', color: 'bg-green-500' },
    { id: 'nosql', label: 'NoSQL', color: 'bg-purple-500' },
    { id: 'rdbms', label: 'RDBMS', color: 'bg-indigo-500' },
    { id: 'microservices', label: 'Microservices', color: 'bg-pink-500' },
    { id: 'system-design', label: 'System Design', color: 'bg-orange-500' },
];

export const TopicSelector = ({ selectedTopics, onChange }: TopicSelectorProps) => {
    const [draggedTopic, setDraggedTopic] = useState<string | null>(null);
    const [isOverTrash, setIsOverTrash] = useState(false);

    const toggleTopic = (topicId: string) => {
        if (selectedTopics.includes(topicId)) {
            onChange(selectedTopics.filter(t => t !== topicId));
        } else {
            onChange([...selectedTopics, topicId]);
        }
    };

    const handleDragStart = (topicId: string) => {
        setDraggedTopic(topicId);
    };

    const handleDragEnd = () => {
        setDraggedTopic(null);
        setIsOverTrash(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDropOnTrash = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedTopic) {
            onChange(selectedTopics.filter(t => t !== draggedTopic));
        }
        setIsOverTrash(false);
        setDraggedTopic(null);
    };

    const handleTrashDragEnter = () => {
        setIsOverTrash(true);
    };

    const handleTrashDragLeave = () => {
        setIsOverTrash(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-white">
                    Selected Topics {selectedTopics.length > 0 && `(${selectedTopics.length})`}
                </label>

                {/* Trash zone for mobile drag-to-delete */}
                <div
                    onDragOver={handleDragOver}
                    onDrop={handleDropOnTrash}
                    onDragEnter={handleTrashDragEnter}
                    onDragLeave={handleTrashDragLeave}
                    className={`p-3 rounded-lg border-2 border-dashed transition-all ${isOverTrash
                        ? 'border-red-500 bg-red-500/20'
                        : 'border-gray-600 bg-gray-800/50'
                        }`}
                >
                    <Trash2 className={`w-5 h-5 ${isOverTrash ? 'text-red-400' : 'text-gray-400'}`} />
                </div>
            </div>

            {/* Selected topics as draggable tags */}
            <div className="flex flex-wrap gap-2 min-h-[60px] p-3 bg-gray-800 rounded-lg border border-gray-700">
                {selectedTopics.length === 0 ? (
                    <p className="text-gray-500 text-sm">No topics selected. Tap topics below to add.</p>
                ) : (
                    selectedTopics.map(topicId => {
                        const topic = AVAILABLE_TOPICS.find(t => t.id === topicId);
                        if (!topic) return null;

                        return (
                            <div
                                key={topicId}
                                draggable
                                onDragStart={() => handleDragStart(topicId)}
                                onDragEnd={handleDragEnd}
                                className={`${topic.color} px-3 py-1.5 rounded-full text-white text-sm font-medium cursor-move touch-manipulation select-none transition-transform hover:scale-105 active:scale-95`}
                            >
                                {topic.label}
                            </div>
                        );
                    })
                )}
            </div>

            {/* Available topics */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                    Available Topics (tap to add)
                </label>
                <div className="flex flex-wrap gap-2">
                    {AVAILABLE_TOPICS.filter(t => !selectedTopics.includes(t.id)).map(topic => (
                        <button
                            key={topic.id}
                            onClick={() => toggleTopic(topic.id)}
                            className={`${topic.color}/20 border border-${topic.color} px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-opacity-30 active:scale-95 touch-manipulation`}
                            style={{ borderColor: topic.color.replace('bg-', '') }}
                        >
                            <span className={`${topic.color.replace('bg-', 'text-')}`}>
                                + {topic.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <p className="text-xs text-gray-500 mt-2">
                💡 Tip: Drag selected topics to the trash icon to remove them
            </p>
        </div>
    );
};
