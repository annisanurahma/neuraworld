"use client";

import Navbar from "@/components/landing/Navbar";
import { Terminal, Shield, Cpu, Zap, ArrowRight, Command, ChevronRight, Copy, Check, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState("Home");
    const [copied, setCopied] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const fullText = "npm run neura-agent";

    // Simulate System Boot / Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Typewriter Effect
    useEffect(() => {
        if (isLoading) return;

        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.substring(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [isLoading]);

    // Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Copy to Clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText("npm run neura-agent");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // --- SKELETON COMPONENT ---
    if (isLoading) {
        return (
            <main className="min-h-screen bg-[#15173D] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Navbar Skeleton */}
                <div className="fixed top-0 w-full h-20 border-b border-[#982598]/20 bg-[#15173D]/90 backdrop-blur-md z-50 animate-pulse"></div>

                <div className="w-full max-w-4xl px-6 space-y-8 animate-pulse z-10">
                    {/* Badge */}
                    <div className="h-8 w-48 bg-[#982598]/20 rounded-full mx-auto"></div>

                    {/* Title */}
                    <div className="space-y-4">
                        <div className="h-16 w-3/4 bg-[#1A1D4D] rounded-xl mx-auto border border-[#982598]/10"></div>
                        <div className="h-16 w-1/2 bg-[#1A1D4D] rounded-xl mx-auto border border-[#982598]/10"></div>
                    </div>

                    {/* Text */}
                    <div className="h-4 w-2/3 bg-[#1A1D4D] rounded mx-auto mt-8"></div>
                    <div className="h-4 w-1/2 bg-[#1A1D4D] rounded mx-auto"></div>

                    {/* Terminal Block */}
                    <div className="h-64 w-full bg-[#0a0b1e] rounded-xl border border-[#982598]/20 mt-12 relative overflow-hidden">
                        <div className="absolute top-0 w-full h-10 bg-[#15173D] border-b border-[#982598]/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#982598]/5 to-transparent"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="mt-8 font-mono text-[#E491C9] text-sm animate-pulse tracking-widest">
                    INITIALIZING NEURALINK...
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#15173D] text-white selection:bg-[#E491C9] selection:text-[#15173D] overflow-x-hidden">
            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

            {/* Animated Starfield Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                {/* Simulated Stars */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-40 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#E491C9] text-[#15173D] shadow-[0_0_20px_rgba(228,145,201,0.5)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#982598] opacity-20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-5xl text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#982598]/10 border border-[#982598]/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(152,37,152,0.3)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E491C9] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E491C9]"></span>
                        </span>
                        <span className="text-sm font-medium text-[#E491C9] tracking-wide">System Online v1.0</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        <span className="block text-white">Your Terminal,</span>
                        <span className="bg-gradient-to-r from-[#982598] to-[#E491C9] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(228,145,201,0.3)]">Reimagined.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10 leading-relaxed">
                        Experience the premium <span className="text-[#E491C9] font-semibold">Cyberpunk TUI wrapper</span> for Bankr AI.
                        <br />
                        Chat, manage, and deploy - directly from your command line.
                    </p>

                    {/* Quick Install Bar */}
                    <div className="mx-auto max-w-md w-full mb-12 group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#982598] to-[#E491C9] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative flex items-center justify-between gap-4 p-4 bg-[#0a0b1e]/90 backdrop-blur-xl border border-[#982598]/30 rounded-xl shadow-2xl">
                            <div className="flex items-center gap-3 font-mono text-sm md:text-base text-[#E491C9]">
                                <span className="text-[#982598]">❯</span>
                                <span className="typing-cursor">{typedText}<span className="animate-pulse">|</span></span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-2 rounded-lg hover:bg-[#982598]/20 text-slate-400 hover:text-white transition-colors"
                                title="Copy Command"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div>
                        <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest">
                            Run this to start
                        </p>
                    </div>
                </div>

                {/* Terminal Visual */}
                <div className="mx-auto max-w-4xl w-full relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#982598] to-[#E491C9] rounded-2xl blur opacity-20"></div>
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
                                <pre className="font-bold leading-none select-none">
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
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#15173D] relative z-10">
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
                            <div key={idx} className="group p-8 rounded-2xl bg-[#1A1D4D] border border-[#982598]/10 hover:border-[#E491C9]/50 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(152,37,152,0.2)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#982598]/0 to-[#982598]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="mb-4 p-3 rounded-xl bg-[#15173D] inline-block border border-[#982598]/20 group-hover:bg-[#982598]/10 transition-colors relative z-10">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white relative z-10">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Section */}
            <section id="install" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#982598]/20 bg-gradient-to-b from-[#15173D] to-[#0f102b] relative z-10">
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
                            <div className="p-4 bg-[#982598]/10 rounded-lg border border-[#E491C9]/30 text-[#E491C9] flex justify-between items-center cursor-pointer hover:bg-[#982598]/20 transition-colors" onClick={handleCopy}>
                                <span>npm run neura-agent</span>
                                <span className="text-xs opacity-70">{copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-[#982598]/10 bg-[#0f102b] text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                    <Terminal className="w-5 h-5 text-[#E491C9]" />
                    <span className="font-bold text-white">NeuraAgent</span>
                </div>
                <p className="text-slate-500 text-sm">© 2026 NeuraWorld. Powered by Bankr AI.</p>
            </footer>
        </main>
    );
}
