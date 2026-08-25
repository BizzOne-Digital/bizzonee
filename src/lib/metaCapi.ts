import { createHash } from "crypto";

const GRAPH_VERSION = "v21.0";

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface LeadEventInput {
  email?: string;
  phone?: string;
  eventName?: string; // defaults to "Lead"
  sourceUrl: string;
  eventId?: string; // dedupe with client-side pixel if it ever fires the same event
}

/**
 * Sends a server-side conversion event to Meta's Conversions API.
 * Never call this from client code — the access token must stay server-only.
 * Fails silently (logs only) so a Meta outage never breaks form submissions.
 */
export async function sendMetaLeadEvent({ email, phone, eventName = "Lead", sourceUrl, eventId }: LeadEventInput): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const userData: Record<string, string[]> = {};
  if (email) userData.em = [sha256(email)];
  if (phone) userData.ph = [sha256(phone.replace(/[^\d]/g, ""))];

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: sourceUrl,
        user_data: userData,
      },
    ],
  };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.text().catch(() => "");
      console.error("Meta CAPI error:", res.status, err);
    }
  } catch (err) {
    console.error("Meta CAPI request failed:", err);
  }
}
