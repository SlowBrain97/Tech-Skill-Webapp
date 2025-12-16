/**
 * Push subscription service
 */

import toast from 'react-hot-toast';
import { getDevice, generateDeviceUUID, getSettings } from '../db/db';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY || '';

export async function registerSubscription(subscription: PushSubscription): Promise<boolean> {
    try {
        const uuid = await getOrCreateDeviceUUID();
        const settings = await getSettings();

        const response = await fetch(`${API_URL}/api/push/subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceUUID: uuid,
                pushSubscription: subscription.toJSON(),
                selectedTopics: settings.selectedTopics,
                difficulty: settings.difficulty,
                pushPerDay: settings.pushPerDay,
                timeStart: settings.timeStart,
                timeEnd: settings.timeEnd,
                timeZone: settings.timeZone,
            }),
        });

        if (response.ok) {
            toast.success('Push notifications enabled!');
        } else {
            toast.error('Failed to enable notifications');
        }

        return response.ok;
    } catch (error) {
        console.error('Failed to register subscription:', error);
        toast.error('Failed to enable notifications');
        return false;
    }
}


export async function syncSettingsToBackend(): Promise<boolean> {
    try {
        const uuid = await getOrCreateDeviceUUID();
        const settings = await getSettings();

        const response = await fetch(`${API_URL}/api/push/settings/${uuid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                selectedTopics: settings.selectedTopics,
                difficulty: settings.difficulty,
                pushPerDay: settings.pushPerDay,
                timeStart: settings.timeStart,
                timeEnd: settings.timeEnd,
                timeZone: settings.timeZone,
            }),
        });

        if (response.ok) {
            toast.success('Settings saved successfully!');
        } else {
            toast.error('Failed to save settings');
        }

        return response.ok;
    } catch (error) {
        console.error('Failed to sync settings:', error);
        toast.error('Failed to save settings');
        return false;
    }
}



function urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


export function isPushSupported(): boolean {
    return 'serviceWorker' in navigator && 'PushManager' in window;
}

export async function getOrCreateDeviceUUID(): Promise<string> {
    const device = await getDevice();
    if (device?.uuid) {
        return device.uuid;
    }
    return generateDeviceUUID();
}


export function getNotificationPermission(): NotificationPermission {
    if (!('Notification' in window)) {
        return 'denied';
    }
    return Notification.permission;
}
export async function getExistingPushSubscription(): Promise<PushSubscription | null> {
    const registration = await navigator.serviceWorker.ready;
    return registration.pushManager.getSubscription();
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
        throw new Error('Notifications not supported');
    }
    return Notification.requestPermission();
}


export async function ensureNotificationPermission(): Promise<{ granted: boolean; needsManualAction: boolean }> {
    if (!isPushSupported()) {
        return { granted: false, needsManualAction: false };
    }

    const currentPermission = getNotificationPermission();

    if (currentPermission === 'granted') {
        return { granted: true, needsManualAction: false };
    }

    if (currentPermission === 'denied') {

        return { granted: false, needsManualAction: true };
    }


    const newPermission = await requestNotificationPermission();
    return { granted: newPermission === 'granted', needsManualAction: newPermission === 'denied' };
}


export async function subscribeToPush(): Promise<PushSubscription | null> {
    if (!isPushSupported()) {
        console.warn('Push notifications not supported');
        return null;
    }


    const permission = await requestNotificationPermission();
    if (permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
    }


    const registration = await navigator.serviceWorker.ready;


    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {

        subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as BufferSource,
        });
    }

    return subscription;
}
export async function getExistingOrCreateSubscription(): Promise<PushSubscription | null> {
    const subscription = await subscribeToPush();
    if (subscription) {
        await registerSubscription(subscription);
    }
    return subscription;
}

export async function unsubscribeFromPush(): Promise<boolean> {
    try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();

        if (subscription) {
            await subscription.unsubscribe();


            const uuid = await getOrCreateDeviceUUID();
            await fetch(`${API_URL}/api/push/unsubscribe/${uuid}`, {
                method: 'DELETE',
            });

            toast.success('Notifications disabled');
        }

        return true;
    } catch (error) {
        console.error('Failed to unsubscribe:', error);
        toast.error('Failed to disable notifications');
        return false;
    }
}


export async function initializePushAfterInstall(): Promise<boolean> {
    try {
        // Get or create UUID
        await getOrCreateDeviceUUID();

        // Subscribe to push
        const subscription = await subscribeToPush();
        if (!subscription) {
            return false;
        }

        // Register with backend
        const registered = await registerSubscription(subscription);
        return registered;
    } catch (error) {
        console.error('Failed to initialize push:', error);
        return false;
    }
}
