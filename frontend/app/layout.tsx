import "./globals.css";

export const metadata = {
  title: "OsonHuquq AI",
  description: "AI Hujjat + Oddiy Tilga Tarjima Platformasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
