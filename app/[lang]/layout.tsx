import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://symbol.science"),
  title: "Symbol Science | The Trust Layer for AGI",
  description: "Researching and building the protocols for the Agent Economy.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className="antialiased bg-black text-white selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
