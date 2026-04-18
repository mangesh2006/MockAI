import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const raw = await req.text();

  console.log("RAW BODY:", raw);

  try {
    const parsed = JSON.parse(raw);
    console.log("PARSED:", parsed);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("PARSE ERROR:", err);
    return NextResponse.json({ error: "Invalid JSON", raw }, { status: 400 });
  }
}
