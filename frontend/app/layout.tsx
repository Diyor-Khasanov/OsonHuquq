import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen overflow-x-hidden" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
