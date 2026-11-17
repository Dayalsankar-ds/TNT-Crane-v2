import type { Metadata } from "next";
import NewsHub from "@/components/news/NewsHub";

/**
 * /news — the TNT family newsroom (2026-11-17, on request). Google News's
 * structure (briefing, top-story clusters, per-company rail, more news,
 * topic tabs and search) built from the five family sites' live news. See
 * NewsHub.tsx for the layout and newsData.ts for the content and sources.
 */

export const metadata: Metadata = {
  title: "News | TNT Crane & Rigging",
  description:
    "The latest articles from TNT Crane & Rigging and its family of companies — lift planning, crane safety, crawler cranes, rigging and crane rental.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  // -mt-10 below lg: same local fix as /about and /contact — --chrome-h
  // reserves 120px but the nav is only 80px until the lg utility strip shows.
  return (
    <div className="-mt-10 lg:mt-0">
      <NewsHub />
    </div>
  );
}
