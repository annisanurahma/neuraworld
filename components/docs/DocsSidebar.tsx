"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DocsSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <aside className="w-64 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto bg-white hidden md:block">
            {/* Logo Area */}
            <div className="p-6 border-b border-gray-100 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    C
                </div>
                <div>
                    <h1 className="font-bold text-gray-900 leading-none">Claw Quants</h1>
                    <p className="text-xs text-gray-500">Autonomous Trading</p>
                </div>
            </div>

            {/* Search */}
            <div className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-8">
                {/* Getting Started */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        Getting Started
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="/docs"
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/docs")
                                        ? "bg-red-50 text-red-600"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/docs/architecture"
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Architecture
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/docs/tokenomics"
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Tokenomics
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Development */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        Development
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="/docs/deploy"
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Deploying an Agent
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/docs/sdk"
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                SDK Reference
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/docs/backtesting"
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                Backtesting
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
