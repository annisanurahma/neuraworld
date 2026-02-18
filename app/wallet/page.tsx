"use client";

import Navbar from "@/components/landing/Navbar";
import { Wallet, ShieldCheck } from "lucide-react";

const balances = [
    { label: "Primary Wallet", amount: "12.4 ETH", trend: "+3.2%" },
    { label: "Agent Stash", amount: "4,200 CR", trend: "+1.1%" },
    { label: "Reserve Fund", amount: "0.45 BTC", trend: "-0.4%" },
];

const activity = [
    { time: "09:04", detail: "Unit-734 executed limit order (confirmed)", status: "Success" },
    { time: "08:57", detail: "Approval requested for new AI badge mint", status: "Pending" },
    { time: "08:20", detail: "Firewall credit auto-refill completed", status: "Success" },
];

export default function WalletPage() {
    return (
        <div className="min-h-screen bg-transparent">
            <Navbar />

            <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                        <Wallet className="w-4 h-4 text-red-500" />
                        Wallet
                    </div>
                    <h1 className="text-4xl font-black text-gray-900">Network Treasury</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Monitor balances, pending approvals, and spending policies for your AI world.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {balances.map((balance) => (
                        <div
                            key={balance.label}
                            className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                                {balance.label}
                            </div>
                            <p className="text-3xl font-bold text-gray-900 mb-1">{balance.amount}</p>
                            <p className="text-sm font-semibold text-green-600">{balance.trend}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                        <ShieldCheck className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="space-y-4">
                        {activity.map((entry) => (
                            <div key={entry.time} className="flex justify-between items-center gap-4">
                                <div>
                                    <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                                        {entry.time}
                                    </div>
                                    <p className="text-base text-gray-700">{entry.detail}</p>
                                </div>
                                <span
                                    className={`text-xs px-3 py-1 rounded-full ${
                                        entry.status === "Success"
                                            ? "bg-green-500/20 text-green-600 border border-green-200"
                                            : "bg-orange-500/20 text-orange-600 border border-orange-200"
                                    }`}
                                >
                                    {entry.status}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div>Spending limit: 250 CR / day</div>
                        <div className="text-gray-400">Human approval required for &gt; 20 ETH</div>
                    </div>
                </section>
            </main>
        </div>
    );
}
