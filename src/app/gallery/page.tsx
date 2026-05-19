"use client";

const samples = [
  {
    id: 1,
    label: "Fantasy Forest",
    prompt:
      "An enchanted forest at twilight, bioluminescent mushrooms, ethereal mist, cinematic lighting, digital painting, 8k, artstation",
  },
  {
    id: 2,
    label: "Cyberpunk City",
    prompt:
      "Neon-lit cyberpunk cityscape, rain-soaked streets, flying cars, ultra-detailed, blade runner aesthetic, 4k render",
  },
  {
    id: 3,
    label: "Ocean Sunrise",
    prompt:
      "Golden sunrise over a calm ocean, dramatic clouds, soft reflections, photography, wide angle, f/1.8, award winning",
  },
  {
    id: 4,
    label: "Abstract Portrait",
    prompt:
      "Abstract female portrait, watercolor splashes, geometric shapes, vibrant palette, mixed media, trending on artstation",
  },
  {
    id: 5,
    label: "Space Station",
    prompt:
      "Interior of a retro-futuristic space station, warm ambient lighting, astronauts in jumpsuits, concept art, detailed",
  },
  {
    id: 6,
    label: "Snowy Village",
    prompt:
      "Cozy medieval village covered in snow, warm windows glowing, smoke from chimneys, painted illustration, storybook style",
  },
];

const cardTints = [
  "bg-tint-mint",
  "bg-tint-sky",
  "bg-tint-yellow",
  "bg-tint-lavender",
  "bg-tint-peach",
  "bg-tint-rose",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-[96px]">
        <h1 className="mb-2 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">Gallery</h1>
        <p className="mb-12 text-[16px] leading-[1.55] text-slate">
          Community-generated prompts. Get inspired and try the generator.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map(({ id, label, prompt }, i) => (
            <div
              key={id}
              className="flex flex-col rounded-[12px] border border-hairline bg-canvas p-6"
            >
              <div className={`mb-4 h-36 rounded-[8px] ${cardTints[i % cardTints.length]} flex items-center justify-center`}>
                <span className="text-4xl">🖼️</span>
              </div>
              <h2 className="text-[16px] font-semibold text-ink">{label}</h2>
              <p className="mt-2 flex-1 text-[14px] leading-[1.5] text-slate line-clamp-4">{prompt}</p>
              <button
                onClick={() => navigator.clipboard.writeText(prompt)}
                className="mt-4 self-start rounded-[8px] border border-hairline-strong px-3 py-[6px] text-[13px] font-medium text-slate transition-colors hover:border-ink hover:text-ink"
              >
                Copy prompt
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
