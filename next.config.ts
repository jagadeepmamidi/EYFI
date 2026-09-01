import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 auto-generates AGENTS.md/CLAUDE.md on dev/build; disable to keep
  // the repository clean and avoid committing generated agent-guidance files.
  agentRules: false,
};

export default nextConfig;
