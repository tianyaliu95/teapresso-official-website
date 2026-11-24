import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Jost } from "next/font/google";
import "./globals.css";

// The one typeface of the site. Every style refers to it as var(--font-jost).
const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const SITE_URL = "https://www.tea-presso.com";
const DESCRIPTION =
  "Tea, extracted by the cup. Whole-leaf tea lattes, a full matcha series and coffee, in Manchester, Leeds, Glasgow and Toronto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Teapresso — Modern Beverage Shop",
    template: "%s — Teapresso",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Teapresso",
    title: "Teapresso — Modern Beverage Shop",
    description: DESCRIPTION,
    images: [{ url: "/images/shops/glasgow-interior.jpg", width: 2000, height: 1139, alt: "Inside a Teapresso shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teapresso — Modern Beverage Shop",
    description: DESCRIPTION,
    images: ["/images/shops/glasgow-interior.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.png?v=6" },
      { url: "/favicon-16x16.png?v=6", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=6", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=6", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "food and drink",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Shown to search engines only. Shops that are open; no phone number or email address.
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Teapresso",
  description: "Modern beverage shop. Whole-leaf tea extracted by the cup, a matcha series and coffee.",
  url: SITE_URL,
  image: `${SITE_URL}/images/shops/glasgow-interior.jpg`,
  servesCuisine: ["Tea", "Matcha", "Coffee"],
  acceptsReservations: false,
  hasMenu: `${SITE_URL}/menu`,
  sameAs: ["https://www.instagram.com/teapresso.uk/"],
  address: [
    { "@type": "PostalAddress", streetAddress: "149–153 Oxford Rd", addressLocality: "Manchester", postalCode: "M1 7EE", addressCountry: "GB" },
    { "@type": "PostalAddress", streetAddress: "61 The Headrow", addressLocality: "Leeds", postalCode: "LS1 6LR", addressCountry: "GB" },
    { "@type": "PostalAddress", streetAddress: "100 Byres Rd", addressLocality: "Glasgow", postalCode: "G12 8TA", addressCountry: "GB" },
  ],
  openingHours: "Mo-Su 11:00-22:00",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={jost.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
