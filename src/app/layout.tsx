// app/layout.tsx (or wherever your RootLayout lives)
import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const ptSerif = Libre_Baskerville({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Minnesota Manufacturing Recruiting",
    template: "%s | MN Manufacturing Recruiting",
  },
  description:
    "Connecting Minnesota manufacturers with top-tier mid- to senior-level talent. Risk-free, transparent fees, backed by a free replacement guarantee.",
  metadataBase: new URL("https://www.yoursite.com"),
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    // optional: customise for staging vs prod
    // nocache: true,
  },
  keywords: [
    "Minnesota manufacturing recruiting",
    "manufacturing jobs MN",
    "manufacturing talent",
    "mid senior level staffing",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    title: "Minnesota Manufacturing Recruiting",
    description:
      "Connecting Minnesota manufacturers with top-tier mid- to senior-level talent. Risk-free hiring with a free replacement guarantee.",
    url: "https://www.yoursite.com",
    siteName: "MN Manufacturing Recruiting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Minnesota Manufacturing Recruiting",
    description:
      "Connecting Minnesota manufacturers with top-tier talent. Risk-free, transparent fees, free replacement guarantee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F87R2F1CP5"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F87R2F1CP5');
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
