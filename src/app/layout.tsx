import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://spectrefury.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Soni, Software Development Engineer",
    template: "%s | Ayush Soni",
  },
  description:
    "Portfolio of Ayush Soni, Software Development Engineer specializing in distributed systems, async pipelines, Next.js, Node.js, and AI-driven platforms.",
  authors: [{ name: "Ayush Soni", url: siteUrl }],
  creator: "Ayush Soni",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ayush Soni, Software Development Engineer",
    description:
      "Distributed systems, async workers, and full-stack products. Cointab, Veramasa, Zappian.",
    siteName: "Ayush Soni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Soni, Software Development Engineer",
    description:
      "Distributed systems, async workers, and full-stack products.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
