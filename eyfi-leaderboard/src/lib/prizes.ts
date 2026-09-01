import type { PrizeProjection } from "@/types/leaderboard";

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProjectedPrize(rank: number, earnings: number): PrizeProjection {
  if (earnings < 1000) {
    return { label: "Keep hustling — ₹1,000 min to qualify", eligible: false, tone: "none" };
  }
  if (rank === 1) {
    if (earnings < 10000) return { label: "₹30,000 if this holds — need ₹10k verified", eligible: false, tone: "gold" };
    return { label: "₹30,000 if this holds", eligible: true, tone: "gold" };
  }
  if (rank === 2) {
    if (earnings < 10000) return { label: "₹20,000 if this holds — need ₹10k verified", eligible: false, tone: "silver" };
    return { label: "₹20,000 if this holds", eligible: true, tone: "silver" };
  }
  if (rank === 3) {
    if (earnings < 10000) return { label: "₹10,000 if this holds — need ₹10k verified", eligible: false, tone: "bronze" };
    return { label: "₹10,000 if this holds", eligible: true, tone: "bronze" };
  }
  if (rank >= 4 && rank <= 8) {
    if (earnings < 3000) return { label: "₹5,000 if this holds — need ₹3k verified", eligible: false, tone: "prize" };
    return { label: "₹5,000 if this holds", eligible: true, tone: "prize" };
  }
  if (rank >= 9 && rank <= 13) return { label: "₹2,000 if this holds", eligible: true, tone: "prize" };
  if (rank >= 14 && rank <= 25) return { label: "₹1,000 if this holds", eligible: true, tone: "prize" };
  if (rank >= 26 && rank <= 100) return { label: "Spinning wheel shot — ₹1,000", eligible: true, tone: "wheel" };
  return { label: "Verified — climb the board", eligible: true, tone: "none" };
}
