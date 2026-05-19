"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-8">
        <Link href="/" className="text-xl font-semibold text-ink tracking-tight">
          Promptiqo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-ink font-medium"
                  : "text-steel hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="px-3 py-2 text-sm text-steel hover:text-ink transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-[8px] bg-primary px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
