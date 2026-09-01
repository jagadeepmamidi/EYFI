import Link from "next/link";

const FOOTER_LINKS = [
  { label: "How it works", href: "https://eyfichallenge.com/how-it-works" },
  { label: "Prizes", href: "https://eyfichallenge.com/prizes" },
  { label: "FAQ", href: "https://eyfichallenge.com/" },
  { label: "Become an Ambassador", href: "https://eyfichallenge.com/" },
  { label: "Partnerships", href: "https://eyfichallenge.com/" },
  { label: "Polygnan", href: "https://polygnan.org/" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#232323] bg-[#0A0A0A] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-bricolage text-2xl font-bold text-white">EYFI.</p>
            <p className="mt-2 max-w-xs font-open-sans text-sm text-[#8A8A85]">
              India&apos;s largest Student Earning Challenge.
              <br />
              An initiative by Polygnan.
            </p>
          </div>

          <div>
            <p className="mb-3 font-space-grotesk text-sm font-semibold text-white">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-open-sans text-sm text-[#8A8A85] hover:text-[#C4F62E]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#232323] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-open-sans text-xs text-[#8A8A85]">
            Mail{" "}
            <a href="mailto:info@eyfichallenge.com" className="hover:text-white">
              info@eyfichallenge.com
            </a>
          </p>
          <p className="font-open-sans text-xs text-[#8A8A85]">
            © 2026 EYFI Challenge · Made with ♥ for Indian students
          </p>
        </div>
      </div>
    </footer>
  );
}
