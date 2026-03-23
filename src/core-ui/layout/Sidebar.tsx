"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: "📊" },
  { name: "Projects", path: "/projects", icon: "📁" },
  { name: "Activity", path: "/projects/activity", icon: "📝" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden sm:flex flex-col w-64 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-700">
      {/* Logo */}
      <div className="px-6 py-5 flex items-center gap-2">
        <span className="text-2xl font-extrabold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
          WorkNest
        </span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 px-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}>
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom (optional later: logout/settings) */}
      <div className="mt-auto p-4 text-xs text-gray-400">© 2026 WorkNest</div>
    </aside>
  );
}
