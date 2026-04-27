import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/util/prisma";
import jwt from "jsonwebtoken";
import { redis } from "@/util/redis";
import { Client } from "@upstash/qstash";

export async function POST(req: NextRequest) {
  try {
    const { password, email } = await req.json();
    const access_token = req.cookies.get("access_token")?.value;

    if (!access_token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!password || !email) {
      return NextResponse.json(
        { error: "Email and Password is required" },
        { status: 400 },
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 },
      );
    }

    const decoded = jwt.verify(
      access_token,
      process.env.JWT_SECRET as string,
    ) as { email: string };

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const token = jwt.sign(
      { email, id: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "10m",
      },
    );

    await redis.set(
      `changeEmail:${token}`,
      JSON.stringify({
        id: user.id,
        email,
      }),
      "EX",
      600,
    );

    const link = `https://mock-ai-sandy-seven.vercel.app/email-verify?token=${token}`;

    const client = new Client({
      token: `${process.env.QSTASH_TOKEN}`,
    });

    await client.publish({
      url: "https://mock-ai-sandy-seven.vercel.app/api/v1/auth/email-worker",
      body: JSON.stringify({
        email,
        link,
      }),
    });

    return NextResponse.json(
      { message: "Verification link sent" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
