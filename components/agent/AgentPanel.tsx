import React from 'react';
import GlassCard from '../ui/GlassCard';

const AgentPanel = () => {
    const agents = [
        {
            id: 'liora',
            name: 'Liora',
            role: 'Archivist',
            status: 'Online',
            activity: 'Sorting data fragments',
            avatarColor: 'from-purple-500 to-indigo-600'
        },
        {
            id: 'nex',
            name: 'Nex',
            role: 'Observer',
            status: 'Idle',
            activity: 'Monitoring sector 7',
            avatarColor: 'from-blue-500 to-cyan-400'
        }
    ];

    return (
        <div className="h-full w-full bg-[var(--surface)] backdrop-blur-2xl border-l border-[var(--glass-border)] p-4 flex flex-col transition-all duration-300">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-orange-500 mb-8 tracking-tighter uppercase text-center drop-shadow-sm">
                AGENTS
            </h2>

            <div className="space-y-6">
                {agents.map((agent) => (
                    <GlassCard
                        key={agent.id}
                        className="group cursor-pointer !bg-opacity-30 hover:!bg-opacity-50 !border-opacity-30"
                    >
                        <div className="p-4">
                            <div className="flex items-center gap-4 mb-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${agent.avatarColor} shadow-lg flex items-center justify-center text-sm font-bold text-white ring-2 ring-white/20`}>
                                    {agent.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--foreground)] text-lg">{agent.name}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">{agent.role}</div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 dark:text-slate-400 font-medium">Status</span>
                                    <span className={`px-2 py-0.5 rounded-full border ${agent.status === 'Online'
                                        ? 'border-green-500 text-green-500 bg-green-500/10'
                                        : 'border-amber-500 text-amber-500 bg-amber-500/10'
                                        }`}>
                                        {agent.status}
                                    </span>
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 italic pl-2 border-l-2 border-[var(--accent)] opacity-80">
                                    &ldquo;{agent.activity}&rdquo;
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-auto">
                <GlassCard className="!bg-[var(--background)] !bg-opacity-50 !border-[var(--glass-border)]">
                    <div className="p-4">
                        <div className="flex justify-between items-end mb-2">
                            <div className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">System Load</div>
                            <div className="text-xs font-mono text-[var(--foreground)]">98%</div>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-[var(--accent)] to-orange-500 h-full w-[98%] animate-pulse shadow-[0_0_10px_var(--accent)]"></div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AgentPanel;
