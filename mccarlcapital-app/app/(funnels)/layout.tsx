import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "../globals.css";
import FunnelHeader from "../components/FunnelHeader";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-barlow',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <FunnelHeader />
        {children}
      </body>
    </html>
  );
}
