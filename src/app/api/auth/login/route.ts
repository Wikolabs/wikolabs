import { NextResponse } from "next/server";
import { verifyLogin, createSession, setSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    const user = await verifyLogin(username, password);
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createSession(user.id);
    await setSessionCookie(token);

    return NextResponse.json({ success: true, username: user.username });
  } catch (error) {
    return NextResponse.json({ error: "Login failed", details: String(error) }, { status: 500 });
  }
}