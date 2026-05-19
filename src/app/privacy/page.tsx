export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-3xl px-6 py-[96px]">
        <h1 className="mb-2 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">Privacy Policy</h1>
        <p className="mb-10 text-[13px] text-stone">Last updated: May 19, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-charcoal leading-[1.55]">
          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">1. Information we collect</h2>
            <p className="text-[16px] text-slate">
              When you use Promptiqo, we collect only what is necessary to provide the service:
              your email address and name when you create an account, and the images you upload
              for prompt generation. Images are processed in memory and are never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">2. How we use your information</h2>
            <p className="text-[16px] text-slate">
              We use your account information to identify you, manage your subscription, and
              send essential service-related emails. We do not sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">3. Image data</h2>
            <p className="text-[16px] text-slate">
              Images you upload are sent to Cloudflare Workers AI for analysis. They are transmitted
              over HTTPS, processed to generate a prompt, and immediately discarded. We store
              only the resulting text prompt in your history if you are signed in.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">4. Cookies</h2>
            <p className="text-[16px] text-slate">
              We use session cookies strictly for authentication. We do not use tracking or
              advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">5. Your rights</h2>
            <p className="text-[16px] text-slate">
              You can request deletion of your account and all associated data at any time by
              contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">6. Contact</h2>
            <p className="text-[16px] text-slate">
              For privacy questions, email us via the{" "}
              <a href="/contact" className="text-link-blue hover:underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
