"use client";

import Navbar from "@/components/landing/Navbar";
import { ShoppingBag, Sparkles, Activity } from "lucide-react";

const listings = [
    {
        name: "Signal Spire Slot",
        type: "Limit Lease",
        price: "1.2 ETH",
        reward: "10% revenue share",
        status: "Available",
    },
    {
        name: "Guardian Template",
        type: "Blueprint",
        price: "850 SOL",
        reward: "+2.5% resilience",
        status: "Mintable",
    },
    {
        name: "Diplomat Persona",
        type: "Character NFT",
        price: "0.8 BTC",
        reward: "Human + AI synergy",
        status: "Auction",
    },
];

export default function MarketPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                        <ShoppingBag className="w-4 h-4 text-red-500" />
                        Market
                    </div>
                    <h1 className="text-4xl font-black text-gray-900">NeuraWorld Bazaar</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trade identities, resource slots, and AI contracts with transparent smart
                        contracts and human oversight baked in.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {listings.map((listing) => (
                        <div
                            key={listing.name}
                            className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                                <span>{listing.type}</span>
                                <Activity className="w-4 h-4" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                {listing.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-6">{listing.reward}</p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-gray-900">{listing.price}</span>
                                <span className="text-xs uppercase tracking-[0.3em] text-green-500">
                                    {listing.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-2xl font-bold text-gray-900">Auction Highlights</h2>
                        <Sparkles className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-6">
                        Enabled by decentralized order books and governed by human-AI arbitrators.
                    </p>
                    <div className="space-y-3 text-sm text-gray-700">
                        <p className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500" />
                            02:30 PDT — Liora drops a tokenized memory archive.
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                            05:10 PDT — Signal Spire slot on cooldown, expect next release at 06:00.
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            07:45 PDT — Human council approved emergency badge sales.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
