import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "ShujaAliK",
  description: "A versatile full-stack developer specializing in building robust web applications.",
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
