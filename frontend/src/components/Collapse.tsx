import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapseProps {
    title: ReactNode;
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
}

export const Collapse = ({
    title,
    children,
    defaultOpen = false,
    className = '',
    headerClassName = '',
    contentClassName = ''
}: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`border border-gray-700 rounded-xl overflow-hidden mb-2 ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left ${headerClassName}`}
            >
                <div className="font-medium text-gray-200">{title}</div>
                {isOpen ? (
                    <ChevronDown className="text-gray-400" size={20} />
                ) : (
                    <ChevronRight className="text-gray-400" size={20} />
                )}
            </button>

            {isOpen && (
                <div className={`p-4 bg-gray-900/50 border-t border-gray-700 ${contentClassName}`}>
                    {children}
                </div>
            )}
        </div>
    );
};