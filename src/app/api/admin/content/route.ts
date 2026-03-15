import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getContent, saveSection, DEFAULTS } from "@/lib/content";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { section, data } = body;

    const validSections = Object.keys(DEFAULTS);
    if (!section || !validSections.includes(section)) {
      return NextResponse.json(
        { error: `Invalid section. Valid: ${validSections.join(", ")}` },
        { status: 400 }
      );
    }

    await saveSection(section, data);
    return NextResponse.json({ success: true, section });
  } catch (error) {
    return NextResponse.json(
      { error: "Save failed", details: String(error) },
      { status: 500 }
    );
  }
}