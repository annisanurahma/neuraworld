"use client";

import { Menu, X, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavbarProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Installation", href: "#install" },
    { name: "Docs", href: "#" },
];

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#15173D]/80 backdrop-blur-md border-b border-[#982598]/20 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onSectionChange("Home")}>
                        <div className="p-2 rounded-lg bg-[#982598]/10 border border-[#982598]/30 group-hover:bg-[#982598]/20 transition-colors">
                            <Terminal className="w-5 h-5 text-[#E491C9]" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#E491C9] transition-colors">
                            Neura<span className="text-[#982598]">Agent</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => onSectionChange(link.name)}
                                className={`text-sm font-medium transition-colors hover:text-[#E491C9] ${activeSection === link.name ? "text-[#E491C9]" : "text-slate-300"
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button className="px-5 py-2 rounded-full bg-[#E491C9] text-[#15173D] font-bold text-sm hover:bg-[#ffb6e6] hover:scale-105 transition-all shadow-[0_0_15px_rgba(228,145,201,0.4)]">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#15173D] border-b border-[#982598]/20 p-4 space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => {
                                onSectionChange(link.name);
                                setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-[#982598]/10 hover:text-[#E491C9] rounded-lg"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button className="w-full mt-4 px-5 py-3 rounded-xl bg-[#E491C9] text-[#15173D] font-bold">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}
