# EYFI Wave 01 Leaderboard

**Assignment submission by jagadeep**

Interactive leaderboard design for [EYFI Challenge](https://eyfichallenge.com/) — Wave 01, ranked by verified income.

## Live demo

https://eyfi-wave01.vercel.app

## Features

- On-brand EYFI chrome (marquee, nav, footer)
- Day 18/30 live wave progress
- People · Teams · Campuses tabs
- Top-3 podium with projected prize amounts
- Search + hustle filter chips
- Mock data using real participant names from the EYFI site

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/              # Next.js routes
  components/
    eyfi/           # Site chrome (marquee, header, footer)
    leaderboard/    # Leaderboard UI
  data/             # Mock leaderboard data
  lib/              # Prize helpers & utilities
public/images/      # EYFI logo
```

## Author

**jagadeep**