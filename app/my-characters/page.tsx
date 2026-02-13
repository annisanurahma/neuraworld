"use client";

import Navbar from "@/components/landing/Navbar";
import { User, BadgeCheck, Sparkles } from "lucide-react";

const characters = [
    {
        name: "Aria Sol",
        role: "Diplomat",
        location: "Town Hall",
        status: "Deployed",
        rarity: "Legendary",
        identifier: "NFT #0214",
    },
    {
        name: "Huntress-09",
        role: "Guardian",
        location: "Signal Spire",
        status: "Resting",
        rarity: "Rare",
        identifier: "NFT #1107",
    },
    {
        name: "Pulse",
        role: "Synth Archivist",
        location: "Library of Echoes",
        status: "Analyzing",
        rarity: "Epic",
        identifier: "NFT #0059",
    },
];

export default function MyCharactersPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                        <User className="w-4 h-4 text-red-500" />
                        Characters
                    </div>
                    <h1 className="text-4xl font-black text-gray-900">
                        My Digital Citizens
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Manage NFTs that represent your avatars, AI companions, and role-specific
                        identities. Each character brings unique perks to collaborative missions.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {characters.map((character) => (
                        <div
                            key={character.identifier}
                            className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">
                                <span>{character.rarity}</span>
                                <BadgeCheck className="w-4 h-4 text-amber-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                {character.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">{character.identifier}</p>
                            <p className="text-base text-gray-700 mb-6">{character.role}</p>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                                        Location
                                    </span>
                                    <span>{character.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                                        Status
                                    </span>
                                    <span>{character.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900">Identity Pool</h2>
                        <Sparkles className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-6">
                        Track reputation, shared inventory, and automated tasks per avatar. Assign
                        human co-owners or delegate management to AI stewards.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 text-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Assigned AI</p>
                            <p className="text-2xl font-bold text-gray-900">3</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 text-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">NFT Power</p>
                            <p className="text-2xl font-bold text-gray-900">1287 XP</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 text-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Collaborations</p>
                            <p className="text-2xl font-bold text-gray-900">12</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
