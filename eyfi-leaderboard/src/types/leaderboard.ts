export type HustleType =
  | "tutoring"
  | "homemade products"
  | "reels & videography"
  | "web development"
  | "thrift reselling"
  | "food stalls"
  | "consulting"
  | "freelance tech";

export type LeaderboardTab = "people" | "teams" | "campuses";

export interface Person {
  id: string;
  name: string;
  campus: string;
  hustle: HustleType;
  earnings: number;
  teamId?: string;
  badge?: string;
}

export interface Team {
  id: string;
  name: string;
  memberIds: string[];
  campus: string;
  hustle: HustleType;
}

export interface CampusAggregate {
  id: string;
  name: string;
  city: string;
  memberCount: number;
}

export interface RankedEntry {
  id: string;
  rank: number;
  name: string;
  subtitle: string;
  hustle: HustleType;
  campus: string;
  earnings: number;
  badge?: string;
  memberCount?: number;
}

export interface PrizeProjection {
  label: string;
  eligible: boolean;
  tone: "gold" | "silver" | "bronze" | "prize" | "wheel" | "none";
}

export interface VerificationTicker {
  id: string;
  text: string;
}
