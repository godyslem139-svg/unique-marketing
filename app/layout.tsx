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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "شركة سيو خدمات تحسين محركات البحث SEO | Unique",
  description: "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
  keywords: ["سيو", "تصميم مواقع", "تسويق رقمي", "وكالة تسويق", "SEO Agency", "Digital Agency"],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/",
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
    description: "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
    url: "https://marketing-beta-gold-30.vercel.app",
    siteName: "Unique Agency",
    locale: "ar_AR",
    type: "website",
  },
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
        {/* الاتصال المسبق الضروري فقط لتسريع جلب الخطوط أو الصور الأساسية وتجنب تحذيرات Lighthouse */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`bg-[#000000] text-white selection:bg-blue-600 selection:text-white ${cairo.className} antialiased overflow-x-hidden`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}