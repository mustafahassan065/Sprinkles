// lib/db.js
// AUTO-DETECT: SQLite locally, PostgreSQL on VPS
// No configuration needed — just works!

import path from 'path';
import fs from 'fs';

const IS_POSTGRES = !!process.env.DATABASE_URL;

/* ──────────────────────────────────────────
   SQLITE (Local Development)
   File saved at: /data/sprinklers.db
────────────────────────────────────────── */
let _sqliteDb = null;

function getSQLiteDb() {
  if (_sqliteDb) return _sqliteDb;
  const { createClient } = require('@libsql/client');
  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  _sqliteDb = createClient({
    url: `file:${path.join(dataDir, 'sprinklers.db')}`,
  });
  return _sqliteDb;
}

/* ──────────────────────────────────────────
   POSTGRESQL (VPS / Production)
────────────────────────────────────────── */
let _pgPool = null;

function getPgPool() {
  if (_pgPool) return _pgPool;
  const { Pool } = require('pg');
  _pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  return _pgPool;
}

/* ──────────────────────────────────────────
   UNIFIED QUERY FUNCTION
   Use this everywhere — works for both DBs
────────────────────────────────────────── */
export async function query(sql, params = []) {
  if (IS_POSTGRES) {
    const pool = getPgPool();
    const res  = await pool.query(sql, params);
    return res.rows;
  } else {
    const db = getSQLiteDb();
    // Convert PostgreSQL $1,$2 params to SQLite ?
    const sqliteSql = sql.replace(/\$(\d+)/g, '?');
    const res = await db.execute({ sql: sqliteSql, args: params });
    return res.rows;
  }
}

/* ──────────────────────────────────────────
   INIT TABLES (run on first boot)
────────────────────────────────────────── */
export async function initDb() {
  if (IS_POSTGRES) {
    await query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(255) NOT NULL,
        phone       VARCHAR(50)  NOT NULL,
        email       VARCHAR(255),
        address     TEXT,
        service     VARCHAR(255),
        notes       TEXT,
        date        VARCHAR(255),
        date_obj    VARCHAR(255),
        slot        VARCHAR(50),
        slot_label  VARCHAR(100),
        status      VARCHAR(50) DEFAULT 'pending',
        created_at  TIMESTAMP   DEFAULT NOW()
      );
    `);
    await query(`
      CREATE TABLE IF NOT EXISTS settings (
        key   VARCHAR(100) PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);
    await query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id         SERIAL PRIMARY KEY,
        name       VARCHAR(255) NOT NULL,
        phone      VARCHAR(50),
        email      VARCHAR(255),
        address    TEXT,
        service    VARCHAR(255),
        message    TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    await query(`
      INSERT INTO settings (key, value)
      VALUES ('blocked_config', '{"blocked":{},"blockDays":3}')
      ON CONFLICT (key) DO NOTHING;
    `);
  } else {
    // SQLite — different syntax
    const db = getSQLiteDb();
    await db.executeMultiple(`
      CREATE TABLE IF NOT EXISTS bookings (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        name       TEXT NOT NULL,
        phone      TEXT NOT NULL,
        email      TEXT,
        address    TEXT,
        service    TEXT,
        notes      TEXT,
        date       TEXT,
        date_obj   TEXT,
        slot       TEXT,
        slot_label TEXT,
        status     TEXT DEFAULT 'pending',
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS settings (
        key   TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS contact_submissions (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        name       TEXT NOT NULL,
        phone      TEXT,
        email      TEXT,
        address    TEXT,
        service    TEXT,
        message    TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );

      INSERT OR IGNORE INTO settings (key, value)
      VALUES ('blocked_config', '{"blocked":{},"blockDays":3}');
    `);
  }
  console.log(`✅ DB initialized (${IS_POSTGRES ? 'PostgreSQL' : 'SQLite'})`);
}
