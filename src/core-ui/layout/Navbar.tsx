"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 
    bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-700">
      {/* Left */}
      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-semibold">
            K
          </div>
          <span className="hidden sm:block text-sm text-gray-700 dark:text-gray-300">
            Kanan
          </span>
        </div>
      </div>
    </header>
  );
}
