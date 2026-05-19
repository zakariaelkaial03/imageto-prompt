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
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold">FAQ</h1>
        <p className="mb-12 text-white/50">Frequently asked questions.</p>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-white"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="ml-4 shrink-0 text-white/40">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="border-t border-white/10 px-6 py-4 text-sm text-white/60">
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
