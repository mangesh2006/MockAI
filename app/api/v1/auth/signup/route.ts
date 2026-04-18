import { sendEmailJob } from "@/util/qstash";
import { createVerificationToken } from "@/util/token";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/util/redis";
import bcrypt from "bcrypt";
import { prisma } from "@/util/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Data not found" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const token = await createVerificationToken(email);

    const link = `https://mock-ai-sandy-seven.vercel.app/verify?token=${token}`;

    const hashedpass = await bcrypt.hash(password, 10);

    await redis.set(
      `User:${token}`,
      JSON.stringify({ name, email, password: hashedpass }),
      "EX",
      600,
    );

    await sendEmailJob(email, link);

    return NextResponse.json(
      { message: "Verification link sent" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 },
    );
  }
}
