/**
 * Main App component with routing
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SettingsPage } from './pages/SettingsPage';
import { QuestionPage } from './pages/QuestionPage';
import { InstallPage } from './pages/InstallPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { useAppStore } from './state/appStore';
import { useA2HS } from './hooks/useA2HS';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import { performDailyCleanup, getStaticQuestionCount } from './db/db';

function App() {
  const { isInstalled, isPreloaded, setIsInstalled, setIsPreloaded, loadFromIndexedDB, settings } = useAppStore();
  const { isInstalled: isA2HSInstalled } = useA2HS();

  const { i18n } = useTranslation();

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

      // Daily cleanup
      await performDailyCleanup();
    };

    init();
  }, []);

  // Sync language with i18n
  useEffect(() => {
    if (settings.language && i18n.language !== settings.language) {
      i18n.changeLanguage(settings.language);
    }
  }, [settings.language, i18n]);

  // Listen for messages from service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data?.type === 'NOTIFICATION_CLICK') {
          // Handle notification click from SW
          useAppStore.getState().setCurrentQuestion(event.data.question);
        }
      });
    }
  }, []);

  // If not installed or not preloaded, show install page
  if (!isInstalled || !isPreloaded) {
    return (
      <BrowserRouter>
        <InstallPage />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Toaster position="bottom-center" toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/question" element={<QuestionPage />} />

        {/* Admin routes (keep for CRUD) */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/settings" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
