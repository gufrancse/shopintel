import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "ShopIntel";
const siteUrl = "https://shopintel.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ShopIntel — Find Smarter. Pay Less. Buy Better.",
    template: "%s | ShopIntel",
  },

  description:
    "ShopIntel helps you compare products, prices and offers across online stores so you can make smarter buying decisions.",

  applicationName: siteName,

  keywords: [
    "ShopIntel",
    "price comparison",
    "product comparison",
    "compare prices",
    "online shopping",
    "shopping intelligence",
    "best price",
    "product deals",
    "buying guide",
  ],

  authors: [
    {
      name: siteName,
    },
  ],

  creator: siteName,
  publisher: siteName,

  category: "shopping",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: "ShopIntel — Find Smarter. Pay Less. Buy Better.",
    description:
      "Compare products, prices and offers across online stores and make smarter buying decisions with ShopIntel.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ShopIntel — Find Smarter. Pay Less. Buy Better.",
    description:
      "Compare products, prices and offers across online stores with ShopIntel.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f7f8fc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}