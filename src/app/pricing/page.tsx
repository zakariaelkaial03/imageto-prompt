import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying Promptiqo.",
    cta: "Get started",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "10 prompts per day",
      "JPEG, PNG, WebP support",
      "Copy to clipboard",
      "Community gallery access",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For creators who generate prompts daily.",
    cta: "Start Pro",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "Unlimited prompts",
      "Priority AI processing",
      "Prompt history (90 days)",
      "Export as TXT / JSON",
      "No watermarks",
    ],
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For studios and power users.",
    cta: "Contact us",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Shared gallery workspace",
      "API access",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold">Simple pricing</h1>
        <p className="mb-16 text-white/50 text-lg">
          Start free. Upgrade when you need more.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map(({ name, price, period, description, cta, ctaHref, highlight, features }) => (
            <div
              key={name}
              className={`flex flex-col rounded-2xl border p-8 text-left ${
                highlight
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {highlight && (
                <span className="mb-4 self-start rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <p className="mt-1 text-white/50 text-sm">{description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">{price}</span>
                <span className="ml-1 text-white/40 text-sm">/ {period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-violet-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={ctaHref}
                className={`mt-8 block rounded-xl py-2.5 text-center text-sm font-semibold transition-colors ${
                  highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
