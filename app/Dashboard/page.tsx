"use client";

// 🔹 Hooks
import { useAuth } from "@/src/hooks/useAuth";

// 🔹 Layout Components
import Navbar from "@/src/core-ui/layout/Navbar";
import Sidebar from "@/src/core-ui/layout/Sidebar";

// 🔹 Dashboard Components
import StatsCard from "@/src/core-ui/dashboard/StatsCard";
import ProjectCard from "@/src/core-ui/dashboard/ProjectCard";
import RecentActivity from "@/src/core-ui/dashboard/RecentActivity";

export default function Dashboard() {
  useAuth();
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-4 sm:p-6 space-y-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome back 👋
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatsCard title="Total Projects" value="8" />
            <StatsCard title="Completed Tasks" value="24" />
            <StatsCard title="Pending Tasks" value="10" />
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">
              Your Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCard name="WorkNest UI" />
              <ProjectCard name="API Development" />
              <ProjectCard name="Mobile App" />
            </div>
          </div>

          {/* Activity */}
          <RecentActivity />
        </main>
      </div>
    </div>
  );
}
