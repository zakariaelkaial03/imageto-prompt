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
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-3xl px-6 py-[96px]">
        <h1 className="mb-4 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">How It Works</h1>
        <p className="mb-16 text-[18px] leading-[1.5] text-slate">
          Three simple steps from image to perfect prompt.
        </p>

        <div className="space-y-12">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex gap-8">
              <span className="shrink-0 text-[48px] font-semibold leading-[1.15] text-primary/30">
                {number}
              </span>
              <div>
                <h2 className="text-[22px] font-semibold leading-[1.30] text-ink">{title}</h2>
                <p className="mt-2 text-[16px] leading-[1.55] text-slate">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/generator"
            className="inline-block rounded-[8px] bg-primary px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
          >
            Try it now
          </Link>
        </div>
      </div>
    </div>
  );
}
