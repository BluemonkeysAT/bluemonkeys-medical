import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  service: string;
  specialty: string;
  city: string;
  challenge: string;
  name: string;
  phone: string;
  email: string;
  privacy: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();

    // Basic validation
    if (!data.name || !data.phone || !data.email || !data.privacy) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    // TODO: Integrate Resend for email delivery
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    // For now: log to console (dev) — replace with Resend in production
    console.log("[Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // TODO: Also send confirmation email to the lead
    // TODO: Optionally push to CRM (e.g., HubSpot, Pipedrive)

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json(
      { error: "Interner Fehler. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
