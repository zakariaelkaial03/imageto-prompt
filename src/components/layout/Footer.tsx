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
    <footer className="bg-canvas border-t border-hairline py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-ink">Promptiqo</p>
            <p className="mt-2 text-sm text-steel leading-[1.5]">
              Turn any image into a perfect AI art prompt.
            </p>
          </div>
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-stone">
                {heading}
              </p>
              <ul className="space-y-1">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block py-[4px] text-sm text-steel transition-colors hover:text-ink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-[13px] text-stone">
          © {new Date().getFullYear()} Promptiqo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
