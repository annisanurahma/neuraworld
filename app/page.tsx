"use client";

import Navbar from "@/components/landing/Navbar";
import { ArrowUpRight, BarChart3, Sparkles as SparkIcon, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

const sidebarLinks = [
    { label: "Dashboard", status: "Live" },
    { label: "Word Wallet", status: "Focus" },
    { label: "Analytics", status: "Sync" },
    { label: "Signals", status: "Fresh" },
    { label: "Community", status: "Open" },
];

const walletCards = [
    {
        title: "Total Balance",
        value: "$182,400",
        detail: "Liquid capital ready for Word Wallet operates.",
        change: "+12% this cycle",
        icon: <Wallet className="h-5 w-5 text-emerald-500" />,
    },
    {
        title: "Liquidity Tier",
        value: "Tier 3",
        detail: "Balanced between word staking and fast exit.",
        change: "3x deeper than last rebalance",
        icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
    },
    {
        title: "Word Health",
        value: "96%",
        detail: "Consensus trust across 12 trading tribes.",
        change: "<1% drift in 24h",
        icon: <SparkIcon className="h-5 w-5 text-amber-500" />,
    },
];

const walletActions = [
    { label: "Top-up Bridge", meta: "Auto-lvl 4 ready" },
    { label: "Sync with Council", meta: "Next window 08:45 UTC" },
    { label: "Smart Pause", meta: "Manually holds 9 trades" },
];

const activityFeed = [
    {
        title: "Word Wallet release",
        detail: "Focused liquidity reallocation for Traders crew.",
        time: "8h ago",
    },
    {
        title: "Signal: Lingo Surge",
        detail: "AI-recommended momentum in narrative tokens.",
        time: "15h ago",
    },
    {
        title: "Community Call",
        detail: "Traders reviewed guardrails for wallet writers.",
        time: "1d ago",
    },
];

const highlightStats = [
    { label: "Traders Active", value: "24", detail: "Connected wallets" },
    { label: "Word Wallet Liquidity", value: "$78.4K", detail: "+18% this cycle" },
    { label: "Signal Confidence", value: "92%", detail: "Measured by Lingo AI" },
];

const sliderSections = [
    {
        title: "Create the Digital Polis",
        description: "Home slides through curated experiences so the community feels alive before clicking deeper.",
        metric: "Live Map 02",
        accent: "#38bdf8 0%, #f8fafc 120%",
        cta: "Open Map Overlay",
    },
    {
        title: "Traders · Wallet Access",
        description: "Every tab blends new wallet routes with animation so the workspace never feels static.",
        metric: "Sync 68%",
        accent: "#2dd4bf 0%, #ffffff 130%",
        cta: "View Word Wallet",
    },
    {
        title: "Signals & Stories",
        description: "Narrative tokens roll in with sliding panels and light shadows that highlight next actions.",
        metric: "Pulse 04",
        accent: "#fbbf24 0%, #ffffff 140%",
        cta: "Listen to Signals",
    },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState("Home");
    const [activeSidebar, setActiveSidebar] = useState("Word Wallet");
    const [activeSlide, setActiveSlide] = useState(0);
    const showTraderPanel = activeSection === "Traders";

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderSections.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
            <div className="pt-24 px-4 pb-16 sm:px-6 lg:px-8 xl:px-12">
                <div className="mx-auto max-w-6xl space-y-10 px-2 sm:px-4 lg:px-0">
                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-400/30 backdrop-blur-lg">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                            <div className="space-y-6 max-w-2xl">
                                <p className="text-xs uppercase tracking-widest text-slate-500">Traders · Wallet</p>
                                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                                    Word Wallet Command Center
                                </h1>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    Menu <span className="font-semibold text-slate-900">Traders</span> sekarang menampilkan
                                    sidebar khusus. Aku rapikan Word Wallet, highlight stat, dan komponen interaktif yang jelas
                                    dipisah sehingga pengguna tahu mana yang juara dan mana yang baru.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button className="flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/60 transition hover:-translate-y-0.5">
                                        Mulai Eksplorasi
                                        <ArrowUpRight className="h-4 w-4" />
                                    </button>
                                    <button className="rounded-2xl border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                                        Lihat Status Wallet
                                    </button>
                                </div>
                            </div>

                            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:w-auto">
                                {highlightStats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="floating-card flex min-h-[140px] flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-xl shadow-slate-200 transition hover:-translate-y-1"
                                    >
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-500">{stat.label}</p>
                                            <p className="mt-3 text-3xl font-semibold text-slate-900">{stat.value}</p>
                                        </div>
                                        <p className="text-xs text-slate-500">{stat.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-300/60">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white p-3 shadow-inner">
                            <div
                                className="flex transition-transform duration-700"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {sliderSections.map((slide) => (
                                    <div
                                        key={slide.title}
                                        className="min-w-full rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200"
                                    >
                                        <p className="text-xs uppercase tracking-widest text-slate-400">{slide.metric}</p>
                                        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{slide.title}</h3>
                                        <p className="mt-3 text-sm text-slate-500">{slide.description}</p>
                                        <button
                                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2 text-xs font-semibold text-white transition hover:scale-[1.02]"
                                            style={{ backgroundImage: `linear-gradient(135deg, ${slide.accent})` }}
                                        >
                                            {slide.cta}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                                {sliderSections.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`h-2 w-8 rounded-full transition-all ${idx === activeSlide ? "bg-slate-900" : "bg-slate-300/80"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className={`mx-auto grid w-full max-w-6xl gap-6 ${showTraderPanel ? "lg:grid-cols-[280px_1fr]" : ""}`}>
                        {showTraderPanel && (
                            <aside className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200">
                                <div className="mb-6 flex items-center justify-between">
                                    <p className="text-sm uppercase tracking-widest text-slate-500">Sub-menu Traders</p>
                                    <span className="text-xs text-emerald-500">Live</span>
                                </div>
                                <div className="space-y-3">
                                    {sidebarLinks.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => setActiveSidebar(item.label)}
                                            className={`flex w-full items-center justify-between rounded-2xl border p-3 text-sm font-semibold transition ${item.label === activeSidebar
                                                ? "border-slate-400 bg-slate-100 text-slate-900 shadow-inner"
                                                : "border-slate-100 text-slate-500 hover:border-slate-300 hover:text-slate-900"
                                                }`}
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-[10px] uppercase tracking-widest text-slate-400">
                                                {item.status}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </aside>
                        )}

                        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-300">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {walletCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1"
                                    >
                                        <div className="flex items-center justify-between text-slate-500">
                                            <span className="text-xs uppercase tracking-widest">{card.title}</span>
                                            {card.icon}
                                        </div>
                                        <div>
                                            <p className="mt-3 text-2xl font-semibold text-slate-900">{card.value}</p>
                                            <p className="text-xs text-slate-500">{card.detail}</p>
                                        </div>
                                        <p className="text-xs text-emerald-500">{card.change}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <div className="space-y-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-inner">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-slate-500">Word Wallet</p>
                                            <p className="text-lg font-semibold text-slate-900">Focus: {activeSidebar}</p>
                                        </div>
                                        <span className="text-xs text-emerald-500">Synced</span>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {walletActions.map((action) => (
                                            <div key={action.label} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                                <p className="text-sm font-semibold text-slate-900">{action.label}</p>
                                                <p className="text-xs text-slate-500">{action.meta}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-500">Wallet Flow</p>
                                        <div className="mt-3 h-2 rounded-full bg-slate-200">
                                            <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                                        </div>
                                        <p className="mt-2 text-xs text-slate-500">
                                            68% of assets sedang diproses untuk storytelling trades.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                                        <p className="text-xs uppercase tracking-widest text-slate-500">Activity Feed</p>
                                        <div className="mt-4 space-y-4">
                                            {activityFeed.map((item) => (
                                                <div key={item.title} className="rounded-2xl bg-slate-50 p-4 shadow-inner">
                                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                                        <p className="font-semibold text-slate-900">{item.title}</p>
                                                        <span className="text-[10px] uppercase tracking-widest">
                                                            {item.time}
                                                        </span>
                                                    </div>
                                                    <p className="mt-2 text-xs text-slate-500">{item.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 text-slate-600 shadow-sm">
                                        <p className="text-xs uppercase tracking-widest text-slate-500">Reserve</p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900">Word Wallet · Vault 04</p>
                                        <p className="mt-2 text-sm text-slate-500">
                                            Cadangan komunitas siap mendukung trader, wordsmith, dan moderator reputasi.
                                        </p>
                                        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                            <span>Shielding</span>
                                            <span>Active</span>
                                        </div>
                                        <button className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                                            Jalankan Word Wallet Audit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
