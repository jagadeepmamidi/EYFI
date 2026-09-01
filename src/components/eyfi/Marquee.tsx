const MARQUEE_ITEMS = [
  "Wave 01 · LIVE",
  "₹2L in Prizes",
  "For College Students",
  "Internship Opportunities",
  "Venture Grants",
  "Verified income only",
];

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-b border-[#232323] bg-[#0A0A0A] py-2.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-6 font-open-sans text-xs sm:text-sm text-[#8A8A85] tracking-wide"
          >
            <span className="text-[#C4F62E]">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
