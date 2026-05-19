export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mb-10 text-sm text-white/40">Last updated: May 19, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Information we collect</h2>
            <p>
              When you use Promptiqo, we collect only what is necessary to provide the service:
              your email address and name when you create an account, and the images you upload
              for prompt generation. Images are processed in memory and are never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. How we use your information</h2>
            <p>
              We use your account information to identify you, manage your subscription, and
              send essential service-related emails. We do not sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Image data</h2>
            <p>
              Images you upload are sent to Cloudflare Workers AI for analysis. They are transmitted
              over HTTPS, processed to generate a prompt, and immediately discarded. We store
              only the resulting text prompt in your history if you are signed in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Cookies</h2>
            <p>
              We use session cookies strictly for authentication. We do not use tracking or
              advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Your rights</h2>
            <p>
              You can request deletion of your account and all associated data at any time by
              contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. Contact</h2>
            <p>
              For privacy questions, email us via the{" "}
              <a href="/contact" className="text-violet-400 hover:underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
