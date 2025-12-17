

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
    isInstalled: boolean;
    canInstall: boolean;
    isInstalling: boolean;
    promptInstall: () => Promise<boolean>;
}


export function useA2HS(): UseA2HSReturn {
    const [isInstalled, setIsInstalled] = useState(false);
    const [canInstall, setCanInstall] = useState(false);
    const [isInstalling, setIsInstalling] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {

        const checkStandalone = () => {
            const isStandalone =
                window.matchMedia('(display-mode: standalone)').matches ||
                (window.navigator as any).standalone === true ||
                document.referrer.includes('android-app://');

            setIsInstalled(isStandalone);
        };

        checkStandalone();


        const mediaQuery = window.matchMedia('(display-mode: standalone)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsInstalled(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);


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
