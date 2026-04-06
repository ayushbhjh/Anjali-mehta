import { NextResponse } from "next/server";

type MentorshipPayload = {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  goals?: string;
  timeline?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MentorshipPayload;

    const payload = {
      name: body.name?.trim() || "",
      email: body.email?.trim() || "",
      phone: body.phone?.trim() || "",
      category: body.category?.trim() || "",
      goals: body.goals?.trim() || "",
      timeline: body.timeline?.trim() || ""
    };

    if (!payload.name || !payload.email || !payload.goals) {
      return NextResponse.json({ message: "Please fill name, email, and goals." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const leadToEmail = process.env.LEAD_TO_EMAIL;

    if (!resendApiKey || !leadToEmail) {
      return NextResponse.json(
        {
          message:
            "Submission received, but email delivery is not configured yet. Add RESEND_API_KEY and LEAD_TO_EMAIL in Vercel env."
        },
        { status: 200 }
      );
    }

    const subject = `New Mentorship Lead: ${payload.name} (${payload.category || "General"})`;
    const html = `
      <h2>New Mentorship Request</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "Not provided"}</p>
      <p><strong>Track:</strong> ${payload.category || "Not selected"}</p>
      <p><strong>Timeline:</strong> ${payload.timeline || "Not provided"}</p>
      <p><strong>Goals:</strong></p>
      <p>${payload.goals.replace(/\n/g, "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Anjali Mentorship <onboarding@resend.dev>",
        to: [leadToEmail],
        reply_to: payload.email,
        subject,
        html
      })
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        { message: `Submission saved but email failed. Resend response: ${resendError}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Thank you. Your request has been submitted successfully." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
