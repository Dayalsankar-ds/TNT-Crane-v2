import type { Metadata } from "next";
import HashScroll from "@/components/about/HashScroll";
import CraneRentalContent from "@/components/services/CraneRentalContent";
import RequestQuote from "@/components/site/RequestQuote";

/**
 * /services/crane-rental — Crane Rental's own page (2026-10-09). The first
 * service to get one, following the Maxim Crane comparison: an indexable URL
 * with its own title, and the quote form on the page rather than one click
 * away. Old /services#crane-rental links redirect here.
 *
 * Body: CraneRentalContent. This file adds the metadata and the quote
 * section — the same /contact form (ContactForm, service
 * preselected), so there is still one form and one submission path. Like
 * /contact, it says plainly that nothing is sent until a backend exists.
 *
 * Reached from: the homepage card, the nav's Services panel, the footer,
 * the /services card and crane preview (all via services.ts serviceHref).
 */

export const metadata: Metadata = {
  title: "Crane Rental | TNT Crane & Rigging",
  description:
    "Operated and bare crane rental across the TNT Crane & Rigging family: all-terrain, crawler, rough-terrain, hydraulic truck and carry deck cranes, boom trucks and more, in the US and Canada.",
  alternates: { canonical: "/services/crane-rental" },
};

export default function CraneRentalPage() {
  return (
    <>
      <HashScroll />
      <CraneRentalContent />

      {/* QUOTE — the home page's own Request a Quote section (2026-11-17, on
          request — match the home screen), replacing the gold band. Same
          shared QuoteForm as before, now in the home layout. */}
      <RequestQuote />
    </>
  );
}
