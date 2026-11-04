"use client";

/**
 * FOOTER — FIGMA DESIGN (2026-11-04, on request: "follow the same design for
 * the footer as well"). Built from the "Footer" frame (node 1053:3253) of
 * the TNT Figma file's "TNT Home screen" artboard, kept dark as designed:
 *   1. "Let's Talk." band over the design's photo (public/photos/footer/
 *      footer-lets-talk.jpg, exported from Figma) with a dark gradient: the
 *      "What happens next?" eyebrow, Call Us 1-800-799-2505 (a tel: link),
 *      and the three numbered next steps.
 *   2. Main block: TNT logo, blurb, social buttons; Company / Services /
 *      Fleet link columns; "Stay Connected" newsletter field.
 *   3. "Our Family of Companies" logo strip (the design's five, using this
 *      project's own /brand marks) and "Different Strengths. A Stronger
 *      Network."
 *   4. Bottom bar: copyright, legal links, "North America".
 * Text is the design's. Links point at real destinations where one exists;
 * `href: null` renders plain text (this footer's existing convention — a
 * link that goes nowhere is a worse promise than no link): Careers, For
 * Sale, YouTube (no channel found on tntcrane.com) and the four legal pages
 * have no route yet. News goes to tntcrane.com/news/ like the homepage news
 * section. Social links are tntcrane.com's own. "Wind Energy" is the
 * design's text; it links to /services#specialized, where Wind Energy lives
 * as a specialized capability.
 *
 * ⚠ NEWSLETTER: no list or backend exists, so the field never sends
 * anything — on submit it says so plainly instead of pretending it worked.
 *
 * Side inset 4.45vw (the design's 64px at 1440), like the full-width
 * sections above. The previous "BLCK. 01–03" footer is in the session
 * scratchpad (SiteFooter.before-figma.tsx).
 */

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { slugify } from "./navigation";

type FooterLink = { label: string; href: string | null; external?: boolean };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Who We Are", href: "/about" },
      { label: "Coverage Map", href: "/#coverage" },
      { label: "Family of Companies", href: "/#family" },
      { label: "Safety & Record", href: "/#safety" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: null },
      { label: "News", href: "https://tntcrane.com/news/", external: true },
      { label: "For Sale", href: null },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Crane Rental", href: "/services/crane-rental" },
      { label: "Specialized Rigging", href: "/services#specialized-rigging" },
      { label: "Lift Planning & Engineering", href: "/services#lift-planning-engineering" },
      { label: "Wind Energy", href: "/services#specialized" },
    ],
  },
  {
    heading: "Fleet",
    links: [
      { label: "All-Terrain Cranes", href: "/load-chart/all-terrain-cranes" },
      ...["Crawler Cranes", "Hydraulic Truck Cranes", "Rough-Terrain Cranes", "Carry Deck Cranes", "Tower Cranes"].map(
        (label) => ({ label, href: `/#${slugify(label)}` }),
      ),
    ],
  },
];

const SOCIAL: { short: string; name: string; href: string | null }[] = [
  { short: "in", name: "LinkedIn", href: "https://www.linkedin.com/company/tnt-crane-and-rigging-inc-" },
  { short: "YT", name: "YouTube", href: null },
  { short: "IG", name: "Instagram", href: "https://www.instagram.com/the_official_tntcrane/" },
  { short: "FB", name: "Facebook", href: "https://www.facebook.com/TNTCraneandRiggingInc/" },
];

const FAMILY = [
  { name: "TNT Crane & Rigging", logo: "/brand/tnt.svg" },
  { name: "Southway Crane & Rigging", logo: "/brand/southway.svg" },
  // The Figma footer's own RMS mark for dark backgrounds (white where the
  // standard mark is black — public/brand/rms-cranes.svg nearly vanished on
  // this footer). Exported from the Figma file 2026-11-04.
  { name: "RMS Cranes", logo: "/brand/rms-cranes-on-dark.svg" },
  { name: "JMS Crane & Rigging", logo: "/brand/jms.svg" },
  { name: "Eagle West Crane & Rigging", logo: "/brand/eagle-west.svg" },
];

const STEPS = [
  "Submit your project details",
  "Our team reviews load & site specs",
  "We call you back the same day",
];

const LEGAL: FooterLink[] = [
  { label: "Privacy Policy", href: null },
  { label: "Terms of Use", href: null },
  { label: "Site Map", href: null },
  { label: "Accessibility", href: null },
];

const linkCls = "font-body text-sm text-white/70 transition-colors hover:text-tnt-amber";

