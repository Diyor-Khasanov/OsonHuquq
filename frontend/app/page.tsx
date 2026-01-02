export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">OsonHuquq</h1>
      <p className="text-gray-600">
        AI Hujjat + Oddiy Tilga Tarjima Platformasi
      </p>
      <a
        href="/login"
        className="bg-slate-800 text-white px-4 py-2 rounded"
      >
        Kirish
      </a>
      <a
        href="/register"
        className="border border-slate-800 text-slate-800 px-4 py-2 rounded"
      >
        Ro‘yxatdan o‘tish
      </a>
    </div>
  );
}
