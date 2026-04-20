import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const HR_EMAIL = "harshisnaa12@gmail.com";

serve(async (req: Request) => {
  try {
    const payload = await req.json();
    const record = payload.record;

    const { full_name, email, phone, cover_letter, resume_url } = record;

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2e5a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #f5f0e8; margin: 0; font-size: 20px;">New Job Application Received</h1>
          <p style="color: #a0aec0; margin: 4px 0 0;">SNAA Business Processing Center</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 130px;">Applicant</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">${full_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;">Cover Letter</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${cover_letter || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">Resume</td>
              <td style="padding: 10px 0;">
                ${resume_url
                  ? `<a href="${resume_url}" style="background: #1a2e5a; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none;">Download Resume</a>`
                  : "No resume uploaded"}
              </td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #999;">Log in to the HR panel to review and update the application status.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SNAA HR <onboarding@resend.dev>",
        to: [HR_EMAIL],
        subject: `New Application: ${full_name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});