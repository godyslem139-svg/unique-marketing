"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// ============================================================================
// WEBMCP TYPE DEFINITIONS (SUPPORTS BOTH document.modelContext & navigator.modelContext)
// ============================================================================

interface WebMcpToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
  annotations?: {
    readOnlyHint?: boolean;
  };
}

interface ModelContextApi {
  registerTool: (
    tool: WebMcpToolDefinition,
    options?: { signal?: AbortSignal }
  ) => void;
  unregisterTool?: (name: string) => void;
}

function getModelContext(): ModelContextApi | null {
  if (typeof window === "undefined") return null;
  const docMc = (document as unknown as { modelContext?: ModelContextApi })
    .modelContext;
  const navMc = (navigator as unknown as { modelContext?: ModelContextApi })
    .modelContext;
  const mc = docMc ?? navMc;
  return mc && typeof mc.registerTool === "function" ? mc : null;
}

const DOMAIN = "https://www.uniquee-ws.com";

// ============================================================================
// STRUCTURED AGENCY DATA FOR AI BROWSER AGENTS
// ============================================================================

const AGENCY_PACKAGES = {
  egypt: {
    currency: "EGP",
    seo: [
      {
        name: "Local Starter SEO",
        price: "7,500 EGP/month",
        keywords: "Up to 20 commercial keywords",
        url_ar: `${DOMAIN}/egypt-seo`,
        url_en: `${DOMAIN}/en/egypt-seo`,
      },
      {
        name: "Growth Corporate & Store SEO (Most Popular)",
        price: "14,500 EGP/month",
        keywords: "Up to 50 commercial & category terms",
        url_ar: `${DOMAIN}/egypt-seo`,
        url_en: `${DOMAIN}/en/egypt-seo`,
      },
      {
        name: "Enterprise & Export SEO",
        price: "26,000 EGP/month",
        keywords: "100+ Arabic & English keywords",
        url_ar: `${DOMAIN}/egypt-seo`,
        url_en: `${DOMAIN}/en/egypt-seo`,
      },
    ],
    web_design: [
      {
        name: "Starter Corporate Website",
        price: "8,500 EGP (one-time)",
        delivery: "7-10 business days",
        url_ar: `${DOMAIN}/egypt-web-design`,
        url_en: `${DOMAIN}/en/egypt-web-design`,
      },
      {
        name: "Growth E-Commerce / Bilingual Pro (Most Popular)",
        price: "18,500 EGP (one-time)",
        delivery: "10-15 business days (Paymob, Fawry, Bosta included)",
        url_ar: `${DOMAIN}/egypt-web-design`,
        url_en: `${DOMAIN}/en/egypt-web-design`,
      },
      {
        name: "Enterprise Custom Next.js + Sanity CMS",
        price: "Starting from 35,000 EGP",
        delivery: "15-21 business days",
        url_ar: `${DOMAIN}/egypt-web-design`,
        url_en: `${DOMAIN}/en/egypt-web-design`,
      },
    ],
  },
  saudi_riyadh: {
    currency: "SAR",
    seo: [
      {
        name: "Riyadh Local Starter SEO",
        price: "1,850 SAR/month",
        url_ar: `${DOMAIN}/riyadh-seo`,
        url_en: `${DOMAIN}/en/riyadh-seo`,
      },
      {
        name: "Riyadh Growth & Salla/Zid SEO (Most Popular)",
        price: "3,200 SAR/month",
        url_ar: `${DOMAIN}/riyadh-seo`,
        url_en: `${DOMAIN}/en/riyadh-seo`,
      },
      {
        name: "Riyadh Enterprise Dominance",
        price: "5,500 SAR/month",
        url_ar: `${DOMAIN}/riyadh-seo`,
        url_en: `${DOMAIN}/en/riyadh-seo`,
      },
    ],
  },
  saudi_jeddah: {
    currency: "SAR",
    seo: [
      {
        name: "Jeddah SEO & Local Maps Packages",
        price: "Starting from 1,850 SAR/month",
        url_ar: `${DOMAIN}/seocompanyjeddah`,
        url_en: `${DOMAIN}/en/seocompanyjeddah`,
      },
    ],
  },
  uae: {
    currency: "AED",
    seo: [
      {
        name: "UAE & Dubai SEO & AI Search (GEO)",
        price: "Custom AED monthly retainers",
        url_ar: `${DOMAIN}/uae-web-design`,
        url_en: `${DOMAIN}/en/uae-seo`,
      },
    ],
  },
};

