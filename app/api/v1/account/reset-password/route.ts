import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/util/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { password, newpassword } = await req.json();
    const token = req.cookies.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 },
      );
    }

    if (!password || !newpassword) {
      return NextResponse.json(
        { error: "Current password and New password is required" },
        { status: 400 },
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
    };

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const hashedpass = await bcrypt.hash(newpassword, 10);

    await prisma.user.update({
      where: { email: decoded.email },
      data: { password: hashedpass },
    });

    return NextResponse.json({ message: "Password updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
