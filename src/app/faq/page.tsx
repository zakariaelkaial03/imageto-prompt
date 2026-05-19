"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What image formats are supported?",
    a: "Promptiqo accepts JPEG, PNG, and WebP images up to 5 MB.",
  },
  {
    q: "Which AI art tools can I use the prompts with?",
    a: "The generated prompts are optimized for Midjourney, Stable Diffusion, and DALL-E, but they work with any text-to-image tool.",
  },
  {
    q: "Are my images stored?",
    a: "No. Your images are sent to the AI model for analysis and are never stored on our servers.",
  },
  {
    q: "How many prompts can I generate on the free plan?",
    a: "The free plan includes 10 prompt generations per day, reset at midnight UTC.",
  },
  {
    q: "Can I cancel my Pro subscription at any time?",
    a: "Yes. You can cancel anytime from your dashboard with no cancellation fees.",
  },
  {
    q: "Does Promptiqo have an API?",
    a: "API access is available on the Team plan. Contact us for details.",
  },
  {
    q: "What AI model powers Promptiqo?",
    a: "We use the LLaVA-1.5 vision model via Cloudflare Workers AI for fast, accurate image analysis.",
  },
  {
    q: "How do I report a bug or give feedback?",
    a: "Use the Contact page to reach us directly. We read every message.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-2xl px-6 py-[96px]">
        <h1 className="mb-2 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">FAQ</h1>
        <p className="mb-12 text-[16px] leading-[1.55] text-slate">Frequently asked questions.</p>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[8px] border border-hairline bg-canvas"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left text-[16px] font-medium text-ink"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="ml-4 shrink-0 text-steel text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="border-t border-hairline px-6 py-4 text-[14px] leading-[1.5] text-slate">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
