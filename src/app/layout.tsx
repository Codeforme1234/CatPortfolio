import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Devesh Tiwari - Software Developer from India",
  description: "Frontend Developer, Final year Engineering Student. Explore my work experience, projects, and skills through an interactive chat interface.",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Devesh Tiwari" }],
  openGraph: {
    title: "Devesh Tiwari - Software Developer from India",
    description: "Interactive portfolio showcasing software development skills and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased h-screen overflow-hidden`}>{children}</body>
    </html>
  );
}
