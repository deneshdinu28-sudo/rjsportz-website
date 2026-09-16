// Fired by an AFTER INSERT trigger on coach_applications. Emails the
// application details to the studio inbox so a new coach applicant is
// never missed.
//
// Sibling of notify-contact-submission - same Resend-via-fetch pattern
// (no SDK, no domain verification needed via onboarding@resend.dev),
// same "always resolve 200 except malformed payload" resilience so a
// delivery hiccup here never causes Supabase to retry-storm the trigger
// or affect the insert that already succeeded. Kept as a separate
// function rather than reusing notify-contact-submission because the
// two tables' columns don't overlap (sport vs sport_interest, plus
// experience/certifications/location/availability/about/resume_url have
// no equivalent on contact_submissions).

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const ALERT_FROM = "RJ Sportz Website <onboarding@resend.dev>";
const ALERT_TO = "rjsportzofficial1@gmail.com";

Deno.serve(async (req: Request) => {
  let record: Record<string, unknown> | undefined;
  try {
    const payload = await req.json();
    record = payload?.record;
  } catch (err) {
    console.error("[notify-coach-application] could not parse webhook payload:", err);
    return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), { status: 400 });
  }

  if (!record) {
    return new Response(JSON.stringify({ ok: false, error: "no_record_in_payload" }), { status: 400 });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.warn("[notify-coach-application] RESEND_API_KEY unset - skipping email");
      return new Response(JSON.stringify({ ok: false, skipped: "no_api_key" }), { status: 200 });
    }

    const fullName = (record.full_name as string) || "Unknown";
    const sport = (record.sport as string) || "-";
    const lines = [
      `Name: ${fullName}`,
      `Email: ${record.email ?? "-"}`,
      `Phone: ${record.phone ?? "-"}`,
      `Primary sport: ${sport}`,
      `Experience: ${record.experience ?? "-"}`,
      `Certifications: ${record.certifications ?? "-"}`,
      `Location: ${record.location ?? "-"}`,
      `Availability: ${record.availability ?? "-"}`,
      `About: ${record.about ?? "-"}`,
      `Resume attached: ${record.resume_url ? "Yes" : "No"}`,
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
        subject: `New RJ Sportz coach application: ${fullName} (${sport})`,
        text: lines.join("\n"),
      }),
    });

    const bodyText = await res.text();
    if (!res.ok) {
      console.error(`[notify-coach-application] Resend responded ${res.status}: ${bodyText}`);
      return new Response(JSON.stringify({ ok: false, status: res.status }), { status: 200 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("[notify-coach-application] error sending alert:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 200 });
  }
});
