const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.fax_number === "string" && body.fax_number.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const venue = String(body.venue ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }

  if (!emailPattern.test(email) || name.length > 200 || venue.length > 200 || email.length > 320 || message.length > 5000) {
    return Response.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json({ error: "Something went wrong. Please email us instead." }, { status: 500 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@bevv.co.uk";
  const from = process.env.CONTACT_FROM_EMAIL ?? "BEVV website <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New enquiry from ${name}${venue ? ` (${venue})` : ""}`,
      text: `Name: ${name}\nVenue: ${venue || "-"}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Venue:</strong> ${escapeHtml(venue) || "-"}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend error:", response.status, await response.text());
    return Response.json({ error: "Something went wrong. Please email us instead." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
