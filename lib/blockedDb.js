// lib/blockedDb.js
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'blocked.json');

async function ensureDir() {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
}

export async function readBlocked() {
  try {
    await ensureDir();
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { blocked: {}, blockDays: 3 };
  }
}

export async function writeBlocked(data) {
  await ensureDir();
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
