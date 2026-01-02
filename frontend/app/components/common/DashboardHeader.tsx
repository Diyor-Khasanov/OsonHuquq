"use client";

import { Menu, ArrowLeftFromLine, Bell } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function DashboardHeader({ open, setOpen }: Props) {
  return (
    <header className="bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0 py-4">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md hover:bg-gray-100 mt-1 p-2"
        >
          {open ? (
            <ArrowLeftFromLine className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <span className="text-3xl text-slate-900 font-bold flex items-center gap-2">
          <img
            className="rounded-full"
            src="https://i.pinimg.com/1200x/f0/c3/fd/f0c3fd7456121509dff26f996df6826d.jpg"
            alt="img"
            style={{ width: "40px", height: "40px" }}
          />
          Oson Huquq
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-slate-100">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold">
            U
          </div>
          <div className="hidden md:block leading-tight">
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-slate-500">user@mail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
