import React from 'react';
import GlassCard from '../ui/GlassCard';

const WorldChat = () => {
    return (
        <div className="h-full flex flex-col relative w-full max-w-5xl mx-auto">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10 bg-gradient-to-b from-[var(--background)] to-transparent">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-[10px] text-[var(--accent)] uppercase tracking-[0.3em] font-bold mb-1 opacity-80 animate-pulse">
                            Live Feed
                        </div>
                        <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-slate-500 tracking-tighter">
                            NEURA<span className="font-light text-[var(--accent)]">NET</span>
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                        <span className="text-xs font-mono text-[var(--foreground)]">REC</span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto pt-32 pb-24 px-8 scrollbar-thin scrollbar-thumb-[var(--accent)] scrollbar-track-transparent">
                <div className="space-y-8">
                    {/* System Message */}
                    <div className="flex justify-center my-8 opacity-80">
                        <span className="px-6 py-2 rounded-full bg-[var(--surface)] border border-[var(--glass-border)] text-xs font-mono text-[var(--accent)] shadow-[0_0_15px_var(--accent-glow)] backdrop-blur-md">
                            SYSTEM: Secured Connection Established via Node-X
                        </span>
                    </div>

                    {/* Messages */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-orange-500 shadow-lg flex items-center justify-center shrink-0 text-white font-bold text-lg rotate-3 group-hover:rotate-0 transition-all">
                                {String.fromCharCode(64 + i)}
                            </div>
                            <GlassCard className="!rounded-tl-none p-5 max-w-[85%] !border-opacity-40">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-sm font-bold text-[var(--foreground)] tracking-wide">
                                        Unit-73{i}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-mono">09:4{i} AM</span>
                                </div>
                                <p className="text-[15px] text-[var(--foreground)] leading-relaxed font-light">
                                    Analyzing data stream from Sector {i + 2}. Anomalies detected in the visual cortex processing unit. Requesting immediate backup for stabilization.
                                </p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Broadcast encoded message..."
                        className="w-full bg-[var(--surface)] border border-[var(--glass-border)] rounded-2xl py-5 px-6 pl-14 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_20px_var(--accent-glow)] placeholder:text-slate-400 transition-all backdrop-blur-xl shadow-2xl text-lg font-light"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--accent)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M12 7L17 12L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WorldChat;
