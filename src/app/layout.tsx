import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parvezkhan-ux.github.io/parvezkhan.github.io/"),
  title: {
    default: "Parvez Khan | Web Designer & UI/UX Expert",
    template: "%s | Parvez Khan",
  },
  description: "Parvez Khan — Web Designer & UI/UX Expert with 5+ years of experience. Crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.",
  keywords: ["web designer", "UI/UX", "UX designer", "frontend developer", "portfolio", "Parvez Khan", "Figma", "UI expert", "Dhaka", "freelance designer"],
  authors: [{ name: "Parvez Khan" }],
  creator: "Parvez Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parvezkhan-ux.github.io/parvezkhan.github.io/",
    title: "Parvez Khan | Web Designer & UI/UX Expert",
    description: "Parvez Khan — Web Designer & UI/UX Expert with 5+ years of experience. Crafting high-performance digital interfaces.",
    siteName: "Parvez Khan Portfolio",
    images: [
      {
        url: "/images/profile.png", 
        width: 1200,
        height: 630,
        alt: "Parvez Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parvez Khan | Web Designer & UI/UX Expert",
    description: "Web Designer & UI/UX Expert with 5+ years of experience. Crafting high-performance digital interfaces.",
    images: ["/images/profile.png"],
    creator: "@parvezkhan", 
  },
  alternates: {
    canonical: "https://parvezkhan-ux.github.io/parvezkhan.github.io/",
  },
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
