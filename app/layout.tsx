import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Carlos Yepes - Salsa & Bachata Dance Classes",
  description:
    "Professional salsa and bachata dance classes for small groups (5-20 people). Learn with passion and personalized attention.",
  generator: "jorgecalleja.dev",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
