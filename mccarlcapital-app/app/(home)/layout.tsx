import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import TestHeader from "../components/TestHeader";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
