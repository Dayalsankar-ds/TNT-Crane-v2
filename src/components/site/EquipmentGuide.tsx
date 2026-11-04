/**
 * FIGMA REDESIGN, LIGHT THEME (2026-11-04, on request) — rebuilt from the
 * "Section — About the Fleet" frame (node 1053:3067) of the TNT Figma file's
 * "TNT Home screen" artboard, with the design's dark theme turned light:
 *   - Text exactly as the design: eyebrow "About the Fleet", heading "The
 *     Right Equipment. For Every Lift.", the 3-to-900-tons paragraph, the
 *     700+ Cranes / Up To 900 Tons stats, the photo's side words (People,
 *     Equipment, Expertise, Safer Outcomes / Built For A Higher Standard).
 *   - Photo: the design's own dusk tower-crane image, exported from Figma to
 *     public/photos/fleet/fleet-cover-tower-crane-dusk.jpg. It's the
 *     section's cover until autoplay or a visitor picks a crane type; after
 *     that the photo swaps per type, as before (on request — "Swap the
 *     photo"). The design's black diagonal panel is white here, with a
 *     softer translucent band beside it, so the dark photo still meets the
 *     light panel on the design's slant.
 *   - The 6-type crane strip runs along the bottom, numbered 01–06 as in the
 *     design; the active one is gold.
 *   - Fonts stay Impact + Poppins per CLAUDE.md, not the design's own.
 *   - BUTTON LINKS ARE TEMPORARY: "Explore the Fleet" scrolls to the crane
 *     strip and "View Load Charts" opens /load-chart/all-terrain-cranes until
 *     the user decides where they go.
 *
 * Everything below is the section's earlier history, kept for context.
 *
 * ABOUT THE FLEET (2026-09-13, on request) — replaces the "Rigging &
 * Attachments" card-grid + compare-modal section entirely, with content
 * matching tntcrane.com's own "About the Fleet" homepage section, restyled
 * in this site's own type/color system rather than copied verbatim:
 *   - Eyebrow "About the Fleet" + heading "A Modern Fleet of More Than 700
 *     Cranes" (their exact copy)
 *   - Their 6-item crane-type list (All-Terrain, Crawler, Hydraulic Truck,
 *     Rough-Terrain, Carry Deck, Tower)
 *   - Their two closing paragraphs (specialized rigging equipment, then
 *     Machinery Moving / Industrial Storage) as descriptive copy.
 *
 * NO CTA BUTTON — a "Talk to an engineer" button briefly lived here, added
 * on the assumption every section should close with one (the pattern
 * elsewhere on this site). Checked the live section directly: it has no CTA
 * at all — just the two paragraphs, plus inline links on "Machinery
 * Moving"/"Industrial Storage" within the second one pointing at those
 * service pages. Removed to match the actual source rather than an
 * invented convention.
 *
 * SCROLLING PHOTO GALLERY (2026-09-13, on request: "add that images... I
 * prefer scrolling type"): the plain bulleted list is now a horizontal,
 * snap-scrolling gallery of the same 6 crane types — real photography where
 * it exists, a plain gradient+icon tile where it doesn't (see below). Native
 * CSS scroll-snap (`overflow-x-auto snap-x`), no carousel library or client
 * state needed. Text content moved above the gallery (was beside the list
 * in a 2-column grid) since a full-bleed-width gallery and a side column
 * don't coexist — the copy now reads as an intro, the gallery as what it's
 * introducing.
 *
 * SINGLE-PHOTO SLIDESHOW (2026-09-17, on request: "one single image
 * placeholder need to change one by one" — didn't like the 6-card scroll
 * gallery's image placement): replaced the horizontal gallery with one
 * large photo beside a clickable list of the same 6 crane types. The photo
 * crossfades to match whichever type is active; active state both
 * auto-advances (every 4s, on request — "auto-rotate + labels") and can be
 * jumped to directly by clicking a label, same interaction shape as
 * StorySlideshow.tsx's own autoplaying card grid (4s cadence,
 * reduced-motion opt-out, gated on the section being in view — copied
 * rather than reinvented, so the two autoplay features on this page behave
 * identically). Each label keeps the slugified `id` the old cards carried,
 * so navigation.ts's Fleet panel deep links still land on something real.
 *
 * 3 REAL + 3 STOCK, ALL 6 WITH A PHOTO (2026-09-13, same day — a bare
 * gradient tile for 3 of 6 cards read as "missing photos" sitting next to
 * ones that had them, in a gallery where all 6 are visible side by side —
 * on request, made consistent instead): all-terrain, crawler, and hydraulic
 * truck cranes are real TNT photography, downloaded and inspected from
 * tntcrane.com's own homepage (FLEET_PHOTOS in photos.ts has the full
 * sourcing note and file provenance). Rough-Terrain, Carry Deck, and Tower
 * Cranes use verified Unsplash stock instead (PHOTOS.roughTerrainCrane /
 * carryDeckCrane / towerCrane) — genuine photos of that equipment class,
 * just not TNT's own fleet, and not claimed to be. A set of same-named PNGs
 * already existed on disk for exactly these 3 categories; opened and
 * inspected, they turned out to be synthetic/AI-generated (see
 * FLEET_PHOTOS's own docblock) and were left unused rather than reached
 * for — a genuine stock photo beats a fabricated "real" one.
 *
 * Each card keeps its own `id` (slugified) and `scroll-mt-32` so
 * navigation.ts's Fleet panel sub-items still have something real to deep-
 * link to, same pattern the old card grid used.
 *
 * Section keeps `id="fleet-guide"` — navigation.ts's "Fleet" group href
 * still points at it; renaming the anchor would mean touching every place
 * that links to the group, not just this file.
 *
 * LIGHT GREY THEME: shell is `bg-tnt-gray` (#eeeeee — this token's own
 * globals.css comment literally calls it out for "alternating section
 * backgrounds"), not plain white, so this section reads as its own tinted
 * band between the white Full-Scope Capability section above and whatever
 * follows, rather than blending into either.
 *
 * "VIEW FULL CAPACITY CHART" POPUP REMOVED (2026-09-29, on request —
 * "Remove 'FULL CAPACITY CHART' pop up from main screen"): this section used
 * to also have a button opening every model TNT operates, in a modal
 * (CraneCapacityChart.tsx, via the shared capacityChartStore.ts so the Load
 * Chart nav dropdown's CTA could open the same one). Both the button and the
 * modal are gone; the label list above is the section's only interaction
 * now. CraneCapacityChart.tsx and capacityChartStore.ts were this modal's
 * only consumers, so both files were deleted rather than left orphaned —
 * see /load-chart/all-terrain-cranes for where model-browsing now actually
 * lives (CraneCardGrid.tsx, its own light-theme card view).
 */

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Eyebrow } from "./primitives";
import { slugify } from "./navigation";
import { FLEET_TYPES } from "./fleetTypes";

