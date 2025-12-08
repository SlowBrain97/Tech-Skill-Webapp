/**
 * Mobile-first Settings Page with drag-to-delete topic tags
 */

import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../state/appStore';
import { getAllAvailableTopics, syncTopics } from '../services/topicSync';
import { syncSettingsToBackend } from '../services/pushService';
import { StaticTopic, Difficulty, Language } from '../db/db';
import { Trash2, Plus, Check, Clock, Bell, BookOpen, Globe } from 'lucide-react';

const DIFFICULTIES: { value: Difficulty; label: Record<Language, string> }[] = [
    { value: 'fresher', label: { en: 'Fresher', vi: 'Fresher', jp: '新人' } },
    { value: 'junior', label: { en: 'Junior', vi: 'Junior', jp: 'ジュニア' } },
    { value: 'middle', label: { en: 'Middle', vi: 'Middle', jp: 'ミドル' } },
    { value: 'senior', label: { en: 'Senior', vi: 'Senior', jp: 'シニア' } },
];

const LANGUAGES: { value: Language; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'jp', label: '日本語' },
];

export function SettingsPage() {
    const { settings, updateSettings, addSelectedTopic, removeSelectedTopic } = useAppStore();
    const [availableTopics, setAvailableTopics] = useState<StaticTopic[]>([]);
    const [showTopicPicker, setShowTopicPicker] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [draggedTopic, setDraggedTopic] = useState<string | null>(null);
    const [isOverTrash, setIsOverTrash] = useState(false);
    const trashRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadTopics();
    }, []);

    const loadTopics = async () => {
        try {
            await syncTopics();
            const topics = await getAllAvailableTopics();
            setAvailableTopics(topics);
        } catch (error) {
            console.error('Failed to load topics:', error);
        }
    };

    const handleSaveSettings = async () => {
        setIsSaving(true);
        try {
            await syncSettingsToBackend();
        } finally {
            setIsSaving(false);
        }
    };

    const handleDragStart = (topicId: string) => {
        setDraggedTopic(topicId);
    };

    const handleDragEnd = () => {
        if (isOverTrash && draggedTopic) {
            removeSelectedTopic(draggedTopic);
        }
        setDraggedTopic(null);
        setIsOverTrash(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleTrashDragEnter = () => {
        setIsOverTrash(true);
    };

    const handleTrashDragLeave = () => {
        setIsOverTrash(false);
    };

    const handleTrashDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedTopic) {
            removeSelectedTopic(draggedTopic);
        }
        setDraggedTopic(null);
        setIsOverTrash(false);
    };

    const unselectedTopics = availableTopics.filter(
        t => !settings.selectedTopics.includes(t.id)
    );

    const selectedTopicData = settings.selectedTopics
        .map(id => availableTopics.find(t => t.id === id))
        .filter(Boolean) as StaticTopic[];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 pb-20">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Settings
                </h1>
                <p className="text-gray-400 text-sm mt-1">Configure your learning preferences</p>
            </header>

            {/* Topics Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <BookOpen size={18} className="text-blue-400" />
                        <h2 className="font-semibold">Topics</h2>
                    </div>
                    {draggedTopic && (
                        <div
                            ref={trashRef}
                            className={`p-3 rounded-full transition-all ${isOverTrash
                                ? 'bg-red-500 scale-110'
                                : 'bg-gray-700'
                                }`}
                            onDragEnter={handleTrashDragEnter}
                            onDragLeave={handleTrashDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleTrashDrop}
                        >
                            <Trash2 size={20} className={isOverTrash ? 'text-white' : 'text-gray-400'} />
                        </div>
                    )}
                </div>

                {/* Selected Topics */}
                <div className="flex flex-wrap gap-2 min-h-[48px] p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    {selectedTopicData.length === 0 ? (
                        <span className="text-gray-500 text-sm">No topics selected. All topics will be included.</span>
                    ) : (
                        selectedTopicData.map(topic => (
                            <div
                                key={topic.id}
                                draggable
                                onDragStart={() => handleDragStart(topic.id)}
                                onDragEnd={handleDragEnd}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium cursor-grab active:cursor-grabbing
                  bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30
                  hover:border-blue-400 transition-all ${draggedTopic === topic.id ? 'opacity-50 scale-95' : ''
                                    }`}
                            >
                                {topic.displayName[settings.language] || topic.name}
                            </div>
                        ))
                    )}

                    {/* Add Topic Button */}
                    <button
                        onClick={() => setShowTopicPicker(true)}
                        className="px-3 py-1.5 rounded-full text-sm font-medium
              bg-gray-700 border border-dashed border-gray-600 text-gray-400
              hover:border-blue-500 hover:text-blue-400 transition-all
              flex items-center gap-1"
                    >
                        <Plus size={14} />
                        Add
                    </button>
                </div>

                {/* Topic Picker Modal */}
                {showTopicPicker && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center">
                        <div className="bg-gray-800 w-full max-w-lg rounded-t-2xl p-4 pb-8 max-h-[70vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Select Topics</h3>
                                <button
                                    onClick={() => setShowTopicPicker(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    Done
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {unselectedTopics.map(topic => (
                                    <button
                                        key={topic.id}
                                        onClick={() => {
                                            addSelectedTopic(topic.id);
                                        }}
                                        className="p-3 rounded-xl bg-gray-700/50 border border-gray-600
                      hover:border-blue-500 hover:bg-gray-700 transition-all
                      text-left"
                                    >
                                        <div className="font-medium text-sm">
                                            {topic.displayName[settings.language] || topic.name}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {topic.questionCount} questions
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Difficulty Section */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-400">📊</span>
                    <h2 className="font-semibold">Difficulty</h2>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {DIFFICULTIES.map(d => (
                        <button
                            key={d.value}
                            onClick={() => updateSettings({ difficulty: d.value })}
                            className={`p-3 rounded-xl border transition-all flex items-center justify-between ${settings.difficulty === d.value
                                ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600'
                                }`}
                        >
                            <span>{d.label[settings.language]}</span>
                            {settings.difficulty === d.value && <Check size={16} />}
                        </button>
                    ))}
                </div>
            </section>

            {/* Push Notifications Section */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Bell size={18} className="text-blue-400" />
                    <h2 className="font-semibold">Notifications</h2>
                </div>

                {/* Push Count */}
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-300">Pushes per day</span>
                        <span className="text-lg font-bold text-blue-400">{settings.pushPerDay}</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="15"
                        value={settings.pushPerDay}
                        onChange={e => updateSettings({ pushPerDay: parseInt(e.target.value) })}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-blue-500
              [&::-webkit-slider-thumb]:shadow-lg"
                    />
                </div>

                {/* Time Range */}
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-300">Active hours</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1 block">Start</label>
                            <input
                                type="time"
                                value={settings.timeStart}
                                onChange={e => updateSettings({ timeStart: e.target.value })}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2
                  text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <span className="text-gray-500 mt-5">—</span>
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1 block">End</label>
                            <input
                                type="time"
                                value={settings.timeEnd}
                                onChange={e => updateSettings({ timeEnd: e.target.value })}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2
                  text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Language Section */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Globe size={18} className="text-blue-400" />
                    <h2 className="font-semibold">Language</h2>
                </div>

                <div className="flex gap-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.value}
                            onClick={() => updateSettings({ language: l.value })}
                            className={`flex-1 p-3 rounded-xl border transition-all ${settings.language === l.value
                                ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600'
                                }`}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Save Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
                <button
                    onClick={handleSaveSettings}
                    disabled={isSaving}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600
            font-semibold text-lg shadow-lg shadow-blue-500/25
            hover:shadow-blue-500/40 transition-all
            disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
            </div>
        </div>
    );
}
