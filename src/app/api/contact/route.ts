import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DEFAULT_SMTP_HOST = "smtp.hostinger.com";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_CONTACT_TO = "chung_chul@yahoo.com";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return NextResponse.json({ ok: true, message: "Contact API is running." });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as ContactRequestBody | null;

    const name = body?.name?.trim() ?? "";
    const email = body?.email?.trim() ?? "";
    const message = body?.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST?.trim() || DEFAULT_SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? DEFAULT_SMTP_PORT);
    const secure = String(process.env.SMTP_SECURE ?? "true") === "true";

    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();
    const to = process.env.CONTACT_TO?.trim() || DEFAULT_CONTACT_TO;

    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] SMTP_HOST:", host);
      console.log("[contact] SMTP_PORT:", port);
      console.log("[contact] SMTP_SECURE:", secure);
      console.log("[contact] SMTP_USER present:", Boolean(user));
      console.log("[contact] SMTP_PASS present:", Boolean(pass));
      console.log("[contact] CONTACT_TO present:", Boolean(to));
    }

    if (!user || !pass) {
      console.error("[contact] Missing SMTP_USER/SMTP_PASS env vars.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Jay Portfolio" <${user}>`,
      to,
      replyTo: { name, address: email },
      subject: `New Contact Form Message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
        "",
      ].join("\n"),
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] sendMail accepted:", info.accepted);
      console.log("[contact] messageId:", info.messageId);
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[contact] error:", err);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}