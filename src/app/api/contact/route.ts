import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Read env
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT ?? 465);
    const secure = String(process.env.SMTP_SECURE ?? "true") === "true";

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    // Dev dagnostics
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] SMTP_HOST:", host);
      console.log("[contact] SMTP_PORT:", port);
      console.log("[contact] SMTP_SECURE:", secure);
      console.log("[contact] SMTP_USER present:", Boolean(user));
      console.log("[contact] SMTP_PASS present:", Boolean(pass));
      console.log("[contact] CONTACT_TO:", process.env.CONTACT_TO ?? "(default)");
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

    // Verify SMTP connection
    await transporter.verify();

    const to = process.env.CONTACT_TO ?? "chung_chul@yahoo.com";

    const info = await transporter.sendMail({
      from: `"Jay Portfolio" <${user}>`,
      to,
      replyTo: { name, address: email },
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    console.log("[contact] sendMail accepted:", info.accepted);
    console.log("[contact] messageId:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[contact] error:", err);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
