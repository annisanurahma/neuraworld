"use client";

import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-inner flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label="Toggle Theme"
        >
            {/* Sun Icon (Background) */}
            <div className="absolute left-2 text-amber-500 opacity-0 dark:opacity-100 transition-opacity duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            </div>

            {/* Moon Icon (Background) */}
            <div className="absolute right-2 text-slate-400 opacity-100 dark:opacity-0 transition-opacity duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </div>

            {/* Sliding Thumb */}
            <div
                className={`absolute w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-600 transform transition-transform duration-300 flex items-center justify-center ${theme === "dark" ? "translate-x-9" : "translate-x-1"
                    }`}
            >
                {theme === "light" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f59e0b" // Amber for Sun
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22d3ee" // Cyan for Moon
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
