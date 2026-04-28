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
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f7">
    <tr>
      <td align="center" style="padding:40px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="max-width:600px; border:1px solid #e5e7eb;">
          <tr>
            <td align="center" bgcolor="#2563eb" style="padding:25px;">
              <font face="Arial, sans-serif" size="6" color="#ffffff">
                <b>Verify Your Email</b>
              </font>
            </td>
          </tr>
          <tr>
            <td style="padding:35px 30px; font-family:Arial, sans-serif; color:#333333; font-size:16px; line-height:24px;">
              <p style="margin:0 0 20px 0;">Hello,</p>
              <p style="margin:0 0 25px 0;">
                Thank you for signing up. Please verify your email address by clicking the button below.
              </p>
              <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:25px auto;">
                <tr>
                  <td align="center" bgcolor="#2563eb" style="padding:12px 24px;">
                    <a href="${link}" style="color:#ffffff; text-decoration:none; font-family:Arial, sans-serif; font-size:16px;">
                      <b>Verify Email</b>
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:25px 0 10px 0; font-size:14px; color:#666666;">
                If the button doesn&apos;t work, copy this link:
              </p>
              <p style="margin:0; font-size:14px; color:#2563eb; word-break:break-all;">
                ${link}
              </p>
              <p style="margin:30px 0 0 0; font-size:14px; color:#888888;">
                If you didn&apos;t create an account, ignore this email.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#f9fafb" style="padding:18px; font-family:Arial, sans-serif; font-size:12px; color:#999999;">
              &copy; 2026 MockAI. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