// ============================================================================
// WEBMCP CLIENT PROVIDER COMPONENT
// ============================================================================

export default function WebMcpProvider() {
  const router = useRouter();

  useEffect(() => {
    const mc = getModelContext();
    if (!mc) return;

    const ac = new AbortController();
    const registeredNames: string[] = [];

    const safeRegister = (tool: WebMcpToolDefinition) => {
      try {
        mc.registerTool(tool, { signal: ac.signal });
        registeredNames.push(tool.name);
      } catch (err) {
        console.warn(`[WebMCP] Could not register tool "${tool.name}":`, err);
      }
    };

    // 1. Agency Overview & Contact Info (Read-Only)
    safeRegister({
      name: "get_unique_agency_info",
      description:
        "Returns official company information, supported countries, technologies, and verified WhatsApp/email contact details for UNIQUE Digital Agency.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async () => ({
        name: "UNIQUE Digital Agency",
        website: DOMAIN,
        email: "godyslem139@gmail.com",
        whatsapp_primary: "+201270506511",
        whatsapp_secondary: "+201202987700",
        languages: ["Arabic (RTL)", "English (LTR)"],
        markets: ["Egypt", "Saudi Arabia (Riyadh & Jeddah)", "UAE", "Kuwait"],
        specialties: [
          "Technical SEO & Core Web Vitals",
          "Generative Engine Optimization (GEO / AI Search)",
          "Google Maps Local 3-Pack SEO",
          "Next.js, React & Sanity CMS Development",
          "WordPress, WooCommerce, Shopify, Salla, Zid & EasyOrder Stores",
        ],
      }),
      annotations: { readOnlyHint: true },
    });

    // 2. Service Packages & Pricing Lookup (Read-Only)
    safeRegister({
      name: "get_service_packages",
      description:
        "Retrieves transparent SEO and Web Design pricing packages and official landing page URLs for UNIQUE Digital Agency by target market and service type.",
      inputSchema: {
        type: "object",
        properties: {
          market: {
            type: "string",
            enum: ["egypt", "saudi_riyadh", "saudi_jeddah", "uae"],
            description:
              "Target market country or city: 'egypt', 'saudi_riyadh', 'saudi_jeddah', or 'uae'.",
          },
          service_type: {
            type: "string",
            enum: ["seo", "web_design", "all"],
            description:
              "Requested service category: 'seo', 'web_design', or 'all'. Defaults to 'all'.",
          },
        },
        required: ["market"],
        additionalProperties: false,
      },
      execute: async (args) => {
        const market = String(args.market || "egypt") as keyof typeof AGENCY_PACKAGES;
        const serviceType = String(args.service_type || "all");
        const marketData = AGENCY_PACKAGES[market];

        if (!marketData) {
          return {
            error:
              "Unsupported market. Choose one of: egypt, saudi_riyadh, saudi_jeddah, uae.",
          };
        }

        if (serviceType === "seo") {
          return { market, currency: marketData.currency, seo: marketData.seo };
        }
        if (serviceType === "web_design" && "web_design" in marketData) {
          return {
            market,
            currency: marketData.currency,
            web_design: marketData.web_design,
          };
        }

        return { market, ...marketData };
      },
      annotations: { readOnlyHint: true },
    });

    // 3. Navigate User to a Specific Service Page
    safeRegister({
      name: "navigate_to_service_page",
      description:
        "Navigates the current browser tab to a specific UNIQUE Digital Agency service page or blog in Arabic or English.",
      inputSchema: {
        type: "object",
        properties: {
          destination: {
            type: "string",
            enum: [
              "home",
              "egypt_seo",
              "egypt_web_design",
              "saudi_seo",
              "riyadh_seo",
              "jeddah_seo",
              "uae_seo",
              "blog",
            ],
            description: "The target section or service page to open.",
          },
          language: {
            type: "string",
            enum: ["ar", "en"],
            description: "Preferred language version: 'ar' (Arabic) or 'en' (English).",
          },
        },
        required: ["destination"],
        additionalProperties: false,
      },
      execute: async (args) => {
        const dest = String(args.destination || "home");
        const lang = args.language === "en" ? "en" : "ar";

        const routeMap: Record<string, { ar: string; en: string }> = {
          home: { ar: "/", en: "/en" },
          egypt_seo: { ar: "/egypt-seo", en: "/en/egypt-seo" },
          egypt_web_design: { ar: "/egypt-web-design", en: "/en/egypt-web-design" },
          saudi_seo: { ar: "/saudi-seo", en: "/en/saudi-seo" },
          riyadh_seo: { ar: "/riyadh-seo", en: "/en/riyadh-seo" },
          jeddah_seo: { ar: "/seocompanyjeddah", en: "/en/seocompanyjeddah" },
          uae_seo: { ar: "/uae-web-design", en: "/en/uae-seo" },
          blog: { ar: "/blog", en: "/en/blog" },
        };

        const target = routeMap[dest]?.[lang] || "/";
        router.push(target);
        return {
          status: "navigated",
          path: target,
          fullUrl: `${DOMAIN}${target}`,
        };
      },
    });

    // 4. Generate Pre-Filled WhatsApp Quote / Audit Link (Read-Only, Human-in-the-Loop Safe)
    safeRegister({
      name: "generate_whatsapp_quote_link",
      description:
        "Builds a ready-to-click official WhatsApp link pre-filled with the user's requested service, website URL, and market so they can send it to UNIQUE Digital Agency.",
      inputSchema: {
        type: "object",
        properties: {
          service: {
            type: "string",
            enum: ["seo", "web_design", "ecommerce", "free_audit"],
            description: "Type of inquiry: 'seo', 'web_design', 'ecommerce', or 'free_audit'.",
          },
          market: {
            type: "string",
            description: "Target city or country (e.g., Cairo, Riyadh, Jeddah, Dubai).",
          },
          website_url: {
            type: "string",
            description: "Optional existing website or store URL for audit.",
          },
          notes: {
            type: "string",
            description: "Optional extra details from the user.",
          },
        },
        required: ["service"],
        additionalProperties: false,
      },
      execute: async (args) => {
        const service = String(args.service || "free_audit");
        const market = args.market ? ` (${String(args.market)})` : "";
        const site = args.website_url ? `\nWebsite: ${String(args.website_url)}` : "";
        const notes = args.notes ? `\nDetails: ${String(args.notes)}` : "";

        const message = `Hello UNIQUE Digital Agency! I am interested in: ${service}${market}.${site}${notes}`;
        const encoded = encodeURIComponent(message);

        return {
          primary_whatsapp_url: `https://wa.me/201270506511?text=${encoded}`,
          secondary_whatsapp_url: `https://wa.me/201202987700?text=${encoded}`,
          prefilled_message: message,
        };
      },
      annotations: { readOnlyHint: true },
    });

    return () => {
      ac.abort();
      if (typeof mc.unregisterTool === "function") {
        for (const name of registeredNames) {
          try {
            mc.unregisterTool(name);
          } catch {
            // Ignored when AbortSignal already cleaned up the tool
          }
        }
      }
    };
  }, [router]);

  return null;
}