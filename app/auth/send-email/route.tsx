import WelcomeEmails from "@/emails/WelcomeEmails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "david@gmail.com",
    subject: "...",
    react: <WelcomeEmails name="David" />,
  });

  return NextResponse.json({});
}
