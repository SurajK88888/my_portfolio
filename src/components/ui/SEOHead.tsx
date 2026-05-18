// ============================================================
// SEOHead.tsx — Reusable per-page SEO component.
// Usage: <SEOHead title="Page Title" description="..." />
// Place inside any page component to set meta tags dynamically.
// Reusable in any React project using react-helmet-async.
// ============================================================
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;           // Page title (shown in browser tab + Google)
  description: string;     // Meta description (shown in Google search results)
  keywords?: string;       // Optional comma-separated keywords
  ogImage?: string;        // Optional Open Graph image URL for social sharing
  url?: string;            // Optional canonical URL
}

const SITE_NAME = "Suraj Kumar — Portfolio";
const DEFAULT_OG_IMAGE = "/Portfolio_Logo.svg";
const BASE_URL = "https://surajkumar.dev"; // Update with your actual domain

const SEOHead = ({
  title,
  description,
  keywords = "Suraj Kumar, AI Developer, Web Developer, React, Gen AI, WordPress, Portfolio",
  ogImage = DEFAULT_OG_IMAGE,
  url = BASE_URL,
}: SEOHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* ── Primary meta ─────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Suraj Kumar" />
      <link rel="canonical" href={url} />

      {/* ── Open Graph (LinkedIn, Facebook, WhatsApp preview) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* ── Twitter Card ─────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Robots ───────────────────────────────────────── */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
