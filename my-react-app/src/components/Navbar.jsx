import { Bell, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
          SC
        </div>
        <span className="text-[#0F172A] font-semibold text-lg tracking-tight">
          Superlative
        </span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search datasets, models, reports..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-[#F8FAFC] transition">
          <Bell className="w-5 h-5 text-[#64748B]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2563EB] rounded-full" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1E40AF] font-medium text-sm">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-[#0F172A] leading-tight">John Doe</p>
            <p className="text-xs text-[#64748B] leading-tight">Normal User</p>
          </div>
          <ChevronDown className="w-4 h-4 text-[#64748B] group-hover:text-[#0F172A] transition" />
        </div>
      </div>
    </header>
  );
}