import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/util/redis";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 400 });
  }

  const email = await redis.get(`verify:${token}`);

  if (!email) {
    return NextResponse.json({ error: "Invalid or expired" }, { status: 400 });
  }

  const data = await redis.get(`User:${token}`);

  if (!data) {
    return NextResponse.json(
      { error: "Expired or invalid token" },
      { status: 400 },
    );
  }

  const user = JSON.parse(data);

  await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
    },
  });

  await redis.del(`verify:${token}`);

  return NextResponse.json({ message: "Verified ✅" });
}
