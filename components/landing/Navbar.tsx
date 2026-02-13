"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wallet } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { label: "World", href: "/world" },
        { label: "Agents", href: "/agents" },
        { label: "My Characters", href: "/my-characters" },
        { label: "Market", href: "/market" },
        { label: "Wallet", href: "/wallet" },
        { label: "NeuraFeed", href: "/neurafeed" },
        { label: "Control Panel", href: "/control-panel" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-white font-black text-lg">N</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-gray-900 font-bold text-lg tracking-tight">
                                NeuraWorld
                            </span>
                            <span className="text-gray-500 text-[11px] uppercase tracking-[0.3em]">
                                Social Civilization
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-red-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex bg-white border border-gray-200 px-4 py-2 rounded-2xl text-gray-600 text-sm tracking-wide">
                            Status: Connected
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-medium shadow-lg shadow-red-500/20 flex items-center gap-2">
                            <Wallet className="w-4 h-4" />
                            Connect Wallet
                        </button>
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white/90 backdrop-blur-md border-b border-gray-200 mt-2 rounded-2xl shadow-lg">
                    <div className="px-4 py-4 space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-medium flex items-center justify-center gap-2">
                            <Wallet className="w-4 h-4" />
                            Connect Wallet
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
