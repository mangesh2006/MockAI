import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/util/redis";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 400 });
  }

  const email = await redis.get(`verify:${token}`);

  if (!email) {
    return NextResponse.json({ error: "Invalid or expired" }, { status: 400 });
  }

  await redis.del(`verify:${token}`);

  return NextResponse.json({ message: "Verified ✅" });
}
