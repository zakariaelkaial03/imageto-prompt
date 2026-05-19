export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold">Terms of Service</h1>
        <p className="mb-10 text-sm text-white/40">Last updated: May 19, 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance</h2>
            <p>
              By using Promptiqo you agree to these Terms of Service. If you do not agree,
              please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Permitted use</h2>
            <p>
              Promptiqo is provided for lawful, personal, and commercial creative use. You may
              not use the service to analyze or generate prompts from illegal, harmful, or
              infringing images.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Intellectual property</h2>
            <p>
              You retain all rights to images you upload. The text prompts generated from
              your images are yours to use freely. We do not claim ownership of any content
              you create with Promptiqo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Service availability</h2>
            <p>
              We strive for high uptime but do not guarantee uninterrupted access. We reserve
              the right to modify or discontinue features at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Limitation of liability</h2>
            <p>
              Promptiqo is provided &quot;as is&quot; without warranties of any kind. We are not liable
              for any indirect, incidental, or consequential damages arising from your use of
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. Governing law</h2>
            <p>
              These terms are governed by applicable law. Disputes will be resolved in the
              courts of the jurisdiction in which Promptiqo operates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">7. Contact</h2>
            <p>
              Questions about these terms? Reach us via the{" "}
              <a href="/contact" className="text-violet-400 hover:underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
