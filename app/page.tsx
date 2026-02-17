"use client";

import Navbar from "@/components/landing/Navbar";
import { Terminal, Shield, Cpu, Zap, ArrowRight, Command, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <main className="min-h-screen bg-[#15173D] text-white selection:bg-[#E491C9] selection:text-[#15173D]">
            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#982598] opacity-20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative mx-auto max-w-7xl text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#982598]/10 border border-[#982598]/30 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E491C9] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E491C9]"></span>
                        </span>
                        <span className="text-sm font-medium text-[#E491C9] tracking-wide">NeuraAgent CLI v1.0 Live</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="block text-white">Your Terminal,</span>
                        <span className="bg-gradient-to-r from-[#982598] to-[#E491C9] bg-clip-text text-transparent">Reimagined.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10 leading-relaxed">
                        Interaction with Bankr AI shouldn't be boring. Experience the premium
                        <span className="text-[#E491C9]"> Cyberpunk TUI wrapper</span> that transforms your command line into a neural interface.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-[#982598] hover:bg-[#851e85] rounded-xl font-bold text-white shadow-[0_0_20px_rgba(152,37,152,0.5)] transition-all hover:shadow-[0_0_30px_rgba(152,37,152,0.7)] hover:-translate-y-1">
                            <span className="flex items-center gap-2">
                                Initialize System
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 rounded-xl border border-[#982598]/30 hover:border-[#E491C9]/50 hover:bg-[#982598]/10 font-medium text-slate-200 transition-all">
                            View Documentation
                        </button>
                    </div>
                </div>

                {/* Terminal Visual */}
                <div className="mt-20 mx-auto max-w-4xl relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#982598] to-[#E491C9] rounded-2xl blur opacity-30"></div>
                    <div className="relative rounded-xl bg-[#0a0b1e] border border-[#982598]/20 shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#15173D]/50 border-b border-[#982598]/20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-slate-500 font-mono">neura-agent — node</div>
                        </div>
                        <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
                            <div className="flex gap-2 text-[#E491C9]">
                                <span className="opacity-50">❯</span>
                                <span>npm run neura-agent</span>
                            </div>
                            <div className="text-[#982598] animate-pulse">Initializing NeuraLink Core...</div>
                            <div className="text-slate-400 pl-4 border-l-2 border-[#982598]/30">
                                <div>[OK] Loading Modules...</div>
                                <div>[OK] Establishing Secure Connection...</div>
                                <div>[OK] Theme: Cyberpunk v2</div>
                            </div>
                            <div className="pt-4 text-[#00F0FF]">
                                <pre className="font-bold leading-none">
                                    {`
  _   _                         _                    _   
 | \\ | | ___ _   _ _ __ __ _   / \\   __ _  ___ _ __ | |_ 
 |  \\| |/ _ \\ | | | '__/ _\` | / _ \\ / _\` |/ _ \\ '_ \\| __|
 | |\\  |  __/ |_| | | | | | |/ ___ \\ (_| |  __/ | | | |_ 
 |_| \\_|\\___|\\__,_|_| |_| |_/_/   \\_\\__, |\\___|_| |_|\\__|
                                    |___/                 
                                `}
                                </pre>
                            </div>
                            <div className="pt-2 text-white">
                                <span className="text-[#E491C9]">❯</span> Welcome back, Operator. Select interaction mode.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#15173D] relative">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            System <span className="text-[#E491C9]">Modules</span>
                        </h2>
                        <p className="text-slate-400">Advanced capabilities wrapped in a beautiful interface.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Terminal className="w-8 h-8 text-[#E491C9]" />,
                                title: "Neural Interface",
                                desc: "Interactive chat mode with history awareness and context retention."
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-[#982598]" />,
                                title: "Secure Gate",
                                desc: "Multiple authentication methods including email and API key injection."
                            },
                            {
                                icon: <Cpu className="w-8 h-8 text-[#00F0FF]" />,
                                title: "System Diagnostics",
                                desc: "Real-time status checks and configuration management."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-[#E491C9]" />,
                                title: "Instant Prompt",
                                desc: "Quick-fire single shot queries for immediate results."
                            },
                            {
                                icon: <Command className="w-8 h-8 text-[#982598]" />,
                                title: "Smart Wrappers",
                                desc: "Intelligent error handling and formatted output for bankr commands."
                            },
                            {
                                icon: <ChevronRight className="w-8 h-8 text-[#00F0FF]" />,
                                title: "Cyberpunk TUI",
                                desc: "Aesthetic terminal UI with animations, spinners, and box layouts."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-[#1A1D4D] border border-[#982598]/10 hover:border-[#E491C9]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#982598]/20">
                                <div className="mb-4 p-3 rounded-xl bg-[#15173D] inline-block border border-[#982598]/20 group-hover:bg-[#982598]/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#982598]/20 bg-gradient-to-b from-[#15173D] to-[#0f102b]">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Ready to <span className="text-[#982598]">Upgrade?</span>
                    </h2>

                    <div className="bg-[#0a0b1e] rounded-xl border border-[#982598]/30 p-8 text-left shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 text-[#E491C9] text-xs font-mono">BASH</div>

                        <div className="space-y-4 font-mono text-sm md:text-base">
                            <div className="flex gap-4 items-center text-slate-400">
                                <span className="text-[#982598]">#</span>
                                <span>Clone Repository</span>
                            </div>
                            <div className="p-4 bg-[#15173D] rounded-lg border border-[#982598]/10 text-slate-300">
                                git clone https://github.com/annisanurahma/neuraworld.git
                            </div>

                            <div className="flex gap-4 items-center text-slate-400 mt-6">
                                <span className="text-[#982598]">#</span>
                                <span>Install Dependencies</span>
                            </div>
                            <div className="p-4 bg-[#15173D] rounded-lg border border-[#982598]/10 text-slate-300">
                                npm install
                            </div>

                            <div className="flex gap-4 items-center text-slate-400 mt-6">
                                <span className="text-[#982598]">#</span>
                                <span>Launch NeuraAgent</span>
                            </div>
                            <div className="p-4 bg-[#982598]/10 rounded-lg border border-[#E491C9]/30 text-[#E491C9] flex justify-between items-center cursor-pointer hover:bg-[#982598]/20 transition-colors">
                                <span>npm run neura-agent</span>
                                <span className="text-xs opacity-70">COPY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-[#982598]/10 text-center text-slate-500 text-sm">
                <p>© 2026 NeuraWorld. Powered by Bankr AI.</p>
            </footer>
        </main>
    );
}
