import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/generator", label: "Generator" },
      { href: "/gallery", label: "Gallery" },
      { href: "/pricing", label: "Pricing" },
      { href: "/how-it-works", label: "How It Works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold text-white">Promptiqo</p>
            <p className="mt-2 text-sm text-white/50">
              Turn any image into a perfect AI art prompt.
            </p>
          </div>
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Promptiqo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
