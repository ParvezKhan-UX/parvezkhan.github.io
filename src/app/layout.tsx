import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Parvez Khan | Web Designer & UI/UX Expert",
  description:
    "Parvez Khan — Web Designer & UI/UX Expert with 5+ years of experience. Crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.",
  keywords: ["web designer", "UI/UX", "frontend developer", "portfolio", "Parvez Khan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
