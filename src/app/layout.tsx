import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokeshvishal R | AI Engineer & Full Stack Developer",
  description: "Personal portfolio of Lokeshvishal R, an AI & Data Science student building AI systems, computer vision applications, full-stack projects and automated workflows.",
  keywords: ["AI Engineer", "Data Science", "Full Stack Developer", "Computer Vision", "Machine Learning", "Portfolio"],
  openGraph: {
    title: "Lokeshvishal R | AI Engineer & Full Stack Developer",
    description: "Personal portfolio of Lokeshvishal R, an AI & Data Science student building AI systems, computer vision applications, full-stack projects and automated workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokeshvishal R | AI Engineer & Full Stack Developer",
    description: "Personal portfolio of Lokeshvishal R, an AI & Data Science student building AI systems, computer vision applications, full-stack projects and automated workflows.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
