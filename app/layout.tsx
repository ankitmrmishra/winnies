import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Whatsapp } from "@/components/ui/Whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Winnies Holiday Resort and Spa | Luxury Getaway in Kasauli",
    template: "%s | Winnies Resort",
  },
  description:
    "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli. Perfect for vacations, weddings, and rejuvenating retreats.",
  keywords: [
    "Kasauli resort",
    "luxury spa",
    "holiday resort",
    "Winnies Resort",
    "mountain getaway",
    "wedding venue",
  ],
  authors: [{ name: "Winnies Resort" }],
  creator: "Winnies Resort",
  publisher: "Winnies Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://winniesresort.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winnies Holiday Resort and Spa | Luxury Getaway in Kasauli",
    description:
      "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli. Perfect for vacations, weddings, and rejuvenating retreats.",
    url: "https://winniesresort.vercel.app",
    siteName: "Winnies Resort",
    images: [
      {
        url: "https://winniesresort.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Winnies Holiday Resort and Spa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winnies Holiday Resort and Spa | Luxury Getaway in Kasauli",
    description:
      "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli. Perfect for vacations, weddings, and rejuvenating retreats.",
    images: ["https://winniesresort.vercel.app/og-image.jpg"],
    creator: "@Ankitmishraexe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#faf9f6]`}
      >
        <Navbar />
        <main>
          <Whatsapp />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
