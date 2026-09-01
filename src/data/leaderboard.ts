import type {
  CampusAggregate,
  HustleType,
  Person,
  Team,
  VerificationTicker,
} from "@/types/leaderboard";

export const WAVE_DAY = 18;
export const WAVE_TOTAL_DAYS = 30;

export const HUSTLE_CHIPS: HustleType[] = [
  "tutoring",
  "homemade products",
  "reels & videography",
  "web development",
  "thrift reselling",
  "food stalls",
  "consulting",
  "freelance tech",
];

export const PEOPLE: Person[] = [
  { id: "p01", name: "Pavani", campus: "RV College of Engineering", hustle: "tutoring", earnings: 28400, teamId: "team-tutor-titans", badge: "Top Earner" },
  { id: "p02", name: "Santhosh", campus: "PES University", hustle: "web development", earnings: 27100, teamId: "team-code-crafters" },
  { id: "p03", name: "Tejaswini", campus: "VIT Vellore", hustle: "homemade products", earnings: 25800, teamId: "team-eco-essentials" },
  { id: "p04", name: "Abhiram", campus: "BITS Pilani", hustle: "reels & videography", earnings: 24500, teamId: "team-reel-riders" },
  { id: "p05", name: "Manish", campus: "SRM Institute", hustle: "consulting", earnings: 23100, teamId: "team-biz-blazers" },
  { id: "p06", name: "Preksha", campus: "Manipal Institute of Technology", hustle: "food stalls", earnings: 21800, teamId: "team-kitchen-kings" },
  { id: "p07", name: "Benak", campus: "IIT Hyderabad", hustle: "thrift reselling", earnings: 20400, teamId: "team-thrift-tribe" },
  { id: "p08", name: "Preethi B K", campus: "Christ University", hustle: "freelance tech", earnings: 19100, teamId: "team-tech-tribe" },
  { id: "p09", name: "Arjun Mehta", campus: "PES University", hustle: "web development", earnings: 17800, teamId: "team-code-crafters" },
  { id: "p10", name: "Kavya Nair", campus: "RV College of Engineering", hustle: "tutoring", earnings: 16500, teamId: "team-tutor-titans" },
  { id: "p11", name: "Rohan Desai", campus: "Christ University", hustle: "freelance tech", earnings: 15200, teamId: "team-tech-tribe" },
  { id: "p12", name: "Ananya Sharma", campus: "IIT Hyderabad", hustle: "tutoring", earnings: 13900 },
  { id: "p13", name: "Vikram Iyer", campus: "PES University", hustle: "web development", earnings: 12600, teamId: "team-code-crafters" },
  { id: "p14", name: "Divya Reddy", campus: "BITS Pilani", hustle: "reels & videography", earnings: 11300, teamId: "team-reel-riders" },
  { id: "p15", name: "Aarav Patel", campus: "SRM Institute", hustle: "consulting", earnings: 9900, teamId: "team-biz-blazers" },
  { id: "p16", name: "Sneha Kapoor", campus: "BITS Pilani", hustle: "reels & videography", earnings: 8600, teamId: "team-reel-riders" },
  { id: "p17", name: "Karthik Rao", campus: "VIT Vellore", hustle: "consulting", earnings: 7300, teamId: "team-campus-consult" },
  { id: "p18", name: "Meera Joshi", campus: "Manipal Institute of Technology", hustle: "food stalls", earnings: 6100, teamId: "team-kitchen-kings" },
  { id: "p19", name: "Harsh Verma", campus: "VIT Vellore", hustle: "food stalls", earnings: 5200, teamId: "team-campus-consult" },
  { id: "p20", name: "Ishita Gupta", campus: "SRM Institute", hustle: "thrift reselling", earnings: 4300, teamId: "team-campus-consult" },
  { id: "p21", name: "Naveen Pillai", campus: "Christ University", hustle: "freelance tech", earnings: 3500, teamId: "team-tech-tribe" },
  { id: "p22", name: "Lakshmi Bhat", campus: "IIT Hyderabad", hustle: "thrift reselling", earnings: 2900, teamId: "team-thrift-tribe" },
  { id: "p23", name: "Ryan D'Souza", campus: "VIT Vellore", hustle: "homemade products", earnings: 1500, teamId: "team-campus-consult" },
  { id: "p24", name: "Zara Khan", campus: "SRM Institute", hustle: "food stalls", earnings: 620, teamId: "team-startup-squad" },
];

export const TEAMS: Team[] = [
  { id: "team-code-crafters", name: "Code Crafters", memberIds: ["p02", "p09", "p13"], campus: "PES University", hustle: "web development" },
  { id: "team-tutor-titans", name: "Tutor Titans", memberIds: ["p01", "p10"], campus: "RV College of Engineering", hustle: "tutoring" },
  { id: "team-reel-riders", name: "Reel Riders", memberIds: ["p04", "p14", "p16"], campus: "BITS Pilani", hustle: "reels & videography" },
  { id: "team-tech-tribe", name: "Tech Tribe", memberIds: ["p08", "p11", "p21"], campus: "Christ University", hustle: "freelance tech" },
  { id: "team-biz-blazers", name: "Biz Blazers", memberIds: ["p05", "p15"], campus: "SRM Institute", hustle: "consulting" },
  { id: "team-kitchen-kings", name: "Kitchen Kings", memberIds: ["p06", "p18"], campus: "Manipal Institute of Technology", hustle: "food stalls" },
  { id: "team-eco-essentials", name: "Eco Essentials", memberIds: ["p03"], campus: "VIT Vellore", hustle: "homemade products" },
  { id: "team-thrift-tribe", name: "Thrift Tribe", memberIds: ["p07", "p22"], campus: "IIT Hyderabad", hustle: "thrift reselling" },
  { id: "team-campus-consult", name: "Campus Consult", memberIds: ["p17", "p19", "p20", "p23"], campus: "VIT Vellore", hustle: "consulting" },
  { id: "team-startup-squad", name: "Startup Squad", memberIds: ["p24"], campus: "SRM Institute", hustle: "food stalls" },
];

export const CAMPUSES: CampusAggregate[] = [
  { id: "campus-rv", name: "RV College of Engineering", city: "Bengaluru", memberCount: 2 },
  { id: "campus-pes", name: "PES University", city: "Bengaluru", memberCount: 3 },
  { id: "campus-vit", name: "VIT Vellore", city: "Vellore", memberCount: 4 },
  { id: "campus-bits", name: "BITS Pilani", city: "Pilani", memberCount: 3 },
  { id: "campus-srm", name: "SRM Institute", city: "Chennai", memberCount: 4 },
  { id: "campus-manipal", name: "Manipal Institute of Technology", city: "Manipal", memberCount: 2 },
  { id: "campus-iith", name: "IIT Hyderabad", city: "Hyderabad", memberCount: 3 },
  { id: "campus-christ", name: "Christ University", city: "Bengaluru", memberCount: 3 },
];

export const VERIFICATION_TICKER: VerificationTicker[] = [
  { id: "vt01", text: "Pavani's tutoring invoices verified — ₹28,400 confirmed" },
  { id: "vt02", text: "Code Crafters team payout reviewed and approved" },
  { id: "vt03", text: "Santhosh submitted 3 new web dev client receipts" },
  { id: "vt04", text: "Reel Riders crossed ₹44K combined — verification complete" },
  { id: "vt05", text: "Preksha's food stall UPI records matched for Week 3" },
  { id: "vt06", text: "Wave 01 Day 18 audit: 22 of 24 participants verified" },
];