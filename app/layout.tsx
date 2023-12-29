import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../styles/build/index.css";
import { ReactNode } from "react";
import AccentProvider from "@/contexts/AccentProvider";
import Navbar from "@/components/Navbar";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majid Moradi | Web Developer",
  description: "Majid Moradi's portfolio website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <AccentProvider>
        <body className={oswald.className}>
          <Navbar />
          {children}
        </body>
      </AccentProvider>
    </html>
  );
}
