/**
 * Install page shown when app is not installed
 */

import { useState } from 'react';
import { useA2HS } from '../hooks/useA2HS';
import { preloadStaticQuestions } from '../services/preload';
import { initializePushAfterInstall } from '../services/pushService';
import { performDailyCleanup } from '../db/db';
import { useAppStore } from '../state/appStore';
import { Smartphone, Download, Bell, Zap, Check } from 'lucide-react';

type InstallStep = 'prompt' | 'installing' | 'preloading' | 'done';

export function InstallPage() {
    const { canInstall, promptInstall, isInstalled } = useA2HS();
    const { setIsInstalled, setIsPreloaded, setPreloadProgress } = useAppStore();
    const [step, setStep] = useState<InstallStep>('prompt');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleInstall = async () => {
        try {
            setError(null);
            setStep('installing');

            // Prompt install (if available)
            if (canInstall) {
                const accepted = await promptInstall();
                if (!accepted) {
                    setStep('prompt');
                    return;
                }
            }

            setStep('preloading');

            await preloadStaticQuestions((progress) => {
                const percent = Math.round((progress.loaded / progress.total) * 100);
                setPreloadProgress(percent);
            });

            await initializePushAfterInstall();

            await performDailyCleanup();

            setIsInstalled(true);
            setIsPreloaded(true);
            setStep('done');
            navigate('/settings');
        } catch (err) {
            console.error('Installation failed:', err);
            setError('Installation failed. Please try again.');
            setStep('prompt');
        }
    };


    if (isInstalled && step === 'prompt') {
        handleInstall();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">

                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/30">
                    <Zap size={48} className="text-white" />
                </div>

                <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Tech Skill Notification
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-sm">
                    Learn tech skills with daily push notifications. Quick questions, instant growth.
                </p>

                {/* Features */}
                <div className="grid gap-4 mb-8 w-full max-w-sm">
                    <FeatureItem icon={<Bell size={20} />} text="Smart push notifications" />
                    <FeatureItem icon={<Smartphone size={20} />} text="Works offline" />
                    <FeatureItem icon={<Download size={20} />} text="Install as app" />
                </div>

                {/* Status Message */}
                {step === 'preloading' && (
                    <div className="mb-6 w-full max-w-sm">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                                style={{ width: `${useAppStore.getState().preloadProgress}%` }}
                            />
                        </div>
                        <p className="text-gray-500 text-sm mt-2">Loading questions...</p>
                    </div>
                )}

                {step === 'done' && (
                    <div className="mb-6 flex items-center gap-2 text-green-400">
                        <Check size={20} />
                        <span>Setup complete!</span>
                    </div>
                )}

                {error && (
                    <div className="mb-6 text-red-400 text-sm">
                        {error}
                    </div>
                )}
            </div>

            {/* Install Button */}
            <div className="p-6 pb-10">
                <button
                    onClick={handleInstall}
                    disabled={step === 'installing' || step === 'preloading'}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600
            font-semibold text-lg shadow-xl shadow-blue-500/30
            hover:shadow-blue-500/50 hover:scale-[1.02] transition-all
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {step === 'prompt' && (canInstall ? 'Install App' : 'Get Started')}
                    {step === 'installing' && 'Installing...'}
                    {step === 'preloading' && 'Setting up...'}
                    {step === 'done' && 'Continue'}
                </button>

                {!canInstall && step === 'prompt' && (
                    <p className="text-gray-500 text-xs text-center mt-4">
                        For the best experience, add this app to your home screen
                    </p>
                )}
            </div>
        </div>
    );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-blue-400">{icon}</div>
            <span className="text-gray-300">{text}</span>
        </div>
    );
}
