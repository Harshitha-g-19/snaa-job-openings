const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { applicant_name, applicant_email, job_title, status } = await req.json();

    if (!applicant_email || !status) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: corsHeaders,
      });
    }

    const isShortlisted = status === "shortlisted";
    const isHired = status === "hired";

    if (!isShortlisted && !isHired) {
      return new Response(JSON.stringify({ skipped: true }), {
        status: 200, headers: corsHeaders,
      });
    }

    const subject = isHired
      ? `Congratulations! You've been Selected – SNAA Business Processing Center`
      : `You've been Shortlisted! – SNAA Business Processing Center`;

    const statusColor = isHired ? "#10b981" : "#1a2e5a";
    const statusLabel = isHired ? "SELECTED" : "SHORTLISTED";

    const bodyMessage = isHired
      ? `<p>We are thrilled to inform you that you have been <strong>selected</strong> for the position of <strong>${job_title || "the role"}</strong> at SNAA Business Processing Center.</p>
         <p>Our HR team will reach out to you shortly with onboarding details.</p>`
      : `<p>We are pleased to inform you that your application for <strong>${job_title || "the role"}</strong> has been <strong>shortlisted</strong>.</p>
         <p>Our HR team will contact you soon for next steps.</p>`;

    const html = `<!DOCTYPE html>
    <html><body style="margin:0;padding:0;background:#f4f4f4;font-family:sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0">
            <tr><td style="background:${statusColor};padding:28px 32px;border-radius:8px 8px 0 0;">
              <h1 style="color:#fff;margin:0;font-size:22px;">SNAA Business Processing Center</h1>
              <p style="color:#e2e8f0;margin:6px 0 0;font-size:13px;">HR Department · Recruitment Update</p>
            </td></tr>
            <tr><td style="background:#fff;padding:28px 32px 0 32px;">
              <div style="display:inline-block;background:${statusColor};color:#fff;font-size:12px;font-weight:700;padding:6px 16px;border-radius:20px;">✓ ${statusLabel}</div>
            </td></tr>
            <tr><td style="background:#fff;padding:20px 32px 28px 32px;">
              <h2 style="color:#1a2e5a;font-size:18px;">Dear ${applicant_name || "Applicant"},</h2>
              ${bodyMessage}
            </td></tr>
            <tr><td style="background:#f8fafc;padding:20px 32px;border-top:1px solid #e2e8f0;border-radius:0 0 8px 8px;">
              <p style="color:#6b7280;font-size:12px;">© ${new Date().getFullYear()} SNAA Business Processing Center</p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`;

    // Use Resend API (works reliably in Supabase Edge Functions)
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SNAA HR <onboarding@resend.dev>", // Change after domain verified
        to: [applicant_email],
        subject,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      throw new Error(resendData.message || "Resend API error");
    }

    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200, headers: corsHeaders,
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500, headers: corsHeaders,
    });
  }
});