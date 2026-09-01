# EYFI — Eyes For Insight

Project by **jagadeep**.

## About

EYFI turns raw signals into clear, actionable insight. This repository holds the
EYFI web application: a [Next.js](https://nextjs.org) (App Router) app written in
TypeScript and styled with Tailwind CSS.

The landing page includes a working end-to-end waitlist flow: the client posts an
email to the `/api/waitlist` route, which validates it and returns a confirmation
with the current signup count.

## Tech stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4
- ESLint

## Getting started

Install dependencies and start the dev server:

```bash
npm ci        # or: npm install
npm run dev   # serves on http://localhost:3000 (binds 0.0.0.0)
```

Open [http://localhost:3000](http://localhost:3000) and join the waitlist to see
the full client → API → response flow.

## Useful commands

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the development server (hot reload)    |
| `npm run build` | Create a production build                    |
| `npm start`     | Run the production build                     |
| `npm run lint`  | Run ESLint                                   |

## Author

**jagadeep**
