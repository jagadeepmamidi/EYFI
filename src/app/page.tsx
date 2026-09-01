import { Marquee } from "@/components/eyfi/Marquee";
import { SiteFooter } from "@/components/eyfi/SiteFooter";
import { SiteHeader } from "@/components/eyfi/SiteHeader";
import { LeaderboardBoard } from "@/components/leaderboard/LeaderboardBoard";

export default function Home() {
  return (
    <>
      <Marquee />
      <SiteHeader />
      <main className="flex-1">
        <LeaderboardBoard />
      </main>
      <SiteFooter />
    </>
  );
}
