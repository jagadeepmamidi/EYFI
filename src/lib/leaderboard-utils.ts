import { CAMPUSES, PEOPLE, TEAMS } from "@/data/leaderboard";
import type { HustleType, LeaderboardTab, RankedEntry } from "@/types/leaderboard";

function sumEarnings(ids: string[]): number {
  return ids.reduce((total, id) => {
    const person = PEOPLE.find((entry) => entry.id === id);
    return total + (person?.earnings ?? 0);
  }, 0);
}

function assignRanks(entries: Omit<RankedEntry, "rank">[]): RankedEntry[] {
  return entries
    .sort((a, b) => b.earnings - a.earnings)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

export function buildPeopleEntries(
  search: string,
  hustle: HustleType | null,
): RankedEntry[] {
  const query = search.trim().toLowerCase();
  const filtered = PEOPLE.filter((person) => {
    const matchesSearch =
      !query ||
      person.name.toLowerCase().includes(query) ||
      person.campus.toLowerCase().includes(query);
    const matchesHustle = !hustle || person.hustle === hustle;
    return matchesSearch && matchesHustle;
  });

  return assignRanks(
    filtered.map((person) => ({
      id: person.id,
      name: person.name,
      subtitle: person.campus,
      hustle: person.hustle,
      campus: person.campus,
      earnings: person.earnings,
      badge: person.badge,
    })),
  );
}

export function buildTeamEntries(
  search: string,
  hustle: HustleType | null,
): RankedEntry[] {
  const query = search.trim().toLowerCase();
  const filtered = TEAMS.filter((team) => {
    const matchesSearch =
      !query ||
      team.name.toLowerCase().includes(query) ||
      team.campus.toLowerCase().includes(query);
    const matchesHustle = !hustle || team.hustle === hustle;
    return matchesSearch && matchesHustle;
  });

  return assignRanks(
    filtered.map((team) => ({
      id: team.id,
      name: team.name,
      subtitle: `${team.memberIds.length} hustler${team.memberIds.length > 1 ? "s" : ""}`,
      hustle: team.hustle,
      campus: team.campus,
      earnings: sumEarnings(team.memberIds),
      memberCount: team.memberIds.length,
    })),
  );
}

export function buildCampusEntries(
  search: string,
  hustle: HustleType | null,
): RankedEntry[] {
  const query = search.trim().toLowerCase();

  const campusRows = CAMPUSES.map((campus) => {
    const members = PEOPLE.filter((person) => person.campus === campus.name);
    const filteredMembers = hustle
      ? members.filter((person) => person.hustle === hustle)
      : members;
    const earnings = filteredMembers.reduce((total, person) => total + person.earnings, 0);
    const topHustle = filteredMembers.sort((a, b) => b.earnings - a.earnings)[0]?.hustle ?? "consulting";

    return {
      id: campus.id,
      name: campus.name,
      subtitle: campus.city,
      hustle: topHustle,
      campus: campus.name,
      earnings,
      memberCount: filteredMembers.length,
    };
  }).filter((campus) => campus.memberCount > 0);

  const filtered = campusRows.filter((campus) => {
    if (!query) return true;
    return (
      campus.name.toLowerCase().includes(query) ||
      campus.subtitle.toLowerCase().includes(query)
    );
  });

  return assignRanks(filtered);
}

export function getEntriesForTab(
  tab: LeaderboardTab,
  search: string,
  hustle: HustleType | null,
): RankedEntry[] {
  if (tab === "teams") return buildTeamEntries(search, hustle);
  if (tab === "campuses") return buildCampusEntries(search, hustle);
  return buildPeopleEntries(search, hustle);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
