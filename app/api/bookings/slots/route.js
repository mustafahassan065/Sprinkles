// app/api/bookings/slots/route.js
import { NextResponse } from 'next/server';
import { readBookings } from '@/lib/bookingsDb';
import { readBlocked } from '@/lib/blockedDb';

export async function GET() {
  try {
    const [bookings, { blocked }] = await Promise.all([
      readBookings(),
      readBlocked(),
    ]);

    const bookedSlots = { ...(blocked || {}) };

    bookings.forEach(b => {
      if (b.date_obj && b.slot && b.status !== 'cancelled') {
        const d = new Date(b.date_obj);
        const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${b.slot}`;
        bookedSlots[key] = true;
      }
    });

    return NextResponse.json({ booked: bookedSlots });
  } catch (err) {
    console.error('Slots error:', err);
    return NextResponse.json({ booked: {} });
  }
}