function FooterAnchor({ link, className = linkCls }: { link: FooterLink; className?: string }) {
  if (!link.href) return <span className={`${className} text-white/35 hover:text-white/35`}>{link.label}</span>;
  if (link.external)
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function Dash({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-0.5 w-5 bg-tnt-amber ${className}`} />;
}

export default function SiteFooter() {
  const [note, setNote] = useState<string | null>(null);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // No newsletter list or backend exists yet — say so rather than fake it.
    setNote("Sign-up isn't live yet. Follow us on LinkedIn for updates in the meantime.");
  };

  return (
    <footer className="bg-[#14161a] text-white">
      {/* ── 1. LET'S TALK BAND ───────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/footer/footer-lets-talk.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-[#14161a]" />
        <div className="relative flex flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-[4.45vw] lg:py-[5.5rem] xl:gap-10">
          <div className="shrink-0">
            <p className="flex items-center gap-3 font-body text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              What happens next?
            </p>
            <p className="mt-2 font-display text-5xl leading-none text-white/80 uppercase">
              Let&rsquo;s <span className="text-tnt-amber">Talk.</span>
            </p>
          </div>

          <span aria-hidden="true" className="hidden h-14 w-px shrink-0 bg-white/20 lg:block" />

          <a href="tel:+18007992505" className="group flex shrink-0 items-center gap-4">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/40 transition-colors group-hover:border-tnt-amber">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" />
              </svg>
            </span>
            <span>
              <span className="block font-body text-xs text-white/60">Call Us</span>
              <span className="block font-display text-2xl leading-tight text-white transition-colors group-hover:text-tnt-amber">
                1-800-799-2505
              </span>
            </span>
          </a>

          <ol className="flex flex-col gap-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-tnt-amber font-body text-xs font-semibold text-tnt-amber">
                  {i + 1}
                </span>
                <span className="font-body text-base text-white/85 lg:max-w-[13.5rem] lg:text-[15px] 2xl:max-w-none 2xl:whitespace-nowrap">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── 2. MAIN BLOCK ────────────────────────────────────────────── */}
      <div className="grid gap-12 px-4 pt-14 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.35fr] lg:gap-10 lg:px-[4.45vw]">
        <div className="sm:col-span-2 lg:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/tnt.svg" alt="TNT Crane & Rigging" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/70">
            One network. A stronger tomorrow. Providing crane rental, rigging,
            engineering and specialized lifting solutions across North America.
          </p>
          <ul className="mt-6 flex gap-2.5">
            {SOCIAL.map((s) => (
              <li key={s.short}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} (opens in a new tab)`}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/30 font-body text-xs font-semibold text-white transition-colors hover:border-tnt-amber hover:text-tnt-amber"
                  >
                    {s.short}
                  </a>
                ) : (
                  <span
                    title={`${s.name} — no channel linked yet`}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/15 font-body text-xs font-semibold text-white/35"
                  >
                    {s.short}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="font-body text-sm font-semibold text-white">{col.heading}</p>
            <Dash className="mt-3" />
            <ul className="mt-4 space-y-3.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <FooterAnchor link={l} />
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-body text-sm font-semibold text-white">Stay Connected</p>
          <Dash className="mt-3" />
          <p className="mt-4 font-body text-sm leading-relaxed text-white/70">
            Get the latest news, industry insights and company updates.
          </p>
          <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="flex flex-1 items-center gap-2 rounded-md border border-white/25 px-3.5 focus-within:border-tnt-amber">
              <span aria-hidden="true" className="font-body text-sm text-white/60">@</span>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent py-3 font-body text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-11 shrink-0 items-center justify-center rounded-md bg-tnt-amber text-black transition-colors hover:bg-tnt-amber-vivid"
            >
              →
            </button>
          </form>
          {note && (
            <p role="status" className="mt-3 font-body text-xs text-white/60">
              {note}
            </p>
          )}
        </div>
      </div>

      {/* ── 3. FAMILY OF COMPANIES STRIP ─────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="flex flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-[4.45vw]">
          <p className="shrink-0 font-body text-xs leading-snug text-white/70">
            <Dash className="mb-2" />
            Our Family
            <br />
            of Companies
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:gap-x-[clamp(2rem,5vw,5.5rem)]">
            {FAMILY.map((f) => (
              <li key={f.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.logo} alt={f.name} className="h-7 w-auto" />
              </li>
            ))}
          </ul>
          <p className="shrink-0 font-body text-xs leading-snug text-white/70 lg:text-right">
            Different Strengths.
            <br />A Stronger Network.
            <Dash className="mt-2 lg:ml-auto" />
          </p>
        </div>
      </div>

      {/* ── 4. BOTTOM BAR ────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="flex flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-[4.45vw]">
          <p className="font-body text-sm text-white/60">
            © {new Date().getFullYear()} TNT Crane &amp; Rigging. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <FooterAnchor link={l} className="font-body text-sm text-white/70 transition-colors hover:text-tnt-amber" />
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 font-body text-sm text-white/70">
            <span aria-hidden="true">◎</span> North America
          </p>
        </div>
      </div>
    </footer>
  );
}
