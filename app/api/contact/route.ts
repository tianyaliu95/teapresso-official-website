import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where enquiries are delivered. These addresses stay on the server: no page shows them.
// Franchise enquiries go to one inbox, everything else to the other.
const GENERAL_INBOX = process.env.CONTACT_INBOX_GENERAL ?? "info@tea-presso.com";
const FRANCHISE_INBOX = process.env.CONTACT_INBOX_FRANCHISE ?? "alex@tea-presso.com";

const ENQUIRY_TYPES: Record<string, string> = {
  general: "General enquiry",
  press: "Press & media",
  events: "Events",
  feedback: "Feedback",
  franchise: "Franchise opportunity",
};

// Fields either form may send, in the order they are listed in the email.
const OPTIONAL_FIELDS: [key: string, label: string][] = [
  ["shop", "Shop"],
  ["phone", "Phone"],
  ["area", "City or area"],
  ["funds", "Funds available"],
];

const MAX_LENGTH = { short: 200, message: 5000 };

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = text(body.name, MAX_LENGTH.short);
  const email = text(body.email, MAX_LENGTH.short);
  const message = text(body.message, MAX_LENGTH.message);
  const requested = text(body.enquiryType, MAX_LENGTH.short);
  const enquiryType = requested in ENQUIRY_TYPES ? requested : "general";

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const lines = [`Name: ${name}`, `Email: ${email}`, `Enquiry type: ${ENQUIRY_TYPES[enquiryType]}`];
  for (const [key, label] of OPTIONAL_FIELDS) {
    const value = text(body[key], MAX_LENGTH.short);
    if (value) lines.push(`${label}: ${value}`);
  }
  lines.push(`Sent from: ${body.form === "franchise" ? "Franchising page" : "Contact page"}`, "", "Message:", message);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_DOMAIN}>`,
      to: enquiryType === "franchise" ? FRANCHISE_INBOX : GENERAL_INBOX,
      subject: `[${enquiryType.toUpperCase()}] Contact Form from ${name}`,
      text: lines.join("\n"),
      replyTo: email,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
