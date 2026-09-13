// Fired by a Database Webhook on contact_submissions INSERT. Emails the
// submission details to the studio inbox so a new lead is never missed.
//
// Same Resend-via-fetch pattern as rj-sportz-hub's _shared/alerts.ts (no
// SDK, no domain verification needed via onboarding@resend.dev). Always
// resolves 200 except for a malformed payload, so a delivery hiccup here
// never causes Supabase to retry-storm the webhook or affect the insert
// that already succeeded.

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const ALERT_FROM = "RJ Sportz Website <onboarding@resend.dev>";
const ALERT_TO = "rjsportzofficial1@gmail.com";

Deno.serve(async (req: Request) => {
  let record: Record<string, unknown> | undefined;
  try {
    const payload = await req.json();
    record = payload?.record;
  } catch (err) {
    console.error("[notify-contact-submission] could not parse webhook payload:", err);
    return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), { status: 400 });
  }

  if (!record) {
    return new Response(JSON.stringify({ ok: false, error: "no_record_in_payload" }), { status: 400 });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.warn("[notify-contact-submission] RESEND_API_KEY unset — skipping email");
      return new Response(JSON.stringify({ ok: false, skipped: "no_api_key" }), { status: 200 });
    }

    const fullName = (record.full_name as string) || "Unknown";
    const source = (record.source as string) || "Contact Form";
    const lines = [
      `Name: ${fullName}`,
      `Email: ${record.email ?? "-"}`,
      `Phone: ${record.phone ?? "-"}`,
      `Sport interest: ${record.sport_interest ?? "-"}`,
      `Source: ${source}`,
      `Message: ${record.message ?? "-"}`,
      `Submitted (UTC): ${record.created_at ?? "-"}`,
    ];

    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ALERT_FROM,
        to: [ALERT_TO],
        subject: `New RJ Sportz inquiry: ${fullName} (${source})`,
        text: lines.join("\n"),
      }),
    });

    const bodyText = await res.text();
    if (!res.ok) {
      console.error(`[notify-contact-submission] Resend responded ${res.status}: ${bodyText}`);
      return new Response(JSON.stringify({ ok: false, status: res.status }), { status: 200 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("[notify-contact-submission] error sending alert:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 200 });
  }
});
