import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
  adjustFontFallback: true,
});

const DOMAIN = "https://www.uniquee-ws.com";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "شركة سيو خدمات تحسين محركات البحث SEO | Unique",
  description:
    "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
  keywords: [
    "سيو",
    "تصميم مواقع",
    "تسويق رقمي",
    "وكالة تسويق",
    "SEO Agency",
    "Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
      "x-default": "/",
    },
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
  openGraph: {
    title: "شركة سيو خدمات تحسين محركات البحث SEO | Unique",
    description:
      "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
    url: DOMAIN,
    siteName: "UNIQUE Digital Agency",
    locale: "ar_AR",
    type: "website",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${DOMAIN}/#organization`,
      name: "UNIQUE Digital Agency",
      alternateName: "Unique",
      url: DOMAIN,
      logo: {
        "@type": "ImageObject",
        url: `${DOMAIN}/logo.png`, // تأكد إن اسم ملف اللوجو في مجلد public مطابق
      },
      email: "godyslem139@gmail.com",
      telephone: "+201270506511",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+201270506511",
        contactType: "sales",
        areaServed: ["EG", "SA", "AE", "KW"],
        availableLanguage: ["Arabic", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${DOMAIN}/#website`,
      url: DOMAIN,
      name: "UNIQUE Digital Agency | SEO & Web Design",
      inLanguage: ["ar", "en"],
      publisher: { "@id": `${DOMAIN}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${DOMAIN}/#service`,
      name: "UNIQUE Digital Agency",
      url: DOMAIN,
      telephone: "+201270506511",
      email: "godyslem139@gmail.com",
      priceRange: "$$",
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Kuwait" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "EG",
        addressLocality: "Cairo",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.0444,
        longitude: 31.2357,
      },
      parentOrganization: { "@id": `${DOMAIN}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body
        className={`bg-[#000000] text-white selection:bg-blue-600 selection:text-white ${cairo.className} antialiased overflow-x-hidden`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}