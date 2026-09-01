import { NextResponse } from "next/server";

export const runtime = "nodejs";

// In-memory store. The platform filesystem is ephemeral, so this is intentionally
// non-durable and resets on restart — swap for a database before production use.
const signups = new Set<string>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return NextResponse.json({ count: signups.size });
}

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  const normalized = email.trim().toLowerCase();
  const alreadyJoined = signups.has(normalized);
  signups.add(normalized);

  return NextResponse.json({
    ok: true,
    alreadyJoined,
    count: signups.size,
    message: alreadyJoined
      ? "You're already on the list — we'll be in touch."
      : "You're on the list. Welcome to EYFI.",
  });
}