/** The Figma design's own photo, shown until a crane type takes over. */
const COVER_PHOTO = "/photos/fleet/fleet-cover-tower-crane-dusk.jpg";

/** WIDE PHOTOS FOR THIS SECTION ONLY (2026-11-04, on request — "it needs to
 *  fit inside the frame… like the hydraulic truck crane image"). The photo
 *  frame here is a wide landscape (≈1.9:1 at 1440×900, wider on short
 *  screens), and its left third sits under the white panel, so each type
 *  needs a wide shot with the crane right of centre. fleetTypes.ts's photos
 *  didn't all suit that (All-Terrain and Crawler are tall portraits, so only
 *  ~30–36% of them showed), so this section keeps its own list; fleetTypes.ts
 *  is untouched because /load-chart/all-terrain-cranes uses its real TNT
 *  All-Terrain photo as that page's header. Hydraulic Truck keeps the real
 *  TNT photo; the other five are free-licence stock (Unsplash / Pexels),
 *  downloaded into public/photos/fleet/stock-*.jpg and checked by eye in the
 *  frame's own crop:
 *    - All-Terrain: Unsplash photo-1781356857510-0be2172fecc1
 *    - Crawler:     Unsplash photo-1685800567880-18ce2108fbfb
 *    - Rough-Terrain: Pexels 32122653 (ACE rough-terrain crane)
 *    - Carry Deck:  Pexels 31477030 (ACE pick-and-carry crane — the closest
 *                   free stock match; no true carry-deck photo was found)
 *    - Tower:       Pexels 4170185 (tower cranes over a high-rise under
 *                   construction) — replaced the first pick, a plain
 *                   crane-against-sky shot (Unsplash photo-1617105990241-
 *                   454f3d104824, kept as stock-tower-crane-old-unsplash.jpg),
 *                   on request 2026-11-04.
 *  The earlier photos are still on disk (all-terrain-crane.jpg,
 *  crawler-crane.jpg) and in photos.ts. */
const SECTION_PHOTOS: Record<
  string,
  {
    src: string;
    isStock: boolean;
    /** Desktop placement override (replaces the default lg:left-[15%]
     *  lg:w-[85%]) for a photo that needs to sit wholly right of the panel. */
    frameClass?: string;
    /** object-position, for where the crop lands. */
    position?: string;
  }
