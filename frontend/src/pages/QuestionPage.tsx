/**
 * Question display page - shows the current question from notification
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../state/appStore';
import { ChevronDown, ChevronUp, ArrowLeft, BookOpen, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function QuestionPage() {
    const navigate = useNavigate();
    const { currentQuestion, showAnswer, toggleShowAnswer, settings } = useAppStore();
    const [isAnimating, setIsAnimating] = useState(false);

    const { t } = useTranslation(['question', 'common']);
    const lang = settings.language || 'en';
    // Handle message from service worker
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'NOTIFICATION_CLICK' && event.data?.question) {
                useAppStore.getState().setCurrentQuestion({
                    ...event.data.question,
                    source: 'notification',
                });
            }
        };

        navigator.serviceWorker?.addEventListener('message', handleMessage);
        return () => {
            navigator.serviceWorker?.removeEventListener('message', handleMessage);
        };
    }, []);

    // Handle URL query param for ID (deep linking)
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (id && !currentQuestion) {
            import('../db/db').then(({ getAllStaticQuestions }) => {
                getAllStaticQuestions().then(questions => {
                    const found = questions.find(q => q.id === id);
                    if (found) {
                        useAppStore.getState().setCurrentQuestion({
                            ...found, // Cast to any if needed or match type
                        } as any);
                    }
                });
            });
        }
    }, [currentQuestion]);

    const handleToggleAnswer = () => {
        setIsAnimating(true);
        toggleShowAnswer();
        setTimeout(() => setIsAnimating(false), 300);
    };

    if (!currentQuestion) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 flex flex-col items-center justify-center">
                <div className="text-center">
                    <AlertCircle size={64} className="text-gray-600 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-gray-400 mb-2">{t('question:emptyState:noQuestion')}</h2>
                    <p className="text-gray-500 mb-6">{t('question:emptyState:hint')}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-colors"
                    >
                        {t('question:emptyState:goHome')}
                    </button>
                </div>
            </div>
        );
    }

    const content = currentQuestion.content[lang] || currentQuestion.content.en;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Header */}
            <header className="sticky top-0 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 p-4 z-10">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase
                ${currentQuestion.source === 'static'
                                    ? 'bg-blue-500/20 text-blue-400'
                                    : 'bg-purple-500/20 text-purple-400'}`}>
                                {currentQuestion.topicId}
                            </span>
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-300">
                                {t(`common:difficulty:${currentQuestion.difficulty}`)}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Question */}
            <main className="p-4 pb-32">
                {/* Question Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-2xl border border-gray-700 p-5 mb-4">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                            <BookOpen size={20} />
                        </div>
                        <h1 className="text-lg font-semibold leading-relaxed flex-1">
                            {content.title}
                        </h1>
                    </div>

                    {content.body && (
                        <div className="text-gray-400 text-sm leading-relaxed pl-10">
                            {content.body}
                        </div>
                    )}
                </div>

                {/* Answer Section */}
                <div className="bg-gray-800/30 rounded-2xl border border-gray-700 overflow-hidden">
                    <button
                        onClick={handleToggleAnswer}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                    >
                        <span className="font-medium text-gray-300">
                            {showAnswer ? t('question:question:showAnswer') : t('question:question:hideAnswer')}
                        </span>
                        {showAnswer ? (
                            <ChevronUp size={20} className={`text-gray-400 ${isAnimating ? 'animate-bounce' : ''}`} />
                        ) : (
                            <ChevronDown size={20} className={`text-gray-400 ${isAnimating ? 'animate-bounce' : ''}`} />
                        )}
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${showAnswer ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="p-4 pt-0 border-t border-gray-700">
                            <div className="prose prose-invert prose-sm max-w-none">
                                <div
                                    className="text-gray-300 leading-relaxed whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: formatSolution(content.solution)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/settings')}
                        className="flex-1 py-3 rounded-xl bg-gray-800 border border-gray-700
              font-medium hover:bg-gray-700 transition-colors"
                    >
                        {t('question:navigation:settings')}
                    </button>
                    <button
                        onClick={handleToggleAnswer}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600
              font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                    >
                        {showAnswer ? t('question:question:hideAnswer') : t('question:question:showAnswer')}
                    </button>
                </div>
            </div>
        </div>
    );
}

/**
 * Format solution text with basic markdown-like styling
 */
function formatSolution(text: string): string {
    return text
        // Bold text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-400">$1</strong>')
        // Code blocks
        .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1.5 py-0.5 rounded text-pink-400">$1</code>')
        // Line breaks
        .replace(/\n/g, '<br />');
}
