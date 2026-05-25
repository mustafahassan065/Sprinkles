// lib/blockedDb.js
import { query } from './db.js';

const IS_POSTGRES = !!process.env.DATABASE_URL;

export async function readBlocked() {
  try {
    const rows = IS_POSTGRES
      ? await query("SELECT value FROM settings WHERE key='blocked_config' LIMIT 1")
      : await query("SELECT value FROM settings WHERE key='blocked_config' LIMIT 1");

    if (!rows || rows.length === 0) return { blocked: {}, blockDays: 3 };
    return JSON.parse(rows[0].value);
  } catch {
    return { blocked: {}, blockDays: 3 };
  }
}

export async function writeBlocked(data) {
  const json = JSON.stringify(data);
  if (IS_POSTGRES) {
    await query(
      `INSERT INTO settings (key,value) VALUES ('blocked_config',$1)
       ON CONFLICT (key) DO UPDATE SET value=$1`,
      [json]
    );
  } else {
    await query(
      `INSERT OR REPLACE INTO settings (key,value) VALUES ('blocked_config',?)`,
      [json]
    );
  }
}
