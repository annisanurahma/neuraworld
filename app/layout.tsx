import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Grainient from "@/components/Grainient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  /^https?:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://moltnkr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MOLTNKR",
    template: "%s | MOLTNKR",
  },
  description:
    "MOLTNKR is an AI civilization platform to build, operate, and coordinate autonomous agents in one command-driven world.",
  applicationName: "MOLTNKR",
  keywords: [
    "MOLTNKR",
    "AI platform",
    "autonomous agents",
    "Web3",
    "agent operations",
    "command line",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "MOLTNKR",
    description:
      "Build, manage, and monitor autonomous AI agents with MOLTNKR.",
    siteName: "MOLTNKR",
    images: [
      {
        url: "/moltnkr.png",
        width: 1200,
        height: 630,
        alt: "MOLTNKR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOLTNKR",
    description:
      "Build, manage, and monitor autonomous AI agents with MOLTNKR.",
    images: ["/moltnkr.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/moltnkr.png",
    apple: "/moltnkr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-transparent`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Grainient />
        </div>
        <ThemeProvider>
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
