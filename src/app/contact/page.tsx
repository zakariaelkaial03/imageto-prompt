export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-xl px-6 py-[96px]">
        <h1 className="mb-2 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">Contact</h1>
        <p className="mb-10 text-[16px] leading-[1.55] text-slate">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full h-[44px] rounded-[8px] border border-hairline-strong bg-canvas px-4 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full h-[44px] rounded-[8px] border border-hairline-strong bg-canvas px-4 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-[14px] font-medium text-charcoal">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us what's on your mind…"
              className="w-full rounded-[8px] border border-hairline-strong bg-canvas px-4 py-3 text-[16px] text-ink placeholder-stone outline-none focus:border-2 focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-[8px] bg-primary py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
