import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://symbol.science"),
  title: "Symbol Science | The Trust Layer for AGI",
  description: "Researching and building the protocols for the Agent Economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
