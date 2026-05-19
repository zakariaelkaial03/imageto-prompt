import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Instant Analysis",
    description:
      "Our AI reads composition, lighting, style, and mood to craft prompts in seconds.",
  },
  {
    icon: "🎨",
    title: "Multi-Model Ready",
    description:
      "Outputs are tuned for Midjourney, Stable Diffusion, and DALL-E out of the box.",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    description: "Copy the full prompt to your clipboard and paste it anywhere, instantly.",
  },
  {
    icon: "🔒",
    title: "Private & Secure",
    description: "Your images are never stored. They are analyzed and immediately discarded.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed]">
      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
        <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-300">
          Powered by Cloudflare AI
        </span>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Turn any image into a{" "}
          <span className="text-violet-400">perfect AI prompt</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/60">
          Upload a photo, screenshot, or artwork and Promptiqo instantly
          generates a detailed prompt optimized for your favorite AI art tool.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/generator"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Try it free
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            How it works
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Everything you need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/50">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-violet-500/20 bg-violet-500/5 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-3 text-white/50">
            No credit card required. Free plan includes 10 prompts per day.
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Create free account
          </Link>
        </div>
      </section>
    </div>
  );
}
