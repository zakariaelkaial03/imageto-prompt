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
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-[96px] text-center">
        <h1 className="mb-4 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">Simple pricing</h1>
        <p className="mb-16 text-[18px] leading-[1.5] text-slate">
          Start free. Upgrade when you need more.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map(({ name, price, period, description, cta, ctaHref, highlight, features }) => (
            <div
              key={name}
              className={`flex flex-col rounded-[12px] p-8 text-left ${
                highlight
                  ? "bg-surface border-2 border-primary"
                  : "bg-canvas border border-hairline"
              }`}
            >
              {highlight && (
                <span className="mb-4 self-start rounded-full bg-primary px-[10px] py-[4px] text-[13px] font-semibold text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-[22px] font-semibold text-ink">{name}</h2>
              <p className="mt-1 text-[14px] leading-[1.5] text-slate">{description}</p>
              <div className="mt-6">
                <span className="text-[48px] font-semibold text-ink">{price}</span>
                <span className="ml-1 text-[14px] text-steel">/ {period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-charcoal">
                    <span className="font-semibold text-semantic-success">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={ctaHref}
                className={`mt-8 block rounded-[8px] py-[10px] text-center text-[14px] font-medium transition-colors ${
                  highlight
                    ? "bg-primary text-white hover:bg-primary-pressed"
                    : "border border-hairline-strong text-ink hover:bg-surface"
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
