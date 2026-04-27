import { prisma } from "@/util/prisma";
import { redis } from "@/util/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "No token" }, { status: 400 });
    }

    const data = await redis.get(`changeEmail:${token}`);

    if (!data) {
      return NextResponse.json(
        { error: "Expired or invalid token" },
        { status: 400 },
      );
    }

    const parsed = JSON.parse(data);

    await prisma.user.update({
      where: { id: parsed.id },
      data: { email: parsed.email },
    });

    await redis.del(`changeEmail:${token}`);

    const response = NextResponse.json(
      { message: "Email verified", success: true },
      { status: 200 },
    );

    response.cookies.set("access_token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    response.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
