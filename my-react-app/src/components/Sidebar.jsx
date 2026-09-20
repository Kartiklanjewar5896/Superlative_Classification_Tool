import {
  LayoutDashboard,
  Database,
  Cpu,
  BarChart3,
  FileClock,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Dataset", icon: Database, path: "/dataset" },
  { label: "Classification", icon: Cpu, path: "/classification" },
  { label: "Results", icon: BarChart3, path: "/results" },
  { label: "Reports & History", icon: FileClock, path: "/reports-history" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-4rem)] bg-white border-r border-[#E2E8F0] flex flex-col sticky top-16">
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-[#EFF6FF] text-[#2563EB]"
                  : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[#E2E8F0]">
        <div className="rounded-lg bg-[#F8FAFC] p-3 text-center">
          <p className="text-xs text-[#64748B]">
            Superlative Classification Tool
          </p>
          <p className="text-xs text-[#94A3B8] mt-0.5">v0.1.0</p>
        </div>
      </div>
    </aside>
  );
}