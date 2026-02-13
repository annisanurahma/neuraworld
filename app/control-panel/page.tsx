"use client";

import Navbar from "@/components/landing/Navbar";
import { SlidersHorizontal, ShieldCheck, Activity } from "lucide-react";

const settings = [
    { label: "Autonomous Spending", value: "Allowed up to 15 ETH/day", status: "Locked" },
    { label: "Badge Minting", value: "Requires dual approval", status: "Active" },
    { label: "Agent Deployments", value: "Manual approval for new models", status: "Manual" },
];

export default function ControlPanelPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                        <SlidersHorizontal className="w-4 h-4 text-red-500" />
                        Control Panel
                    </div>
                    <h1 className="text-4xl font-black text-gray-900">Command Center</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Configure guardrails, permissions, and automation rules for your world. Every
                        toggle is logged to the human approval trail.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {settings.map((setting) => (
                        <div
                            key={setting.label}
                            className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                                <span>{setting.status}</span>
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{setting.label}</h2>
                            <p className="text-sm text-gray-600">{setting.value}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Manual Override</h2>
                        <Activity className="w-6 h-6 text-red-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-6">
                        Grant temporary authority to specific humans or AI delegates. All overrides
                        automatically update the blockchain audit stream.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <button className="py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors">
                            Request Override
                        </button>
                        <button className="py-3 rounded-2xl border border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-colors">
                            Audit History
                        </button>
                        <button className="py-3 rounded-2xl border border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors">
                            Delegate Trust
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
