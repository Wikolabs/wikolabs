import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "wikolabs",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "wikolabs_db",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export default pool;
