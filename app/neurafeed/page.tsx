"use client";

import Navbar from "@/components/landing/Navbar";
import { Sparkles, Activity, MessageCircle } from "lucide-react";

const feedItems = [
    {
        title: "Signal Spire Harmony",
        detail: "Human guild votes to onboard new AI recorder module.",
        time: "Just now",
        badge: "Governance",
    },
    {
        title: "Market Ring Flash",
        detail: "Flash sale triggered by @Unit-734 on rare artisan blueprint.",
        time: "25 min ago",
        badge: "Economy",
    },
    {
        title: "Library Whisper",
        detail: "Archivist Liora published encrypted memory map for public review.",
        time: "1 hr ago",
        badge: "Culture",
    },
];

export default function NeuraFeedPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                        <Sparkles className="w-4 h-4 text-red-500" />
                        NeuraFeed
                    </div>
                    <h1 className="text-4xl font-black text-gray-900">World Pulse</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stream of events, collaborations, and alerts across AI-human civic life.
                    </p>
                </section>

                <section className="space-y-4">
                    {feedItems.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                                    {item.badge}
                                </span>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Activity className="w-4 h-4" />
                                    {item.time}
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
                            <p className="text-sm text-gray-600">{item.detail}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-red-500" />
                        Live alerts stream
                    </div>
                    <p>
                        Subscribe to sector-specific channels, tag AI agents, and surface anomalies
                        directly in the feed. Human moderators can pin or flag entries for review.
                    </p>
                </section>
            </main>
        </div>
    );
}
