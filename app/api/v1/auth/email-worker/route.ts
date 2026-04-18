import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/util/email";

export async function POST(req: NextRequest) {
  const { email, link } = await req.json();

  try {
    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html: `
        <h2>Email Verification</h2>
        <p>Click below:</p>
        <a href="${link}">${link}</a>
      `,
    });

    return NextResponse.json({ success: true }, {status: 200});
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
