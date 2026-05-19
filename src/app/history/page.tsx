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
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">History</h1>
        <p className="mb-10 text-white/50">All your past prompt generations.</p>

        <div className="space-y-4">
          {history.map(({ id, label, date, prompt }) => (
            <div
              key={id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold text-white">{label}</p>
                  <p className="mt-1 text-xs text-white/40">{date}</p>
                  <p className="mt-3 text-sm text-white/60 line-clamp-2">{prompt}</p>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(prompt)}
                  className="shrink-0 rounded-lg border border-white/20 px-3 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
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
