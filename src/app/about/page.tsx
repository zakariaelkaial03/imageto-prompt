export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-3xl px-6 py-[96px]">
        <h1 className="mb-6 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">About Promptiqo</h1>

        <p className="text-[16px] leading-[1.55] text-charcoal">
          Promptiqo was built for creators who spend too much time describing
          their vision and not enough time building it. We believe the gap
          between an idea and a great AI-generated image should be as small as
          possible — so we built a tool that closes it.
        </p>
        <p className="mt-4 text-[16px] leading-[1.55] text-charcoal">
          Upload any image and our vision AI model reads every detail — color,
          composition, mood, lighting, and style — then returns a prompt
          engineered for the world&apos;s best AI art generators: Midjourney,
          Stable Diffusion, and DALL-E.
        </p>

        <div className="mt-16">
          <h2 className="mb-4 text-[28px] font-semibold leading-[1.25] text-ink">Our mission</h2>
          <p className="text-[16px] leading-[1.55] text-slate">
            Make AI creativity accessible to everyone, regardless of their
            ability to write technical prompts.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-[28px] font-semibold leading-[1.25] text-ink">Team</h2>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-tint-lavender flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <p className="text-[16px] font-semibold text-ink">Zakaria El Kaial</p>
              <p className="text-[14px] text-slate">Founder & Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
