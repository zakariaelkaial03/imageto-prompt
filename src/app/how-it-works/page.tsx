import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Upload your image",
    description:
      "Drag and drop any JPEG, PNG, or WebP image (up to 5 MB) onto the upload area, or click to browse your files.",
  },
  {
    number: "02",
    title: "AI analyzes it",
    description:
      "Promptiqo sends your image to a vision AI model that reads composition, lighting, color palette, style, mood, and subject matter.",
  },
  {
    number: "03",
    title: "Copy your prompt",
    description:
      "Receive a richly detailed prompt ready to paste into Midjourney, Stable Diffusion, DALL-E, or any other AI art generator.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-4 text-4xl font-extrabold">How It Works</h1>
        <p className="mb-16 text-white/50 text-lg">
          Three simple steps from image to perfect prompt.
        </p>

        <div className="space-y-12">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex gap-8">
              <span className="shrink-0 text-4xl font-black text-violet-500/30">
                {number}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="mt-2 text-white/50">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/generator"
            className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Try it now
          </Link>
        </div>
      </div>
    </div>
  );
}
