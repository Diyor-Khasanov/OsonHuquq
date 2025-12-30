"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  LogOut,
  Home,
  Languages,
  ShieldAlert,
  Library,
  Menu,
  X,
  ArrowLeftFromLine,
} from "lucide-react";
import { logout } from "@/app/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex w-screen min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <aside
        className={`flex flex-col bg-white h-screen transition-all duration-300 ${
          open ? "w-[320px]" : "w-20"
        }`}
      >
        {/* LOGO + TOGGLE */}
        <div className="h-20 flex items-center justify-between px-4">
          {open && <span className="text-2xl font-bold">OsonHuquq</span>}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {open ? <ArrowLeftFromLine className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-2 mt-4 space-y-2">
          <SidebarLink icon={<Home />} label="Asosiy" href="/dashboard" open={open} />
          <SidebarLink
            icon={<FileText />}
            label="AI Document Generator"
            href="/dashboard/generate"
            open={open}
          />
          <SidebarLink
            icon={<Languages />}
            label="Oddiy tilga tarjima"
            href="/dashboard/simplify"
            open={open}
          />
          <SidebarLink
            icon={<ShieldAlert />}
            label="Risk Detector"
            href="/dashboard/risk"
            open={open}
          />
          <SidebarLink
            icon={<Library />}
            label="Shablon Kutubxonasi"
            href="/dashboard/templates"
            open={open}
          />
        </nav>

        {/* Logout tugmasi eng pastda */}
        <div className="p-4 mt-auto">
          <button
            onClick={logout}
            className={`w-full flex items-center justify-start px-4 py-3 rounded-xl bg-red-100 text-red-600 transition-all duration-300 ${
              open ? "" : "justify-center"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
                !open ? "mr-0" : ""
              }`}
            >
              <LogOut className="w-5 h-5" />
            </div>
            {open && <span>Chiqish</span>}
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

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  open: boolean;
}

function SidebarLink({ icon, label, href, open }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 ${
        open ? "justify-start" : "justify-center"
      }`}
    >
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      {open && <span className="ml-3">{label}</span>}
    </Link>
  );
}
