"use client";

import { useMemo, useState } from "react";
import { Search, Trophy, Users, Building2, Sparkles } from "lucide-react";

import {
  HUSTLE_CHIPS,
  VERIFICATION_TICKER,
  WAVE_DAY,
  WAVE_TOTAL_DAYS,
} from "@/data/leaderboard";
import { getEntriesForTab, getInitials } from "@/lib/leaderboard-utils";
import { formatINR, getProjectedPrize } from "@/lib/prizes";
import { cn } from "@/lib/utils";
import type { HustleType, LeaderboardTab, RankedEntry } from "@/types/leaderboard";

const TABS: { id: LeaderboardTab; label: string; icon: typeof Users }[] = [
  { id: "people", label: "People", icon: Users },
  { id: "teams", label: "Teams", icon: Trophy },
  { id: "campuses", label: "Campuses", icon: Building2 },
];

function PrizeChip({ rank, earnings }: { rank: number; earnings: number }) {
  const prize = getProjectedPrize(rank, earnings);
  const toneClass = {
    gold: "border-[#C4F62E]/50 bg-[#C4F62E]/10 text-[#C4F62E]",
    silver: "border-white/20 bg-white/5 text-white",
    bronze: "border-orange-400/40 bg-orange-400/10 text-orange-300",
    prize: "border-[#C4F62E]/30 bg-[#C4F62E]/5 text-[#C4F62E]",
    wheel: "border-purple-400/40 bg-purple-400/10 text-purple-300",
    none: "border-[#232323] bg-[#141414] text-[#8A8A85]",
  }[prize.tone];

  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border px-2.5 py-1 text-[10px] font-medium leading-tight sm:text-xs",
        toneClass,
        !prize.eligible && "opacity-70",
      )}
    >
      {prize.label}
    </span>
  );
}

function PodiumCard({
  entry,
  place,
}: {
  entry: RankedEntry;
  place: 1 | 2 | 3;
}) {
  const heights = { 1: "h-44 sm:h-52", 2: "h-36 sm:h-44", 3: "h-32 sm:h-40" };
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  const order = { 1: "order-2", 2: "order-1", 3: "order-3" };

  return (
    <div className={cn("flex flex-1 flex-col items-center", order[place])}>
      <div
        className={cn(
          "flex w-full max-w-[200px] flex-col items-center rounded-2xl border border-[#232323] bg-[#141414] p-4 transition-transform hover:-translate-y-1",
          place === 1 && "border-[#C4F62E]/40 shadow-[0_0_40px_rgba(196,246,46,0.12)]",
        )}
      >
        <span className="text-2xl">{medals[place]}</span>
        <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#C4F62E] font-space-grotesk text-sm font-bold text-[#0A0A0A]">
          {getInitials(entry.name)}
        </div>
        <p className="mt-3 text-center font-space-grotesk text-base font-semibold text-white">
          {entry.name}
        </p>
        <p className="mt-1 text-center font-open-sans text-xs text-[#8A8A85]">
          {entry.hustle}
        </p>
        <p className="mt-2 font-bricolage text-xl font-bold text-[#C4F62E]">
          {formatINR(entry.earnings)}
        </p>
        <div className="mt-3 w-full">
          <PrizeChip rank={entry.rank} earnings={entry.earnings} />
        </div>
      </div>
      <div
        className={cn(
          "mt-3 w-full max-w-[200px] rounded-t-xl bg-gradient-to-t from-[#C4F62E]/20 to-[#232323]",
          heights[place],
        )}
      />
    </div>
  );
}

function RankRow({ entry }: { entry: RankedEntry }) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-[#232323] bg-[#141414] p-4 transition-colors hover:border-[#C4F62E]/30 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="w-8 text-center font-bricolage text-lg font-bold text-[#8A8A85] group-hover:text-[#C4F62E]">
          {entry.rank}
        </span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#232323] bg-[#0A0A0A] font-space-grotesk text-xs font-semibold text-white">
          {getInitials(entry.name)}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-space-grotesk text-sm font-semibold text-white sm:text-base">
              {entry.name}
            </p>
            {entry.badge ? (
              <span className="rounded-full bg-[#C4F62E]/10 px-2 py-0.5 text-[10px] font-medium text-[#C4F62E]">
                {entry.badge}
              </span>
            ) : null}
          </div>
          <p className="font-open-sans text-xs text-[#8A8A85] sm:text-sm">
            {entry.subtitle} · {entry.hustle}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 sm:items-end">
        <p className="font-bricolage text-lg font-bold text-white">
          {formatINR(entry.earnings)}
        </p>
        <PrizeChip rank={entry.rank} earnings={entry.earnings} />
      </div>
    </div>
  );
}

