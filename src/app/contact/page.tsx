export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold">Contact</h1>
        <p className="mb-10 text-white/50">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us what's on your mind…"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
