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

// Only the trg_notify_contact_submission trigger should ever reach this
// function - it authenticates with the service_role JWT Supabase injects
// into every edge function (the same key the trigger reads from Vault).
// Without this check, anyone holding the public anon key could POST a
// forged record here and trigger a real Resend send to the studio inbox.
function isAuthorizedCaller(req: Request): boolean {
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!serviceRoleKey) return false;

  const expected = `Bearer ${serviceRoleKey}`;
  const actual = req.headers.get("Authorization") ?? "";
  if (actual.length !== expected.length) return false;

  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ actual.charCodeAt(i);
  }
  return mismatch === 0;
}

Deno.serve(async (req: Request) => {
  if (!isAuthorizedCaller(req)) {
    console.warn("[notify-contact-submission] rejected call with invalid Authorization header");
    return new Response(JSON.stringify({ ok: false, error: "unauthorized" }), { status: 401 });
  }

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

    let resendId: string | undefined;
    try {
      resendId = JSON.parse(bodyText)?.id;
    } catch {
      // bodyText wasn't JSON - fall through and log the raw text instead
    }
    console.log(`[notify-contact-submission] email sent, Resend id: ${resendId ?? "unknown"} (raw: ${bodyText})`);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("[notify-contact-submission] error sending alert:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 200 });
  }
});
