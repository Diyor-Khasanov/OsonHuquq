"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardHeader from "@/app/components/common/DashboardHeader";
import { usePathname } from "next/navigation";

import {
  FileText,
  LogOut,
  Home,
  Languages,
  ShieldAlert,
  Layers,
} from "lucide-react";
import { logout } from "@/app/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* HEADER */}
      <DashboardHeader open={open} setOpen={setOpen} />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden bg-slate-100">
        {/* SIDEBAR */}
        <aside
          className={`flex flex-col bg-white transition-all duration-300 ${
            open ? "w-[320px]" : "w-20"
          }`}
        >
          {/* NAV */}
          <nav className="flex-1 px-2 mt-6 space-y-2 overflow-y-auto">
            <SidebarLink
              icon={<Home />}
              label="Asosiy"
              href="/dashboard"
              open={open}
            />
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
              icon={<Layers />}
              label="Shablon Kutubxonasi"
              href="/dashboard/templates"
              open={open}
            />
          </nav>

          {/* LOGOUT */}
          <div className="p-4 shrink-0">
            <button
              onClick={logout}
              className={`w-full flex items-center px-4 py-3 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 transition-all duration-200 ${
                open ? "justify-start" : "justify-center"
              }`}
            >
              <LogOut className="w-5 h-5" />
              {open && <span className="ml-2">Chiqish</span>}
            </button>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-10 min-h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  open: boolean;
}

export function SidebarLink({
  icon,
  label,
  href,
  open,
}: SidebarLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200
        ${
          isActive
            ? "bg-slate-800 text-white shadow-md"
            : "hover:bg-slate-100 text-gray-700"
        }
        ${open ? "justify-start" : "justify-center"}
      `}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>

      {open && <span className="ml-3 font-medium">{label}</span>}
    </Link>
  );
}
