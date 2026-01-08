import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true", // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional but helpful: verifies SMTP connection early
    await transporter.verify();

    await transporter.sendMail({
      from: `"Jay Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? "chung_chul@yahoo.com", // hardcoded recipient fallback
      replyTo: { name, address: email },
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
