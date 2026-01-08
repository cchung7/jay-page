import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return NextResponse.json(
        { error: "SMTP credentials missing on server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    // Verify connection & credentials
    await transporter.verify();

    await transporter.sendMail({
      from: `"Jay Portfolio" <${user}>`,
      to: "chung_chul@yahoo.com",
      replyTo: { name, address: email },
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
