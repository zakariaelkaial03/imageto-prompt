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

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold">Gallery</h1>
        <p className="mb-12 text-white/50">
          Community-generated prompts. Get inspired and try the generator.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map(({ id, label, prompt }) => (
            <div
              key={id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 h-36 rounded-xl bg-white/5 flex items-center justify-center">
                <span className="text-4xl">🖼️</span>
              </div>
              <h2 className="font-semibold text-white">{label}</h2>
              <p className="mt-2 flex-1 text-sm text-white/50 line-clamp-4">{prompt}</p>
              <button
                onClick={() => navigator.clipboard.writeText(prompt)}
                className="mt-4 self-start rounded-lg border border-white/20 px-3 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
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
