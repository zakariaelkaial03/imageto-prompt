export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-extrabold">About Promptiqo</h1>

        <p className="text-white/70 leading-relaxed">
          Promptiqo was built for creators who spend too much time describing
          their vision and not enough time building it. We believe the gap
          between an idea and a great AI-generated image should be as small as
          possible — so we built a tool that closes it.
        </p>
        <p className="mt-4 text-white/70 leading-relaxed">
          Upload any image and our vision AI model reads every detail — color,
          composition, mood, lighting, and style — then returns a prompt
          engineered for the world&apos;s best AI art generators: Midjourney,
          Stable Diffusion, and DALL-E.
        </p>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Our mission</h2>
          <p className="text-white/60 leading-relaxed">
            Make AI creativity accessible to everyone, regardless of their
            ability to write technical prompts.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Team</h2>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-violet-600/30 flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <p className="font-semibold text-white">Zakaria El Kaial</p>
              <p className="text-sm text-white/50">Founder & Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
