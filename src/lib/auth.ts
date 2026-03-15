import { cookies } from "next/headers";
import { createHash, randomBytes } from "crypto";
import pool from "./db";

const SESSION_COOKIE = "wk_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export function generateSessionToken(): string {
  return randomBytes(32).toString("hex");
}

export async function createSession(userId: number): Promise<string> {
  const token = generateSessionToken();
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000);
  await pool.query(
    `INSERT INTO admin_sessions (token, user_id, expires_at) VALUES (?, ?, ?)`,
    [token, userId, expiresAt]
  );
  return token;
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function getSession(): Promise<{ userId: number; username: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const [rows] = await pool.query(
      `SELECT s.user_id, u.username
       FROM admin_sessions s
       JOIN admin_users u ON u.id = s.user_id
       WHERE s.token = ? AND s.expires_at > NOW()`,
      [token]
    );
    const results = rows as { user_id: number; username: string }[];
    if (results.length === 0) return null;
    return { userId: results[0].user_id, username: results[0].username };
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    try {
      await pool.query("DELETE FROM admin_sessions WHERE token = ?", [token]);
    } catch { /* ignore */ }
  }
  cookieStore.delete(SESSION_COOKIE);
}

export async function verifyLogin(
  username: string,
  password: string
): Promise<{ id: number; username: string } | null> {
  try {
    const [rows] = await pool.query(
      "SELECT id, username, password_hash FROM admin_users WHERE username = ?",
      [username]
    );
    const users = rows as { id: number; username: string; password_hash: string }[];
    if (users.length === 0) return null;
    const user = users[0];
    if (user.password_hash !== hashPassword(password)) return null;
    return { id: user.id, username: user.username };
  } catch {
    return null;
  }
}
