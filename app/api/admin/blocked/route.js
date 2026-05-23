// app/api/admin/blocked/route.js
import { NextResponse } from 'next/server';
import { readBlocked, writeBlocked } from '@/lib/blockedDb';

export async function GET() {
  try {
    const data = await readBlocked();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ blocked: {}, blockDays: 3 });
  }
}

export async function POST(request) {
  try {
    const { blocked, blockDays } = await request.json();
    await writeBlocked({ blocked: blocked || {}, blockDays: blockDays ?? 3 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Update failed.' }, { status: 500 });
  }
}
