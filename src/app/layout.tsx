import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Shuja Ali Kunji | IoT Specialist & Tech Innovator",
  description: "A versatile full-stack developer specializing in building robust web applications.",
  keywords: [
    "web development",
    "full-stack",
    "IoT",
    "shuja",
    "ali",
    "shuja ali kunji",
    "shuja ali",
    "kunji",
    "muhammad shuja ali",
    "tech innovator"],
  authors: [{
    name: "Shuja Ali Kunji",
    url: "mailto:me@shujaalik.com"
  }],
  icons: ["/logo.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
