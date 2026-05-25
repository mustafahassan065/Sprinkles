// app/api/bookings/route.js
import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/bookingsDb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, notes,
            date, dateObj, slot, slotLabel } = body;

    if (!name || !phone || !address || !service || !date || !slot) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    const booking = await createBooking({
      name, phone, email, address, service, notes,
      date, date_obj: dateObj, slot, slot_label: slotLabel,
    });

    return NextResponse.json({ success: true, booking }, { status: 200 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
