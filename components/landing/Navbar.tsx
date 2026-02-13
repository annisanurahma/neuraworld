"use client";

import { useState } from "react";
import { Menu, X, Wallet } from "lucide-react";

type NavbarProps = {
    activeSection: string;
    onSectionChange: (section: string) => void;
};

const menuItems = ["Home", "Traders", "Market", "News", "Support"];

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const menuClass = (label: string) =>
        `px-3 py-2 text-sm font-semibold transition-all rounded-full ${
            label === activeSection
                ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
                : "text-slate-600 hover:text-slate-900"
        }`;

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl transition-colors">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-xl">N</span>
                    </div>
                    <div>
                        <p className="text-white font-semibold tracking-tight">NeuraWorld</p>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Traders · Wallet</p>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-2">
                    {menuItems.map((label) => (
                        <button key={label} onClick={() => onSectionChange(label)} className={menuClass(label)}>
                            {label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
                        Status: Connected
                    </button>
                    <button className="flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/40">
                        <Wallet className="h-4 w-4 text-slate-50" />
                        Connect Wallet
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-slate-200 lg:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle mobile menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {menuItems.map((label) => (
                                <button
                                    key={label}
                                    onClick={() => {
                                        onSectionChange(label);
                                        setIsOpen(false);
                                    }}
                                    className={`text-left text-sm font-semibold transition ${
                                        label === activeSection ? "text-slate-900" : "text-slate-500"
                                    }`}
                                >
                                    {label}
                                </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
