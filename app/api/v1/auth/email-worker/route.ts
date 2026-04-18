import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/util/email";

export async function POST(req: NextRequest) {
  let body;

  try {
    body = await req.json();
  } catch (err) {
    console.error("Invalid JSON body");
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, link } = body;

  if (!email || !link) {
    return NextResponse.json(
      { error: "Missing email or link" },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html: `<a href="${link}">Verify</a>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
