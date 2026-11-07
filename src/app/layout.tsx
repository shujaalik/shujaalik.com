import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Muhammad Shuja Ali | Systems Architect & Lead IoT / Full-Stack Engineer",
  description: "Architecting end-to-end industrial IoT solutions—from high-reliability edge firmware (FreeRTOS, ESP-IDF, Modbus RTU) to high-throughput time-series backends and real-time telemetry dashboards. Powering 300+ industrial machines across tier-1 manufacturing facilities.",
  keywords: [
    "Systems Architect",
    "IoT Engineer",
    "Embedded Systems",
    "FreeRTOS",
    "ESP-IDF",
    "Modbus RTU",
    "TimescaleDB",
    "Full-Stack Developer",
    "IIoT",
    "industrialpmr",
    "shuja ali kunji",
    "shuja ali",
    "muhammad shuja ali"
  ],
  authors: [{
    name: "Muhammad Shuja Ali",
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
