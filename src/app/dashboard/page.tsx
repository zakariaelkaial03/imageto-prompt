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
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="mb-1 text-3xl font-bold">Dashboard</h1>
        <p className="mb-10 text-white/50">Welcome back.</p>

        {/* Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-3xl font-extrabold text-white">{value}</p>
              <p className="mt-1 text-sm text-white/50">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mb-10 flex gap-4">
          <Link
            href="/generator"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            New prompt
          </Link>
          <Link
            href="/history"
            className="rounded-xl border border-white/20 px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            View history
          </Link>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Recent activity
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {recent.map(({ id, label, time }, i) => (
              <div
                key={id}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < recent.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="text-sm text-white/80">{label}</span>
                <span className="text-xs text-white/40">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
