export default function TermsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto max-w-3xl px-6 py-[96px]">
        <h1 className="mb-2 text-[48px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink">Terms of Service</h1>
        <p className="mb-10 text-[13px] text-stone">Last updated: May 19, 2026</p>

        <div className="space-y-8 text-slate leading-[1.55]">
          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">1. Acceptance</h2>
            <p className="text-[16px]">
              By using Promptiqo you agree to these Terms of Service. If you do not agree,
              please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">2. Permitted use</h2>
            <p className="text-[16px]">
              Promptiqo is provided for lawful, personal, and commercial creative use. You may
              not use the service to analyze or generate prompts from illegal, harmful, or
              infringing images.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">3. Intellectual property</h2>
            <p className="text-[16px]">
              You retain all rights to images you upload. The text prompts generated from
              your images are yours to use freely. We do not claim ownership of any content
              you create with Promptiqo.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">4. Service availability</h2>
            <p className="text-[16px]">
              We strive for high uptime but do not guarantee uninterrupted access. We reserve
              the right to modify or discontinue features at any time.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">5. Limitation of liability</h2>
            <p className="text-[16px]">
              Promptiqo is provided &quot;as is&quot; without warranties of any kind. We are not liable
              for any indirect, incidental, or consequential damages arising from your use of
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">6. Governing law</h2>
            <p className="text-[16px]">
              These terms are governed by applicable law. Disputes will be resolved in the
              courts of the jurisdiction in which Promptiqo operates.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-ink mb-3">7. Contact</h2>
            <p className="text-[16px]">
              Questions about these terms? Reach us via the{" "}
              <a href="/contact" className="text-link-blue hover:underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
