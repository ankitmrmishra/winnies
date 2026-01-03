import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Whatsapp } from "@/components/ui/Whatsapp";
import { Toaster } from "@/components/ui/toaster";
// import { PackageModal } from "@/components/PackagePopup";

/* -------------------- Fonts -------------------- */
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

/* -------------------- Metadata -------------------- */
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

  metadataBase: new URL("https://winnies.in"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Winnies Holiday Resort and Spa | Luxury Getaway in Kasauli",
    description:
      "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli.",
    url: "https://winnies.in",
    siteName: "Winnies Resort",
    images: [
      {
        url: "https://winnies.in/og-image.jpg",
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
      "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli.",
    images: ["https://winnies.in/og-image.jpg"],
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

  /* -------- Facebook Domain Verification -------- */
  verification: {
    other: {
      "facebook-domain-verification": "9kv9rtygxi1fdmudmokg642hbxmk1c",
    },
  },
};

/* -------------------- Layout -------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* -------- Google Tag Manager (HEAD) -------- */}
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MXKL8JK7');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#faf9f6]`}
      >
        {/* -------- Google Tag Manager (NOSCRIPT) -------- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXKL8JK7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />

        <main>
          <Whatsapp />
          {children}
          {/* <PackageModal /> */}
        </main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
