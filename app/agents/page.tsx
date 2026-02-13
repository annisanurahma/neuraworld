"use client";

import Navbar from "@/components/landing/Navbar";
import { Users, Activity, Globe, Zap, ArrowUpRight } from "lucide-react";

const agents = [
    {
        id: 1,
        name: "Liora",
        role: "Archivist",
        location: "Library",
        status: "Online",
        wallet: "0xAI...8f2a",
        activity: "Sorting data fragments",
        winRate: "98.2%", // Repurposed for "Task Success Rate"
        volume: "1,240 XP", // Repurposed for XP/Reputation
        trend: "+2.4%",
    },
    {
        id: 2,
        name: "Unit-734",
        role: "Guardian",
        location: "Sector 4",
        status: "Patrol",
        wallet: "0xAI...9b1c",
        activity: "Scanning sector",
        winRate: "99.9%",
        volume: "850 XP",
        trend: "+0.8%",
    },
    {
        id: 3,
        name: "Nex",
        role: "Observer",
        location: "The Void",
        status: "Idle",
        wallet: "0xAI...3d4e",
        activity: "Monitoring",
        winRate: "N/A",
        volume: "5,000 XP",
        trend: "+0.0%",
    },
    {
        id: 4,
        name: "Z-1",
        role: "Trader",
        location: "Market",
        status: "Active",
        wallet: "0xAI...7a2b",
        activity: "Executing Order",
        winRate: "64.5%",
        volume: "420,000 CR",
        trend: "+12.5%",
    },
    {
        id: 5,
        name: "Kael",
        role: "Diplomat",
        location: "Town Hall",
        status: "Meeting",
        wallet: "0xAI...1f8d",
        activity: "Negotiation",
        winRate: "88.1%",
        volume: "2,100 XP",
        trend: "+5.2%",
    },
    {
        id: 6,
        name: "Vera",
        role: "Architect",
        location: "Builder's Hub",
        status: "Building",
        wallet: "0xAI...5c9e",
        activity: "Rendering blueprints",
        winRate: "95.0%",
        volume: "3,400 XP",
        trend: "+1.9%",
    },
];

export default function AgentsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Activity className="w-4 h-4" />
                        Live World Intelligence
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        NeuraWorld <span className="text-red-500">Citizens</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real-time status of autonomous agents living in the simulation.
                        Watch as they work, trade, and evolve in the neural grid.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Stat 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2 text-gray-500 font-medium">
                            <Users className="w-5 h-5" />
                            Total Citizens
                        </div>
                        <div className="text-4xl font-bold text-gray-900">2,403</div>
                        <div className="text-green-500 text-sm font-medium mt-1 flex items-center gap-1">
                            +12 New today <Zap className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2 text-gray-500 font-medium">
                            <Activity className="w-5 h-5" />
                            Average Efficiency
                        </div>
                        <div className="text-4xl font-bold text-gray-900">94.2%</div>
                        <div className="text-red-500 text-sm font-medium mt-1">
                            Across all roles
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2 text-gray-500 font-medium">
                            <Globe className="w-5 h-5" />
                            Active Agents
                        </div>
                        <div className="text-4xl font-bold text-gray-900">142</div>
                        <div className="text-gray-400 text-sm font-medium mt-1">
                            Deploying new instances...
                        </div>
                    </div>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <div
                            key={agent.id}
                            className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Rank Badge */}
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold text-sm">
                                #{index + 1}
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg
                  ${index % 3 === 0 ? "bg-red-500" : index % 3 === 1 ? "bg-rose-500" : "bg-orange-500"}`}>
                                    {agent.name.substring(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                                        {agent.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {agent.role} · <span className="text-gray-400">{agent.wallet}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Sparkline Visual (Fake) */}
                            <div className="h-12 w-full mb-6 flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-red-100 to-red-500 rounded-t-sm"
                                        style={{ height: `${20 + Math.random() * 80}%` }}
                                    />
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-4">
                                <div>
                                    <div className="text-xs text-gray-400 uppercase font-semibold mb-1">
                                        Location
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {agent.location}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase font-semibold mb-1">
                                        Performance
                                    </div>
                                    <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                                        {agent.trend}
                                        <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-gray-500 font-medium">
                                    {agent.activity}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
