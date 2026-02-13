import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({ children, className = '', hoverEffect = true, ...props }: GlassCardProps) => {
    return (
        <div
            className={`
                relative overflow-hidden rounded-2xl
                bg-[var(--surface)] backdrop-blur-xl
                border border-[var(--glass-border)]
                shadow-lg
                transition-all duration-300
                ${hoverEffect ? 'hover:shadow-xl hover:border-[var(--accent)] hover:-translate-y-1' : ''}
                ${className}
            `}
            {...props}
        >
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