> = {
  "All-Terrain Cranes": { src: "/photos/fleet/stock-all-terrain-crane.jpg", isStock: true },
  "Crawler Cranes": { src: "/photos/fleet/stock-crawler-crane.jpg", isStock: true },
  "Hydraulic Truck Cranes": { src: "/photos/fleet/hydraulic-truck-crane.jpg", isStock: false },
  "Rough-Terrain Cranes": { src: "/photos/fleet/stock-rough-terrain-crane.jpg", isStock: true },
  "Carry Deck Cranes": { src: "/photos/fleet/stock-carry-deck-crane.jpg", isStock: true },
  // TOWER CRANES — the user's own image (2026-11-04, on request: "check the
  // folder from TNT that I have used for the previous code… pick one that
  // matches the tower crane"). The only tower crane in ~/TNT's projects:
  // tower-cranes.png (already in this project, identical to the copy in
  // "Back up combined"), a TNT-branded tower crane at sunset over a city
  // skyline. It's square with the mast left of centre, so on desktop it sits
  // only in the area right of the white panel, cropped from 30% down, which
  // keeps the mast, cab, jib, hook and skyline all in view. Not tagged
  // "Stock photo" — it's the user's own asset — but note fleetTypes.ts /
  // photos.ts's earlier finding that this PNG set looks AI-generated, so it
  // isn't a photo of a real TNT crane either. Previous picks are still on
  // disk: stock-tower-crane.jpg (Pexels 4170185) and
  // stock-tower-crane-old-unsplash.jpg.
  "Tower Cranes": {
    src: "/photos/fleet/tower-cranes.png",
    isStock: false,
    frameClass: "lg:left-[46%] lg:w-[54%] xl:left-[34.5%] xl:w-[65.5%]",
    position: "50% 30%",
  },
};
const photoFor = (name: string) => SECTION_PHOTOS[name] ?? { src: "", isStock: false };

const SIDE_WORDS_TOP = ["People", "Equipment", "Expertise", "Safer Outcomes"];
const SIDE_WORDS_BOTTOM = ["Built", "For A", "Higher", "Standard"];

