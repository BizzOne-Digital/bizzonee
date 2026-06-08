import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const d = await req.json();
    const business = String(d.business || "").trim();
    const name = String(d.name || "").trim();
    const email = String(d.email || "").trim();
    const phone = String(d.phone || "").trim();

    if (!business || !name || !email || !phone) {
      return NextResponse.json({ error: "Please fill in your business, name, email and phone." }, { status: 400 });
    }

    const TOKEN = process.env.CLICKUP_TOKEN?.trim();
    const LIST = process.env.CLICKUP_LIST_ID?.trim();
    if (!TOKEN || !LIST) {
      console.error("ENV CHECK — CLICKUP_TOKEN:", TOKEN ? `${TOKEN.slice(0, 8)}...` : "MISSING", "| CLICKUP_LIST_ID:", LIST || "MISSING");
      return NextResponse.json({ error: "Onboarding is not configured on the server yet." }, { status: 500 });
    }
    console.log("ENV OK — token:", TOKEN.slice(0, 8) + "...", "| list:", LIST);

    const prio = String(d.priority || "").toLowerCase();
    const priority = prio.startsWith("urgent") ? 1 : prio.startsWith("high") ? 2 : prio.startsWith("low") ? 4 : 3;
    const due = d.launch ? Date.parse(String(d.launch)) : NaN;

    const v = (x: unknown) => (x && String(x).trim() ? String(x) : "—");
    const list = (a: unknown) => (Array.isArray(a) && a.length ? a.join(", ") : "None");

    const desc =
`## 📋 Contact & Project
**Business:** ${v(business)}
**Contact:** ${v(name)} | ${v(email)} | ${v(phone)}
**Business Address:** ${v(d.address)}
**Current Website:** ${v(d.site)}
**Social:** ${v(d.social)}
**Package:** ${v(d.pkg)}
**Priority:** ${v(d.priority)}
**Expected Timeline:** ${v(d.launch)}
**Goal:** ${v(d.goal)}
**Audience:** ${v(d.audience)}
**Difference:** ${v(d.usp)}

## 🎨 Brand & Design
**Logo:** ${v(d.logo)}
**Brand Colours:** ${v(d.colors)}
**Design Style:** ${v(d.style)}
**Inspiration:** ${v(d.inspo)}

## 📝 Content
**Pages:** ${list(d.pages)}
**Headline:** ${v(d.headline)}
**About:** ${v(d.about)}
**Services / Products:** ${v(d.services)}
**Display Pricing:** ${v(d.pricing)}

## 🔧 Technical
**Domain:** ${v(d.domain)}
**Hosting:** ${v(d.hosting)}
**Features:** ${list(d.features)}
**Notes:** ${v(d.notes)}

---
*Submitted via the BizzOne Digital website onboarding form*`;

    const body: Record<string, unknown> = {
      name: `${business} — ${name} | Website Onboarding`,
      markdown_description: desc,
      priority,
      status: process.env.CLICKUP_STATUS || "not started",
      tags: ["website", "onboarding"],
    };
    if (!Number.isNaN(due)) body.due_date = due;

    const res = await fetch(`https://api.clickup.com/api/v2/list/${LIST}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: TOKEN },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));

    if (res.ok && data.id) {
      return NextResponse.json({ ok: true, url: data.url });
    }
    console.error("ClickUp error:", res.status, JSON.stringify(data));
    return NextResponse.json({ error: data.err || data.HNAP_ERROR || data.error || `ClickUp ${res.status}: ${JSON.stringify(data)}` }, { status: 502 });
  } catch (err) {
    console.error("Onboarding error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}