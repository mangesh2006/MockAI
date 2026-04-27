import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/util/email";

export async function POST(req: NextRequest) {
  try {
    const { email, link } = await req.json();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email",
      html: `
        <h2>Verify Your Email</h2>
        <p>Click the link below to verify:</p>
        <a href="${link}">Verify Account</a>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 },
    );
  }
}
