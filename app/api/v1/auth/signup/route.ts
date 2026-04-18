import { sendEmailJob } from "@/util/qstash";
import { createVerificationToken } from "@/util/token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Data not found" }, { status: 400 });
    }

    const token = await createVerificationToken(email);

    const link = `https://mock-ai-sandy-seven.vercel.app/verify?token=${token}`;

    await sendEmailJob(email, link);

    return NextResponse.json(
      { message: "Verification link send" },
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
