"use client";

const history = [
  {
    id: 1,
    label: "Fantasy Forest",
    date: "May 19, 2026",
    prompt:
      "An enchanted forest at twilight, bioluminescent mushrooms, ethereal mist, cinematic lighting, digital painting, 8k, artstation",
  },
  {
    id: 2,
    label: "Cyberpunk City",
    date: "May 18, 2026",
    prompt:
      "Neon-lit cyberpunk cityscape, rain-soaked streets, flying cars, ultra-detailed, blade runner aesthetic, 4k render",
  },
  {
    id: 3,
    label: "Ocean Sunrise",
    date: "May 16, 2026",
    prompt:
      "Golden sunrise over a calm ocean, dramatic clouds, soft reflections, photography, wide angle, f/1.8, award winning",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-[28px] font-semibold leading-[1.25] text-ink">History</h1>
        <p className="mb-10 text-[16px] leading-[1.55] text-slate">All your past prompt generations.</p>

        <div className="space-y-4">
          {history.map(({ id, label, date, prompt }) => (
            <div
              key={id}
              className="rounded-[12px] border border-hairline bg-canvas p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[16px] font-semibold text-ink">{label}</p>
                  <p className="mt-1 text-[13px] text-stone">{date}</p>
                  <p className="mt-3 text-[14px] leading-[1.5] text-slate line-clamp-2">{prompt}</p>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(prompt)}
                  className="shrink-0 rounded-[8px] border border-hairline-strong px-3 py-[6px] text-[13px] font-medium text-slate transition-colors hover:border-ink hover:text-ink"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
