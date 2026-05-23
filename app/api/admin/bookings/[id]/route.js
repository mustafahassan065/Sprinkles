// app/api/admin/bookings/[id]/route.js
import { NextResponse } from 'next/server';
import { readBookings, writeBookings } from '@/lib/bookingsDb';

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();
    const bookings = await readBookings();
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    await writeBookings(updated);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Update failed.' }, { status: 500 });
  }
}
