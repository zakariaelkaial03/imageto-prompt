import Link from "next/link";

const stats = [
  { label: "Prompts generated", value: "128" },
  { label: "Credits remaining", value: "72" },
  { label: "Images uploaded", value: "43" },
];

const recent = [
  { id: 1, label: "Fantasy Forest", time: "2 hours ago" },
  { id: 2, label: "Cyberpunk City", time: "Yesterday" },
  { id: 3, label: "Ocean Sunrise", time: "3 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <h1 className="mb-1 text-[28px] font-semibold leading-[1.25] text-ink">Dashboard</h1>
        <p className="mb-10 text-[16px] leading-[1.55] text-slate">Welcome back.</p>

        {/* Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-[12px] bg-surface p-6"
            >
              <p className="text-[36px] font-semibold text-ink">{value}</p>
              <p className="mt-1 text-[14px] leading-[1.5] text-slate">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mb-10 flex gap-3">
          <Link
            href="/generator"
            className="rounded-[8px] bg-primary px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
          >
            New prompt
          </Link>
          <Link
            href="/history"
            className="rounded-[8px] border border-hairline-strong px-[18px] py-[10px] text-[14px] text-ink transition-colors hover:bg-surface"
          >
            View history
          </Link>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[1px] text-stone">
            Recent activity
          </h2>
          <div className="overflow-hidden rounded-[12px] border border-hairline">
            {recent.map(({ id, label, time }, i) => (
              <div
                key={id}
                className={`flex items-center justify-between px-6 py-4 bg-canvas ${
                  i < recent.length - 1 ? "border-b border-hairline-soft" : ""
                }`}
              >
                <span className="text-[14px] text-charcoal">{label}</span>
                <span className="text-[13px] text-stone">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
