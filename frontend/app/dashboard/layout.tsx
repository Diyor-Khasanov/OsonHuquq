"use client";

import Link from "next/link";
import { FileText, LogOut, Home } from "lucide-react";
import { logout } from "@/app/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen min-h-screen bg-slate-100 ">
      {/* SIDEBAR */}
      <aside className="w-[320px] shrink-0 bg-white">
        <div className="h-20 flex items-center px-8 text-2xl font-bold">
          OsonHuquq
        </div>

        <nav className="px-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center justify-center px-6 py-4 rounded-xl hover:bg-indigo-50"
          >
            <Home className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/generate"
            className="px-6 py-4 rounded-xl hover:bg-indigo-50 flex items-center justify-center "
          >
            <FileText className="w-5 h-5 mr-2" />
            Generate
          </Link>
        </nav>

        <div className="p-6">
          <button
            onClick={logout}
            className="w-full py-3 rounded-xl bg-red-100 text-red-600 flex justify-center items-center cursor-pointer"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 w-full min-h-screen overflow-x-auto">
        <div className="w-full min-h-screen p-10">{children}</div>
      </main>
    </div>
  );
}
