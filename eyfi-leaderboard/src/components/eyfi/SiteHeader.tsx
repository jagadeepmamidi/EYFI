import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "How it works", href: "https://eyfichallenge.com/how-it-works" },
  { label: "Prizes", href: "https://eyfichallenge.com/prizes" },
  { label: "Become an Ambassador", href: "https://eyfichallenge.com/" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#232323] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/eyfi-logo.png"
            alt="EYFI"
            width={88}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-open-sans text-sm text-[#8A8A85] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://eyfichallenge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full bg-[#C4F62E] px-5 font-space-grotesk text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#d4ff4a]"
        >
          JOIN
        </Link>
      </div>
    </header>
  );
}
