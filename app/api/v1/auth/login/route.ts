import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/util/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password is required" },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 },
      );
    }

    const refresh_token = jwt.sign(
      { id: user.id, email },
      process.env.JWT_REFRESH_SECRET!,
      {
        expiresIn: "7d",
      },
    );

    const access_token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 },
    );

    response.cookies.set("refresh_token", refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    response.cookies.set("access_token", access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15,
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
