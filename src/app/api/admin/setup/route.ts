import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const setupKey = process.env.ADMIN_SETUP_KEY || "wikolabs-setup-2026";

  try {
    const body = await request.json();
    if (body.setup_key !== setupKey) {
      return NextResponse.json({ error: "Invalid setup key" }, { status: 403 });
    }

    const conn = await pool.getConnection();

    try {
      // Create tables
      await conn.query(`
        CREATE TABLE IF NOT EXISTS site_content (
          id INT AUTO_INCREMENT PRIMARY KEY,
          section_key VARCHAR(50) NOT NULL UNIQUE,
          content_json LONGTEXT NOT NULL,
          updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_section_key (section_key)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `);

      await conn.query(`
        CREATE TABLE IF NOT EXISTS admin_users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(100) NOT NULL UNIQUE,
          password_hash VARCHAR(255) NOT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `);

      await conn.query(`
        CREATE TABLE IF NOT EXISTS admin_sessions (
          id INT AUTO_INCREMENT PRIMARY KEY,
          token VARCHAR(255) NOT NULL UNIQUE,
          user_id INT NOT NULL,
          expires_at DATETIME NOT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_token (token),
          INDEX idx_expires (expires_at),
          FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `);

      // Create default admin user if none exists
      const username = body.username || "admin";
      const password = body.password || "admin123";

      const [existing] = await conn.query(
        "SELECT id FROM admin_users WHERE username = ?",
        [username]
      );

      if ((existing as unknown[]).length === 0) {
        await conn.query(
          "INSERT INTO admin_users (username, password_hash) VALUES (?, ?)",
          [username, hashPassword(password)]
        );
      }

      return NextResponse.json({
        success: true,
        message: "Database setup complete. Tables created and admin user ready.",
        admin: { username, note: "Change your password after first login." },
      });
    } finally {
      conn.release();
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Setup failed", details: String(error) },
      { status: 500 }
    );
  }
}