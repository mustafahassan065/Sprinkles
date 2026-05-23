// app/api/bookings/slots/route.js
import { NextResponse } from 'next/server';
import { readBookings } from '@/lib/bookingsDb';
import { readBlocked } from '@/lib/blockedDb';

export async function GET() {
  try {
    const bookings = await readBookings();
    const { blocked } = await readBlocked();

    // Convert bookings to slot keys
    const bookedSlots = {};
    bookings.forEach(b => {
      if (b.dateObj && b.slot && b.status !== 'cancelled') {
        const d = new Date(b.dateObj);
        const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${b.slot}`;
        bookedSlots[key] = true;
      }
    });

    // Merge manual blocked slots
    Object.keys(blocked || {}).forEach(k => { bookedSlots[k] = true; });

    return NextResponse.json({ booked: bookedSlots });
  } catch {
    return NextResponse.json({ booked: {} });
  }
}
