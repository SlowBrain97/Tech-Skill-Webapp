/**
 * Hook to detect and handle Add-To-Home-Screen (A2HS)
 */

import { useState, useEffect, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}

export interface UseA2HSReturn {
    /** Whether the app is installed (running in standalone mode) */
    isInstalled: boolean;
    /** Whether the install prompt is available */
    canInstall: boolean;
    /** Whether the installation is in progress */
    isInstalling: boolean;
    /** Trigger the install prompt */
    promptInstall: () => Promise<boolean>;
}

/**
 * Hook to detect A2HS status and provide install functionality
 */
export function useA2HS(): UseA2HSReturn {
    const [isInstalled, setIsInstalled] = useState(false);
    const [canInstall, setCanInstall] = useState(false);
    const [isInstalling, setIsInstalling] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        // Check if running in standalone mode (already installed)
        const checkStandalone = () => {
            const isStandalone =
                window.matchMedia('(display-mode: standalone)').matches ||
                (window.navigator as any).standalone === true ||
                document.referrer.includes('android-app://');

            setIsInstalled(isStandalone);
        };

        checkStandalone();

        // Listen for display mode changes
        const mediaQuery = window.matchMedia('(display-mode: standalone)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsInstalled(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);

        // Listen for beforeinstallprompt
        const handleBeforeInstall = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setCanInstall(true);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstall);

        // Listen for appinstalled
        const handleAppInstalled = () => {
            setIsInstalled(true);
            setCanInstall(false);
            setDeferredPrompt(null);
        };
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const promptInstall = useCallback(async (): Promise<boolean> => {
        if (!deferredPrompt) return false;

        setIsInstalling(true);

        try {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;

            setDeferredPrompt(null);
            setCanInstall(false);

            if (outcome === 'accepted') {
                setIsInstalled(true);
                return true;
            }

            return false;
        } catch (error) {
            console.error('Error prompting install:', error);
            return false;
        } finally {
            setIsInstalling(false);
        }
    }, [deferredPrompt]);

    return {
        isInstalled,
        canInstall,
        isInstalling,
        promptInstall,
    };
}
