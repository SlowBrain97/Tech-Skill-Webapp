import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useAppStore } from '../state/appStore';
import {
    getPushedToday,
    getAllPushedHistory,
    getAllStaticQuestions,
    StaticQuestion
} from '../db/db';
import { Collapse } from '../components/Collapse';
import { Clock, Calendar, Eye, EyeOff } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface QuestionDisplayProps {
    question: StaticQuestion;
    pushedAt?: string;
}

const QuestionItem = forwardRef<QuestionRefType, QuestionDisplayProps>(({ question, pushedAt }: QuestionDisplayProps, ref) => {
    const { settings } = useAppStore();
    const lang = settings.language;
    const content = question.content[lang] || question.content['en'];
    const [showSolution, setShowSolution] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const collapseRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        ...collapseRef.current!
    }));

    return (
        <Collapse
            title={
                <div className="flex flex-col">
                    <span className="font-semibold">{content.title}</span>
                    <span className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold border ${question.difficulty === 'fresher' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                            question.difficulty === 'junior' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                                question.difficulty === 'middle' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' :
                                    'border-red-500/30 text-red-400 bg-red-500/10'
                            }`}>
                            {question.difficulty}
                        </span>
                        {pushedAt && (
                            <span className="flex items-center gap-1">
                                <Clock size={10} />
                                {new Date(pushedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        )}
                    </span>
                </div>
            }
            className="mb-3 border-gray-700/50"
            headerClassName="bg-gray-800/30 hover:bg-gray-800/50"
            ref={collapseRef}
            defaultOpen={isOpen}
        >
            <div className="space-y-4">
                <div className="text-gray-300 whitespace-pre-wrap">
                    {content.body}
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-gray-400">Answer</h4>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowSolution(!showSolution);
                            }}
                            className="text-xs flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
                            {showSolution ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div
                        onClick={() => !showSolution && setShowSolution(true)}
                        className={`p-4 rounded-lg transition-all cursor-pointer relative overflow-hidden ${showSolution
                            ? 'bg-green-900/20 text-gray-200'
                            : 'bg-gray-800 text-gray-800 select-none'
                            }`}
                    >
                        <div className={showSolution ? '' : 'blur-md filter'}>
                            {content.solution || "No solution provided."}
                        </div>
                        {!showSolution && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-[2px]">
                                <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                    <Eye size={16} /> Tap to reveal
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Collapse>
    );
});
interface QuestionItemHandle {
    open: () => void;
}
type QuestionRefType = HTMLDivElement & QuestionItemHandle;
export function HomePage() {
    const [todayQuestions, setTodayQuestions] = useState<any[]>([]);
    const [historyQuestions, setHistoryQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const questionRef = useRef<{ [key: string]: QuestionRefType | null }>({});
    const { id } = useParams();
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                // 1. Get all questions for lookup
                const allQuestions = await getAllStaticQuestions();
                const qMap = new Map(allQuestions.map(q => [q.id, q]));

                // 2. Get today's pushed
                const today = await getPushedToday();
                const todayItems = today.map(item => ({
                    ...item,
                    question: qMap.get(item.id)
                })).filter(i => i.question);

                setTodayQuestions(todayItems);

                // 3. Get history (last 3 days)
                const allHistory = await getAllPushedHistory();

                const sortedHistory = allHistory.sort((a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                const historyItems = sortedHistory.flatMap(h =>
                    h.items.map(item => ({
                        ...item,
                        date: h.date,
                        question: qMap.get(item.id)
                    }))
                ).filter(i => i.question);

                setHistoryQuestions(historyItems);

            } catch (error) {
                console.error("Failed to load home data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    useEffect(() => {
        if (id && questionRef.current[id]) {

            questionRef.current[id]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            questionRef.current[id]?.setAttribute('defaultOpen', 'true');
            questionRef.current[id]?.classList.add('animate-flash-light');
            questionRef.current[id]?.focus?.();
            setTimeout(() => {
                questionRef.current[id]?.classList.remove('animate-flash-light');
            }, 1500);
        }
    }, [id])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 pb-24">
            <header className="mb-6 pt-2">
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Daily Knowledge
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">Grow your tech skills every day</p>
                    </div>
                    <button
                        onClick={() => navigate('/settings')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-400 to-emerald-400 hover:from-blue-500 hover:to-emerald-500 rounded-xl font-medium transition-colors"
                    >
                        Go to Settings
                    </button>
                </div>

            </header>

            {loading ? (
                <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Today Section */}
                    <section>
                        <Collapse
                            title={
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-blue-500/20 rounded-lg">
                                        <Clock size={18} className="text-blue-400" />
                                    </div>
                                    <span className="font-bold text-lg">Today's Questions</span>
                                    <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {todayQuestions.length}
                                    </span>
                                </div>
                            }
                            defaultOpen={true}
                            className="border-blue-500/30 bg-blue-500/5"
                            headerClassName="bg-transparent hover:bg-blue-500/10"
                        >
                            {todayQuestions.length > 0 ? (
                                <div className="space-y-2 pt-2">
                                    {todayQuestions.map(item => (
                                        <QuestionItem
                                            key={item.id}
                                            ref={el => { questionRef.current[item.id] = el }}
                                            question={item.question}
                                            pushedAt={item.pushedAt}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No questions yet today.</p>
                                    <p className="text-xs mt-1">Wait for notifications!</p>
                                </div>
                            )}
                        </Collapse>
                    </section>

                    {/* History Section */}
                    <section>
                        <Collapse
                            title={
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-purple-500/20 rounded-lg">
                                        <Calendar size={18} className="text-purple-400" />
                                    </div>
                                    <span className="font-bold text-lg">Recent History</span>
                                    <span className="ml-auto bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {historyQuestions.length}
                                    </span>
                                </div>
                            }
                            defaultOpen={historyQuestions.length > 0}
                            className="border-purple-500/30 bg-purple-500/5"
                            headerClassName="bg-transparent hover:bg-purple-500/10"
                        >
                            {historyQuestions.length > 0 ? (
                                <div className="space-y-6 pt-2">
                                    {historyQuestions.map((item, idx) => {
                                        const showDateHeader = idx === 0 || item.date !== historyQuestions[idx - 1].date;
                                        return (
                                            <div key={item.id + item.date}>
                                                {showDateHeader && (
                                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4 ml-1">
                                                        {item.date}
                                                    </div>
                                                )}
                                                <QuestionItem
                                                    question={item.question}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No recent history.</p>
                                </div>
                            )}
                        </Collapse>
                    </section>
                </div>
            )}
        </div>
    );
}
