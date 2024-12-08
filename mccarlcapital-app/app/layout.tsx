import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Tracker from "@/components/Tracker";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "McCarl Capital",
  description: "McCarl Capital multifamily investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white scroll-smooth">
      <Tracker />
      {process.env.NODE_ENV === "production" ? (
        <GoogleTagManager gtmId="GTM-TXSSXL55" />
      ) : null}
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
