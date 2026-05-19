import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Instant Analysis",
    description:
      "Our AI reads composition, lighting, style, and mood to craft prompts in seconds.",
    tint: "bg-tint-mint",
  },
  {
    icon: "🎨",
    title: "Multi-Model Ready",
    description:
      "Outputs are tuned for Midjourney, Stable Diffusion, and DALL-E out of the box.",
    tint: "bg-tint-lavender",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    description: "Copy the full prompt to your clipboard and paste it anywhere, instantly.",
    tint: "bg-tint-sky",
  },
  {
    icon: "🔒",
    title: "Private & Secure",
    description: "Your images are never stored. They are analyzed and immediately discarded.",
    tint: "bg-tint-peach",
  },
];

export default function Home() {
  return (
    <div className="bg-canvas text-ink">
      {/* Hero — Deep Navy Band */}
      <section className="bg-brand-navy px-6 py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full bg-primary px-[10px] py-[4px] text-[13px] font-semibold text-on-dark">
            Powered by Cloudflare AI
          </span>
          <h1 className="max-w-4xl text-[48px] font-semibold leading-[1.10] tracking-[-1px] text-on-dark md:text-[64px] lg:text-[80px] lg:tracking-[-2px]">
            Turn any image into a{" "}
            <span className="text-on-dark">perfect AI prompt</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-[1.5] text-on-dark-muted">
            Upload a photo, screenshot, or artwork and Promptiqo instantly
            generates a detailed prompt optimized for your favorite AI art tool.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/generator"
              className="rounded-[8px] bg-primary px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
            >
              Try it free
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-[8px] border border-on-dark-muted px-[18px] py-[10px] text-[14px] font-medium text-on-dark transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Features — Pastel Card Grid */}
      <section className="py-[96px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <h2 className="mb-4 text-center text-[36px] font-semibold leading-[1.20] tracking-[-0.5px] text-ink">
            Everything you need
          </h2>
          <p className="mb-12 text-center text-[18px] leading-[1.5] text-slate">
            From upload to polished prompt in seconds.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon, title, description, tint }) => (
              <div
                key={title}
                className={`rounded-[12px] ${tint} p-8`}
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-4 text-[22px] font-semibold leading-[1.30] text-charcoal">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-[96px] px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[12px] bg-surface px-8 py-[64px] text-center">
            <h2 className="text-[36px] font-semibold leading-[1.20] tracking-[-0.5px] text-ink">
              Ready to get started?
            </h2>
            <p className="mt-3 text-[16px] leading-[1.55] text-slate">
              No credit card required. Free plan includes 10 prompts per day.
            </p>
            <Link
              href="/sign-up"
              className="mt-8 inline-block rounded-[8px] bg-primary px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
