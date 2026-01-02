"use client";

import { useState } from "react";
import { FileText, Search } from "lucide-react";
import clsx from "clsx";

type Category = "All" | "Rental" | "HR" | "Finance" | "Business";

const categories: Category[] = ["All", "Rental", "HR", "Finance", "Business"];

const templates = [
  {
    title: "Car Rental Agreement",
    desc: "Standard agreement for short-term vehicle rental.",
    uses: 1200,
    category: "Rental",
  },
  {
    title: "Employment Contract",
    desc: "Full-time employment contract compliant with Labor Code.",
    uses: 850,
    category: "HR",
    premium: true,
  },
  {
    title: "Debt Acknowledgment",
    desc: "Simple IOU document for personal loans.",
    uses: 500,
    category: "Finance",
  },
  {
    title: "Apartment Lease",
    desc: "Residential lease agreement for landlords.",
    uses: 2100,
    category: "Rental",
    premium: true,
  },
  {
    title: "Service Agreement",
    desc: "For freelancers and contractors providing services.",
    uses: 1500,
    category: "Business",
  },
  {
    title: "NDA (Non-Disclosure)",
    desc: "Protect confidential information.",
    uses: 900,
    category: "Business",
    premium: true,
  },
];

export default function TemplatesPage() {
  const [active, setActive] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = templates.filter((t) => {
    const matchCategory = active === "All" || t.category === active;

    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  document.title = "Shablon kutubxonasi | Oson Huquq";

  return (
    <div className="p-8 bg-white rounded-3xl shadow">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Shablon kutubxonasi
        </h1>
        <p className="text-slate-500 mt-2">
          Shablon kutubxonasiga xush kelibsiz, user
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">
        {/* Search */}
        <div className="relative w-full xl:w-96">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={clsx(
                "px-4 py-2 rounded-xl text-sm font-medium border transition",
                active === c
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center text-slate-400 mt-20">
          Hech qanday shablon topilmadi
        </div>
      )}

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition"
          >
            {t.premium && (
              <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                PREMIUM
              </span>
            )}

            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
              <FileText className="text-slate-800" />
            </div>

            <h3 className="font-semibold text-slate-900 mb-2">{t.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{t.desc}</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">{t.uses} uses</span>
              <button className="text-slate-800 font-medium hover:underline">
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
