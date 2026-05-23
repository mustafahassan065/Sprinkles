// app/api/bookings/route.js
// POST — create new booking
import { NextResponse } from 'next/server';
import { readBookings, writeBookings } from '@/lib/bookingsDb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, notes, date, dateObj, slot, slotLabel } = body;

    if (!name || !phone || !address || !service || !date || !slot) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    const bookings = await readBookings();
    const newBooking = {
      id: `booking_${Date.now()}`,
      name, phone, email, address, service, notes,
      date, dateObj, slot, slotLabel,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    await writeBookings(bookings);

    return NextResponse.json({ success: true, booking: newBooking }, { status: 200 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
