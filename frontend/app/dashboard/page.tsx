import { Metadata } from "next";
import { FileText, ShieldAlert, Languages, Library } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asosiy | OsonHuquq",
};

export default function DashboardPage() {
  return (
    <div className="w-full bg-white p-8 rounded-3xl shadow">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Oson Huquq Dashboard
        </h1>
        <p className="text-slate-500 mt-2">
          AI yordamida hujjatlarni yaratish, tushuntirish va xavflarni aniqlash
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        <FeatureCard
          icon={<FileText size={28} />}
          title="AI Document Generator"
          desc="Ariza, da’vo, shartnoma va boshqa hujjatlarni AI orqali yaratish"
          href="/dashboard/generate"
          color="from-cyan-600 to-sky-600"
        />

        <FeatureCard
          icon={<Languages size={28} />}
          title="Oddiy tilga tarjima"
          desc="Murakkab huquqiy matnlarni oddiy va tushunarli qilib izohlash"
          href="/dashboard/simplify"
          color="from-emerald-600 to-teal-600"
        />

        <FeatureCard
          icon={<ShieldAlert size={28} />}
          title="Risk Detector (Beta)"
          desc="Shartnomadagi xavfli bandlarni aniqlash va tushuntirish"
          href="/dashboard/risk"
          color="from-amber-500 to-orange-600"
        />

        <FeatureCard
          icon={<Library size={28} />}
          title="Shablon kutubxonasi"
          desc="Tayyor huquqiy hujjatlar to‘plami"
          href="/dashboard/templates"
          color="from-purple-600 to-fuchsia-600"
        />
      </div>

      {/* ACTIVITY */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">So‘nggi faoliyat</h2>

          <div className="space-y-4">
            {[
              "Ijara shartnomasi yaratildi",
              "Shartnoma oddiy tilga tarjima qilindi",
              "Risk detector ishlatildi",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3"
              >
                <span className="text-slate-700">{item}</span>
                <span className="text-sm text-slate-400">Bugun</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 bg-gradient-to-br bg-slate-800 rounded-3xl p-8 text-white">
          <h2 className="text-xl font-semibold mb-3">Premium imkoniyatlar</h2>
          <p className="opacity-90 mb-6">
            Cheksiz hujjatlar, to‘liq risk tahlili va eksport imkoniyatlari
          </p>

          <button className="w-full bg-white text-slate-800 font-semibold py-3 rounded-xl hover:scale-[1.02] transition">
            Premiumga o‘tish
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  href,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className={`col-span-12 md:col-span-6 xl:col-span-4 rounded-3xl p-6 text-white bg-gradient-to-br ${color} shadow-lg hover:scale-[1.02] transition`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-white/20 p-3 rounded-xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="opacity-90 leading-relaxed">{desc}</p>
    </Link>
  );
}
