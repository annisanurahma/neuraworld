import React from 'react';
import ThemeToggle from '../ThemeToggle';
import GlassCard from '../ui/GlassCard';

const locations = [
    { id: 'town-hall', name: 'Town Hall', status: 'Active', sector: '01' },
    { id: 'library', name: 'Library', status: 'Quiet', sector: '02' },
    { id: 'store', name: 'General Store', status: 'Busy', sector: '03' },
    { id: 'market', name: 'Market', status: 'Trading', sector: '04' },
];

const LocationSidebar = () => {
    return (
        <div className="h-full w-full bg-[var(--surface)] backdrop-blur-2xl border-r border-[var(--glass-border)] p-4 flex flex-col transition-all duration-300">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-orange-500 mb-8 tracking-tighter uppercase text-center drop-shadow-sm">
                LOCATIONS
            </h2>
            <div className="space-y-4">
                {locations.map((loc) => (
                    <GlassCard
                        key={loc.id}
                        className="group cursor-pointer !bg-opacity-40 hover:!bg-opacity-60 !border-opacity-30"
                    >
                        <div className="p-4 flex justify-between items-center relative z-10">
                            <div>
                                <span className="block text-[var(--foreground)] font-bold group-hover:text-[var(--accent)] transition-colors text-lg">
                                    {loc.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-[var(--accent)] opacity-70">
                                    Sector {loc.sector}
                                </span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full border ${loc.status === 'Active' ? 'border-green-500 text-green-500 bg-green-500/10' :
                                loc.status === 'Busy' ? 'border-amber-500 text-amber-500 bg-amber-500/10' :
                                    'border-slate-500 text-slate-500 bg-slate-500/10'
                                }`}>
                                {loc.status}
                            </span>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[var(--glass-border)] flex flex-col items-center gap-6">
                <ThemeToggle />
                <div className="text-[10px] text-slate-400 text-center uppercase tracking-[0.2em] font-light">
                    NeuraWorld v1.0
                    <span className="block text-[var(--accent)] font-bold mt-1">SYSTEM ONLINE</span>
                </div>
            </div>
        </div>
    );
};

export default LocationSidebar;