export default function EquipmentGuide() {
  // Autoplay, same shape as before (and as StorySlideshow.tsx): 4s cadence,
  // off while the section is out of view, under reduced motion, or while a
  // crane type is hovered; any manual pick restarts the 4s window. The first
  // tick (or the first hover/click) retires the cover photo; after that each
  // tick advances to the next crane type.
  const [activeType, setActiveType] = useState(0);
  const [showCover, setShowCover] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current) return;
    const id = setInterval(() => {
      if (!inViewRef.current || hoveringRef.current) return;
      if (showCover) setShowCover(false);
      else setActiveType((i) => (i + 1) % FLEET_TYPES.length);
    }, 4000);
    return () => clearInterval(id);
  }, [activeType, showCover]);

  const selectType = useCallback((i: number) => {
    setShowCover(false);
    setActiveType(i);
  }, []);

  const active = FLEET_TYPES[activeType];

  return (
    <section
      id="fleet-guide"
      ref={sectionRef}
      className="scroll-mt-[var(--chrome-h)] bg-tnt-gray text-black lg:flex lg:h-[calc(100svh-var(--chrome-h))] lg:min-h-[560px] lg:flex-col"
    >
      {/* ONE SCREEN TALL ON DESKTOP (2026-11-04, on request — "the user does
          not need to scroll to check the information for a section"): from
          lg up the section is exactly the viewport minus the fixed header
          (--chrome-h), the top area takes whatever the crane strip leaves,
          and the copy's spacing and heading size scale with viewport height
          so it all fits on a short laptop screen as well as a tall monitor.
          Below 560px of height it stops shrinking and scrolls instead. */}
      {/* ── TOP AREA — copy on a white diagonal panel over the photo ──── */}
      <div className="relative flex flex-col overflow-hidden lg:min-h-0 lg:flex-1 lg:flex-row lg:items-start">
        {/* Photo stack. Below lg it sits under the copy as its own block;
            from lg up it fills the area behind the copy's white panel. */}
        <div className="relative order-2 aspect-16/9 bg-black lg:absolute lg:inset-0 lg:aspect-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COVER_PHOTO}
            alt="Tower crane lit up at dusk over a city construction site"
            aria-hidden={!showCover}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out lg:left-[15%] lg:w-[85%] ${
              showCover ? "opacity-100" : "opacity-0"
            }`}
          />
          {FLEET_TYPES.map((t, i) => {
            const photo = photoFor(t.name);
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={t.name}
                src={photo.src}
                alt={t.name}
                aria-hidden={showCover || i !== activeType}
                loading="lazy"
                style={photo.position ? { objectPosition: photo.position } : undefined}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                  photo.frameClass ?? "lg:left-[15%] lg:w-[85%]"
                } ${!showCover && i === activeType ? "opacity-100" : "opacity-0"}`}
              />
            );
          })}
          {/* Darken the photo slightly so the white side words stay legible
              on the lighter crane photos too. */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

          {/* The design's two diagonal panels, light: a solid white one and
              a translucent band beside it. Desktop only — below lg the copy
              sits above the photo instead of over it. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-tnt-gray/35 lg:block lg:[clip-path:polygon(0_0,62%_0,55%_100%,0_100%)] xl:[clip-path:polygon(0_0,53.5%_0,44.5%_100%,0_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-tnt-gray lg:block lg:[clip-path:polygon(0_0,52%_0,46%_100%,0_100%)] xl:[clip-path:polygon(0_0,41%_0,34.5%_100%,0_100%)]"
          />

          {/* Side words, on the photo (desktop only, as decoration). */}
          <div aria-hidden="true" className="absolute top-9 right-10 hidden font-body text-sm leading-6 text-white lg:block">
            {SIDE_WORDS_TOP.map((w) => (
              <p key={w}>{w}</p>
            ))}
            <span className="mt-2 block h-0.5 w-6 bg-tnt-amber" />
          </div>
          <div aria-hidden="true" className="absolute right-10 bottom-10 hidden text-right font-body text-sm leading-6 text-white lg:block">
            {SIDE_WORDS_BOTTOM.map((w) => (
              <p key={w}>{w}</p>
            ))}
          </div>

          {/* Honesty tag for the stand-in stock photos (see fleetTypes.ts). */}
          {!showCover && photoFor(active.name).isStock && (
            <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-body text-[10px] tracking-[0.1em] text-white/80 uppercase backdrop-blur-sm lg:top-auto lg:right-auto lg:bottom-6 lg:left-[47%]">
              Stock photo
            </span>
          )}
        </div>

        {/* Copy */}
        {/* COPY ALIGNED TO THE PANEL, NOT A CENTRED CONTAINER (2026-11-04, on
            request — text ran over the photo on wide screens, with empty
            space on the left). The white panel is drawn as a share of the
            full width, so from lg up the copy is too: full-bleed, a left
            inset of 5.75vw (the design's 83px at 1440) and a width that
            always ends inside the panel's slanted edge. lg (1024–1279px) gets
            a wider panel and column so the heading still fits; xl and up use
            the design's own proportions. */}
        <div className="relative z-10 order-1 w-full px-4 py-16 sm:px-6 sm:py-20 lg:w-[42%] lg:pt-[clamp(0.75rem,calc(10vh_-_54px),3.5rem)] lg:pb-[clamp(0.75rem,2.5vh,3.5rem)] lg:pr-6 lg:pl-[5.75vw] xl:w-[35%]">
          <div className="max-w-md lg:max-w-none">
            <Eyebrow className="flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              About the Fleet
            </Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl lg:mt-[1.4vh] lg:text-[min(4.15vw,3.75rem,5.6vh)]">
              The Right
              <br />
              Equipment.
              <br />
              <span className="text-tnt-amber">For Every Lift.</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-tnt-body sm:text-lg lg:mt-[2vh] lg:text-[min(1.125rem,2.1vh)] lg:leading-normal">
              A modern, well-maintained fleet of 700+ cranes and specialized
              equipment, ready to take on projects of any size — from 3 to 900
              tons.
            </p>

            <dl className="mt-8 flex items-center gap-6 lg:mt-[2.4vh]">
              <div>
                <dt className="sr-only">Cranes</dt>
                <dd>
                  <span className="block font-display text-4xl leading-none text-black lg:text-[min(2.25rem,4.2vh)]">700+</span>
                  <span className="mt-1.5 block font-body text-sm text-black/60">Cranes</span>
                </dd>
              </div>
              <span aria-hidden="true" className="h-14 w-px bg-black/20" />
              <div>
                <dt className="sr-only">Lifting capacity</dt>
                <dd>
                  <span className="block font-body text-sm text-black/60">Up To</span>
                  <span className="mt-1 block font-display text-4xl leading-none text-black lg:text-[min(2.25rem,4.2vh)]">900 Tons</span>
                  <span className="mt-1.5 block font-body text-sm text-black/60">Lifting Capacity</span>
                </dd>
              </div>
            </dl>

            {/* TEMPORARY hrefs — see the docblock. */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-[2.8vh] lg:flex-nowrap lg:gap-x-5">
              <a
                href="#fleet-types"
                className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3.5 font-body text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:border-tnt-amber hover:bg-tnt-amber hover:text-black lg:px-5 lg:py-[clamp(0.6rem,1.5vh,0.875rem)] lg:text-sm"
              >
                Explore the Fleet <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/load-chart/all-terrain-cranes"
                className="inline-flex items-center gap-3 font-body text-[15px] font-semibold whitespace-nowrap text-black lg:text-sm transition-colors hover:text-tnt-amber"
              >
                View Load Charts <span aria-hidden="true" className="text-tnt-amber">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── CRANE CLASSES STRIP ──────────────────────────────────────────
          Hover to preview, click to jump (click matters on touch). Each
          item keeps its slugified `id` so navigation.ts's Fleet panel deep
          links still land on something real. All-Terrain Cranes links to
          its own load-chart page; the rest swap the photo in place. */}
      <ul
        id="fleet-types"
        className="grid shrink-0 scroll-mt-32 grid-cols-2 border-t border-black/10 bg-[#f7f7f7] sm:grid-cols-3 lg:grid-cols-6"
        onMouseEnter={() => {
          hoveringRef.current = true;
        }}
        onMouseLeave={() => {
          hoveringRef.current = false;
        }}
      >
        {FLEET_TYPES.map((t, i) => {
          const isActive = i === activeType;
          const content = (
            <>
              <span
                className={`font-display text-2xl leading-none transition-colors group-hover:text-white group-focus-visible:text-white lg:text-xl ${
                  isActive ? "text-white" : "text-black/35"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* FIGMA CRANE ICONS (2026-11-04, on request — "follow the same
                  icon from that section in Figma"): the six silhouettes from
                  the Figma "Crane Classes Strip" (nodes 1053:3112–3141),
                  exported as SVG into public/icons/fleet/<slug>.svg. Drawn
                  as a CSS mask over `bg-current`, so they take the text
                  color: gold when active, gray otherwise, as in the design.
                  Replaces the generic line icons (`Icon name={t.icon}`). */}
              <span
                aria-hidden="true"
                className={`mt-4 block h-9 w-9 bg-current transition-colors group-hover:text-tnt-amber group-focus-visible:text-tnt-amber lg:mt-2.5 lg:h-8 lg:w-8 ${isActive ? "text-tnt-amber" : "text-black/50"}`}
                style={{
                  maskImage: `url(/icons/fleet/${slugify(t.name)}.svg)`,
                  WebkitMaskImage: `url(/icons/fleet/${slugify(t.name)}.svg)`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "left center",
                  WebkitMaskPosition: "left center",
                }}
              />
              <span
                aria-hidden="true"
                className={`mt-2 block h-0.5 w-5 transition-colors group-hover:bg-tnt-amber group-focus-visible:bg-tnt-amber ${isActive ? "bg-tnt-amber" : "bg-black/20"}`}
              />
              <span
                className={`mt-3 font-body text-sm transition-colors group-hover:text-white group-focus-visible:text-white lg:mt-2 lg:text-[13px] ${
                  isActive ? "font-semibold text-white" : "text-black/60"
                }`}
              >
                {t.name}
              </span>
            </>
          );
          // ACTIVE = BLACK (2026-11-04, on request — "I can't see while
          // auto-scrolling… make those button background colors black, not
          // only while hovering"): the selected card (autoplay or hover) is
          // black with a white number and name and a brand-yellow icon and
          // dash, the same look as hover.
          const itemClassName = `group flex h-full w-full flex-col items-start px-6 py-8 text-left transition-colors hover:bg-black focus-visible:bg-black lg:px-6 lg:py-[clamp(0.75rem,2vh,1.5rem)] xl:px-8 ${
            isActive ? "bg-black" : ""
          }`;
          return (
            <li
              key={t.name}
              id={slugify(t.name)}
              className={`scroll-mt-32 border-black/10 ${i > 0 ? "lg:border-l" : ""} ${
                i % 2 === 1 ? "border-l sm:border-l-0" : ""
              } ${i % 3 !== 0 ? "sm:border-l" : ""} ${i >= 2 ? "border-t sm:border-t-0" : ""} ${
                i >= 3 ? "sm:border-t lg:border-t-0" : ""
              }`}
            >
              {t.name === "All-Terrain Cranes" ? (
                <Link
                  href="/load-chart/all-terrain-cranes"
                  onMouseEnter={() => selectType(i)}
                  onFocus={() => selectType(i)}
                  className={itemClassName}
                >
                  {content}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => selectType(i)}
                  onMouseEnter={() => selectType(i)}
                  aria-pressed={isActive}
                  className={itemClassName}
                >
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
