/**
 * Admin Dashboard - kept for CRUD operations
 * Protected by admin auth
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Edit, BookOpen, Tag } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '';

interface Topic {
    _id: string;
    name: string;
    displayName: { en: string; vi: string; jp: string };
    isActive: boolean;
}

interface Question {
    _id: string;
    topicId: string;
    difficulty: string;
    content: {
        en: { title: string; body: string; solution: string };
        vi: { title: string; body: string; solution: string };
        jp: { title: string; body: string; solution: string };
    };
}

export function AdminDashboard() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [topics, setTopics] = useState<Topic[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Simple admin auth (replace with proper JWT auth in production)
    const handleLogin = async () => {
        // TODO: Implement proper admin auth
        if (adminPassword === import.meta.env.VITE_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuth', 'true');
        } else {
            alert('Invalid password');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('adminAuth') === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            loadTopics();
        }
    }, [isAuthenticated]);

    const loadTopics = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/api/topics`);
            const data = await res.json();
            setTopics(data.dynamic || []);
        } catch (error) {
            console.error('Failed to load topics:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadQuestions = async (topicId: string) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/api/questions?topicId=${topicId}`);
            const data = await res.json();
            setQuestions(data);
            setSelectedTopic(topicId);
        } catch (error) {
            console.error('Failed to load questions:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <input
                        type="password"
                        value={adminPassword}
                        onChange={e => setAdminPassword(e.target.value)}
                        placeholder="Admin Password"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 text-white"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            {/* Header */}
            <header className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => navigate('/settings')}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </header>

            {/* Topics List */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold flex items-center gap-2">
                        <Tag size={18} className="text-blue-400" />
                        Topics
                    </h2>
                    <button className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                        <Plus size={18} />
                    </button>
                </div>

                {loading && <p className="text-gray-500">Loading...</p>}

                <div className="grid gap-2">
                    {topics.map(topic => (
                        <button
                            key={topic._id}
                            onClick={() => loadQuestions(topic._id)}
                            className={`p-4 rounded-xl text-left transition-colors ${selectedTopic === topic._id
                                ? 'bg-blue-500/20 border border-blue-500'
                                : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            <div className="font-medium">{topic.displayName.en}</div>
                            <div className="text-sm text-gray-400">{topic.name}</div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Questions List */}
            {selectedTopic && (
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold flex items-center gap-2">
                            <BookOpen size={18} className="text-purple-400" />
                            Questions
                        </h2>
                        <button className="p-2 bg-purple-500 rounded-lg hover:bg-purple-600">
                            <Plus size={18} />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {questions.map(q => (
                            <div
                                key={q._id}
                                className="p-4 bg-gray-800 border border-gray-700 rounded-xl"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <span className="text-xs px-2 py-0.5 bg-gray-700 rounded text-gray-300">
                                            {q.difficulty}
                                        </span>
                                        <h3 className="font-medium mt-2">{q.content.en.title}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-1.5 text-gray-400 hover:text-blue-400">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-1.5 text-gray-400 hover:text-red-400">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Logout */}
            <button
                onClick={() => {
                    localStorage.removeItem('adminAuth');
                    setIsAuthenticated(false);
                }}
                className="fixed bottom-4 right-4 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
            >
                Logout
            </button>
        </div>
    );
}
