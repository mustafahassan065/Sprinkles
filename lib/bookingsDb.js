// lib/bookingsDb.js
// Simple file-based database using JSON
// In Phase 3 production: replace with PostgreSQL (pg package)
// DATABASE_URL=postgresql://... in .env.local

import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'bookings.json');

async function ensureDir() {
  const dir = path.dirname(DB_PATH);
  await fs.mkdir(dir, { recursive: true });
}

export async function readBookings() {
  try {
    await ensureDir();
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function writeBookings(bookings) {
  await ensureDir();
  await fs.writeFile(DB_PATH, JSON.stringify(bookings, null, 2));
}

/* ── PostgreSQL version (uncomment when ready) ──────────────────────────
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function readBookings() {
  const res = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
  return res.rows;
}

export async function writeBookings(bookings) {
  // Use individual INSERT/UPDATE instead
}
──────────────────────────────────────────────────────────────────────── */
