import type { Metadata } from "next";
import { Inter, Yuji_Mai } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const yuji = Yuji_Mai({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yuji",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "SHUZO COIN | 諦めるな！",
  description: "Heat up your wallet! The most energetic meme coin. NEVER GIVE UP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${yuji.variable}`}>
        {children}
      </body>
    </html>
  );
}
