import { getContent } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import LandingClient from "./LandingClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  let content: SiteContent;
  try {
    content = await getContent();
  } catch {
    // If DB is down, import defaults directly
    const { DEFAULTS } = await import("@/lib/content");
    content = DEFAULTS;
  }

  return <LandingClient content={content} />;
}
