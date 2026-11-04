import { ALL_PAGES } from "../lib/links";

export default function sitemap() {
  // Set SITE_URL before deploy (e.g. in Vercel env vars); localhost is only the fallback.
  const base = (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const now = new Date();
  return [{ url: `${base}/`, lastModified: now }, ...ALL_PAGES.map((p) => ({ url: `${base}${p.href}`, lastModified: now }))];
}