export function LeaderboardBoard() {
  const [tab, setTab] = useState<LeaderboardTab>("people");
  const [search, setSearch] = useState("");
  const [hustle, setHustle] = useState<HustleType | null>(null);

  const entries = useMemo(
    () => getEntriesForTab(tab, search, hustle),
    [tab, search, hustle],
  );

  const podium = entries.slice(0, 3);
  const rest = entries.slice(3);
  const progress = (WAVE_DAY / WAVE_TOTAL_DAYS) * 100;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C4F62E]/30 bg-[#C4F62E]/10 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[#C4F62E]" />
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-wider text-[#C4F62E]">
            Wave 01 · Live
          </span>
        </div>

        <h1 className="mt-6 font-bricolage text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          The board is{" "}
          <span className="text-[#C4F62E]">live.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-open-sans text-sm text-[#8A8A85] sm:text-base">
          Ranked by verified income — not vibes, not screenshots. Submit proof as
          you earn, and watch the board move in real time.
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <div className="mb-2 flex justify-between font-open-sans text-xs text-[#8A8A85]">
            <span>Day {WAVE_DAY} of {WAVE_TOTAL_DAYS}</span>
            <span>{Math.round(progress)}% through the wave</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#232323]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#C4F62E] to-[#9ed624] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <div className="mt-6 overflow-hidden rounded-xl border border-[#232323] bg-[#141414] py-2">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...VERIFICATION_TICKER, ...VERIFICATION_TICKER].map((item, i) => (
            <span
              key={`${item.id}-${i}`}
              className="mx-8 font-open-sans text-xs text-[#8A8A85]"
            >
              <span className="text-[#C4F62E]">●</span> {item.text}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-space-grotesk text-sm font-medium transition-all",
              tab === id
                ? "border-[#C4F62E] bg-[#C4F62E] text-[#0A0A0A]"
                : "border-[#232323] bg-transparent text-[#8A8A85] hover:border-[#C4F62E]/40 hover:text-white",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {podium.length >= 3 ? (
        <section className="mt-10 flex items-end justify-center gap-3 sm:gap-6">
          <PodiumCard entry={podium[1]} place={2} />
          <PodiumCard entry={podium[0]} place={1} />
          <PodiumCard entry={podium[2]} place={3} />
        </section>
      ) : null}

      <section className="mt-10 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8A85]" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              tab === "people"
                ? "Search hustlers or campuses..."
                : tab === "teams"
                  ? "Search teams or campuses..."
                  : "Search campuses or cities..."
            }
            className="w-full rounded-xl border border-[#232323] bg-[#141414] py-3 pl-11 pr-4 font-open-sans text-sm text-white placeholder:text-[#8A8A85] outline-none focus:border-[#C4F62E]/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setHustle(null)}
            className={cn(
              "rounded-full border px-3 py-1.5 font-open-sans text-xs transition-all sm:text-sm",
              hustle === null
                ? "border-[#C4F62E] bg-[#C4F62E]/10 text-[#C4F62E]"
                : "border-[#232323] text-[#8A8A85] hover:text-white",
            )}
          >
            All hustles
          </button>
          {HUSTLE_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setHustle(chip === hustle ? null : chip)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-open-sans text-xs capitalize transition-all sm:text-sm",
                hustle === chip
                  ? "border-[#C4F62E] bg-[#C4F62E]/10 text-[#C4F62E]"
                  : "border-[#232323] text-[#8A8A85] hover:text-white",
              )}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8 space-y-3">
        {rest.length === 0 && podium.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#232323] p-10 text-center">
            <p className="font-space-grotesk text-lg text-white">No matches yet</p>
            <p className="mt-2 font-open-sans text-sm text-[#8A8A85]">
              Try a different search or hustle filter.
            </p>
          </div>
        ) : (
          rest.map((entry) => <RankRow key={entry.id} entry={entry} />)
        )}
      </section>

      <p className="mt-8 text-center font-open-sans text-xs text-[#8A8A85]">
        Prize amounts are projected based on current rank — final verification
        happens after Day 30.
      </p>
    </div>
  );
}
