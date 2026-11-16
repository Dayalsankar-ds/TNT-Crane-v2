"use client";

/**
 * QUOTE FORM — the homepage Request a Quote form card, shared site-wide
 * (2026-11-13, on request: "follow the same Request a Quote form [from the]
 * main home page [on the] entire website"). Extracted unchanged from
 * RequestQuote.tsx, which now renders <QuoteForm />, and used in place of
 * ContactForm on /contact and /services/crane-rental. ContactForm.tsx stays
 * on disk, unused.
 *
 * Field ids are prefixed with a per-instance useId(), so the form can appear
 * on any page (or twice on one) without duplicate ids.
 */

import { useId, useState, type FormEvent } from "react";
import Button from "./Button";

/** Figma input look: grey filled box, no border until focus. */
const fField =
  "w-full rounded-md border border-transparent bg-[#ececee] px-4 py-3 font-body text-base text-black placeholder:text-black/40 focus:border-tnt-amber focus:bg-white focus:ring-1 focus:ring-tnt-amber focus:outline-none";
const fLabel = "block font-body text-[15px] font-semibold text-black";

function Star() {
  return (
    <span aria-hidden="true" className="ml-1 text-tnt-amber">
      *
    </span>
  );
}

function OptTag() {
  return <span className="ml-1 font-normal text-black/45">(optional)</span>;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: POST to a real endpoint / email service.
    setSubmitted(true);
  };

  return (
    <>
        {submitted ? (
        <div className="flex flex-col items-start justify-center rounded-2xl border border-black/10 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-10">
          <span className="font-display text-3xl text-black uppercase sm:text-4xl">Request received</span>
          <p className="mt-3 max-w-md font-body text-base text-tnt-body">
            Thanks — a TNT Sales Representative will be in touch shortly. For
            anything urgent, call{" "}
            <a href="tel:+18007992505" className="font-semibold text-black underline-offset-2 hover:underline">
              1-800-799-2505
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-9"
        >
          <div className="flex items-end justify-between gap-4 border-b border-black/15 pb-5">
            <h3 className="font-display text-2xl leading-none text-black uppercase">Project Details</h3>
            <p className="font-body text-xs text-black/55">
              <span aria-hidden="true" className="text-tnt-amber">*</span> Required
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={id("name")} className={fLabel}>Name<Star /></label>
              <input id={id("name")} name="name" required autoComplete="name" placeholder="John Doe" className={`mt-2 ${fField}`} />
            </div>
            <div>
              <label htmlFor={id("company")} className={fLabel}>Company<Star /></label>
              <input id={id("company")} name="company" required autoComplete="organization" placeholder="Your company" className={`mt-2 ${fField}`} />
            </div>
            <div>
              <label htmlFor={id("email")} className={fLabel}>Email<Star /></label>
              <input id={id("email")} name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`mt-2 ${fField}`} />
            </div>
            <div>
              <label htmlFor={id("phone")} className={fLabel}>Phone<Star /></label>
              <input id={id("phone")} name="phone" type="tel" required autoComplete="tel" placeholder="(123) 456-7890" className={`mt-2 ${fField}`} />
            </div>
            <div>
              <label htmlFor={id("city")} className={fLabel}>City<Star /></label>
              <input id={id("city")} name="city" required autoComplete="address-level2" placeholder="City" className={`mt-2 ${fField}`} />
            </div>
            <div>
              <label htmlFor={id("state")} className={fLabel}>State<Star /></label>
              <input id={id("state")} name="state" required autoComplete="address-level1" placeholder="State" className={`mt-2 ${fField}`} />
            </div>
          </div>

          <fieldset className="mt-7 border-t border-black/10 pt-6">
            <legend className="sr-only">Project details (optional)</legend>
            <p aria-hidden="true" className="font-body text-base font-semibold text-black">
              More about the job <span className="font-normal text-black/45">(optional)</span>
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={id("project")} className={fLabel}>Project name<OptTag /></label>
                <input id={id("project")} name="projectName" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor={id("address")} className={fLabel}>Address<OptTag /></label>
                <input id={id("address")} name="address" autoComplete="street-address" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor={id("start")} className={fLabel}>Start date<OptTag /></label>
                <input id={id("start")} name="start" type="date" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor={id("duration")} className={fLabel}>Duration<OptTag /></label>
                <input id={id("duration")} name="duration" placeholder="e.g. 3 days, 2 weeks" className={`mt-2 ${fField}`} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor={id("comments")} className={fLabel}>Comments<OptTag /></label>
              <textarea
                id={id("comments")}
                name="comments"
                rows={3}
                placeholder="A short summary of the job: what's being lifted, weight, site conditions"
                className={`mt-2 ${fField} resize-y`}
              />
            </div>

            {/* Attach row, in the design's "@ Attach Files" style. */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <label htmlFor={id("file")} className="flex cursor-pointer items-start gap-2.5">
                <span aria-hidden="true" className="mt-0.5 font-body text-[15px] font-semibold text-black">@</span>
                <span>
                  <span className="block font-body text-[15px] font-semibold text-black">Attach a file</span>
                  <span className="block font-body text-xs text-black/55">Plans, drawings or site photos (optional)</span>
                </span>
              </label>
              <input
                id={id("file")}
                name="file"
                type="file"
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
                className="max-w-full font-body text-xs text-black/60 file:mr-3 file:rounded-md file:border-0 file:bg-[#ececee] file:px-3 file:py-2 file:font-semibold file:text-black hover:file:bg-black/10"
              />
            </div>
          </fieldset>

          <label className="mt-6 flex items-start gap-3 font-body text-xs leading-relaxed text-black/60">
            <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-tnt-amber" />
            <span>
              By checking this box, I agree to receive conversational text
              messages from TNT Crane and Rigging related services. Reply STOP
              to opt-out at any time. For assistance, text HELP. Message and
              data rates may apply. Message frequency varies. Please view our
              Privacy Policy and Terms &amp; Conditions for more information.
            </span>
          </label>

          <Button type="submit" variant="primary" className="mt-6 w-full justify-center py-3.5 text-base!">
            Request a Quote
          </Button>
        </form>
      )}
    </>
  );
}
