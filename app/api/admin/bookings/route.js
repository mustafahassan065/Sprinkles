// app/api/admin/bookings/route.js
import { NextResponse } from 'next/server';
import { readBookings } from '@/lib/bookingsDb';

export async function GET() {
  try {
    const bookings = await readBookings();
    return NextResponse.json({ bookings });
  } catch (err) {
    console.error('Admin bookings error:', err);
    return NextResponse.json({ bookings: [] });
  }
}
