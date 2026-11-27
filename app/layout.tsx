import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { CallbackFormPopup } from "@/components/CallbackFormPopup";
import { PackageModal } from "@/components/PackagePopup";
import { CallbackPopupProvider } from "@/lib/callback-popup-context";
import { ChatbotIndicator } from "@/components/ChatbotIndicator";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";

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
export async function generateMetadata(): Promise<Metadata> {
  const pathname = (await headers()).get("x-winnies-pathname") ?? "/";
  const title = "Winnies Holiday Resort and Spa | Luxury Getaway in Kasauli";
  const description =
    "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli. Perfect for vacations, weddings, and rejuvenating retreats.";

  return {
    title: {
      default: title,
      template: "%s | Winnies Resort",
    },
    description,
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
      canonical: pathname,
    },
    openGraph: {
      title,
      description:
        "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli.",
      url: pathname,
      siteName: "Winnies Resort",
      images: [
        {
          url: "/opengraph-image.png",
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
      title,
      description:
        "Experience luxury and serenity at Winnies Holiday Resort and Spa in Kasauli.",
      images: ["/twitter-image.png"],
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
    verification: {
      other: {
        "facebook-domain-verification": "9kv9rtygxi1fdmudmokg642hbxmk1c",
      },
    },
  };
}

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

        {/* -------- Botpress Chatbot -------- */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/03/02/13/20260302130816-L4LY4ZE3.js"
          strategy="beforeInteractive"
        />
        <style>{`
          #bp-web-widget-container,
          div[id^="bp-"],
          [class*="bpw-"] {
            position: fixed !important;
            z-index: 9997 !important;
          }
          #bp-web-widget-container button,
          #bp-web-widget-container [role="button"],
          div[id^="bp-"] button,
          div[class*="bp-"] button {
            background-color: #4ade80 !important;
            background: #4ade80 !important;
          }
        `}</style>
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

        <CallbackPopupProvider>
          <main>
            <Navbar />
            <CallbackFormPopup />
            <PackageModal />
            <ChatbotIndicator />
            <FloatingCallButton />
            {children}
          </main>

          <Footer />
          <Toaster />
        </CallbackPopupProvider>
      </body>
    </html>
  );
}
