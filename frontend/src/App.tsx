/**
 * Main App component with routing
 */

import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SettingsPage } from './pages/SettingsPage';
import { QuestionPage } from './pages/QuestionPage';
import { HomePage } from './pages/HomePage';
import { InstallPage } from './pages/InstallPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { useAppStore } from './state/appStore';
import { useA2HS } from './hooks/useA2HS';
import { performDailyCleanup, getStaticQuestionCount, getAllStaticQuestions, StaticQuestion, getPushedToday, getAllPushedHistory } from './db/db';
import { useNavigate } from 'react-router-dom';
import i18n from './i18n/i18n';

function App() {
  const { allStaticQuestions, setTodayPushedQuestions, setHistoryPushedQuestions, setIsLoading, isInstalled, isPreloaded, setIsInstalled, setIsPreloaded, loadFromIndexedDB, settings, setAllStaticQuestions } = useAppStore();
  const { isInstalled: isA2HSInstalled } = useA2HS();
  const navigate = useNavigate();

  // Initialize app on mount
  useEffect(() => {
    const init = async () => {
      // Load settings from IndexedDB
      await loadFromIndexedDB();

      // Check if preloaded
      const questionCount = await getStaticQuestionCount();
      if (questionCount > 0) {
        setIsPreloaded(true);
      }

      // Check A2HS status
      if (isA2HSInstalled) {
        setIsInstalled(true);
      }
      const qMap = new Map<string, StaticQuestion>();
      const staticQuestions = await getAllStaticQuestions();
      staticQuestions.map((q) => {
        qMap.set(q.id, q);
      })

      setAllStaticQuestions(qMap);
      // Daily cleanup
      await performDailyCleanup();
    };

    init();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Load today questions
      const todayQuestions = await getPushedToday();
      setTodayPushedQuestions(todayQuestions);

      // Load history questions
      const allHistory = await getAllPushedHistory();

      const sortedHistory = allHistory.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      const historyItems = sortedHistory.flatMap(h =>
        h.items.map(item => ({
          ...item,
          date: h.date,
          question: allStaticQuestions.get(item.id)
        }))
      ).filter(i => i.question);

      setHistoryPushedQuestions(historyItems);
      setIsLoading(false);
    }
    loadData();
  }, [])

  // Sync language with i18n
  useEffect(() => {
    if (settings.language && i18n.language !== settings.language) {
      i18n.changeLanguage(settings.language);
    }
  }, [settings.language, i18n]);

  // Listen for messages from service worker
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === 'NOTIFICATION_CLICK') {
        const question = data.question;
        const questionId = question.id;
        (async () => {
          setIsLoading(true);
          const todayQuestions = await getPushedToday();
          setTodayPushedQuestions(todayQuestions);
          setIsLoading(false);
        });
        navigate(`/?id=${questionId}`);
      }
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', handleMessage);
    }
    return () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.removeEventListener('message', handleMessage);
      }
    }
  }, []);

  // If not installed or not preloaded, show install page
  if (!isInstalled || !isPreloaded) {
    return (
      <InstallPage />
    );
  }

  return (

    <Routes>
      {/* Main routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/question" element={<QuestionPage />} />

      {/* Admin routes (keep for CRUD) */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
