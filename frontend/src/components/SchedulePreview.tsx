import { useMemo } from 'react';
import { Clock } from 'lucide-react';

interface SchedulePreviewProps {
    notificationTimeStart: string;
    notificationTimeEnd: string;
    pushesPerDay: number;
}

export const SchedulePreview = ({
    notificationTimeStart,
    notificationTimeEnd,
    pushesPerDay
}: SchedulePreviewProps) => {

    const schedule = useMemo(() => {
        if (!notificationTimeStart || !notificationTimeEnd || !pushesPerDay) {
            return [];
        }

        try {
            const [startHour, startMin] = notificationTimeStart.split(':').map(Number);
            const [endHour, endMin] = notificationTimeEnd.split(':').map(Number);

            const startMinutes = startHour * 60 + startMin;
            const endMinutes = endHour * 60 + endMin;

            if (endMinutes <= startMinutes) {
                return [];
            }

            const totalMinutes = endMinutes - startMinutes;
            const interval = totalMinutes / pushesPerDay;

            const times: string[] = [];
            for (let i = 0; i < pushesPerDay; i++) {
                const minutes = Math.round(startMinutes + (i * interval));
                const hour = Math.floor(minutes / 60);
                const min = minutes % 60;
                times.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
            }

            return times;
        } catch (error) {
            return [];
        }
    }, [notificationTimeStart, notificationTimeEnd, pushesPerDay]);

    if (schedule.length === 0) {
        return null;
    }

    return (
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-semibold text-blue-300">
                    Your Notification Schedule
                </h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {schedule.map((time, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-center"
                    >
                        <div className="text-xs text-gray-400 mb-1">#{index + 1}</div>
                        <div className="text-sm font-mono font-semibold text-white">{time}</div>
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-400 mt-3">
                You'll receive {pushesPerDay} notification{pushesPerDay > 1 ? 's' : ''} per day at these times
            </p>
        </div>
    );
};
