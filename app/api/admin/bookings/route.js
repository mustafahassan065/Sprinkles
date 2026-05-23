// app/api/admin/bookings/route.js
import { NextResponse } from 'next/server';
import { readBookings } from '@/lib/bookingsDb';

export async function GET() {
  try {
    const bookings = await readBookings();
    return NextResponse.json({ bookings });
  } catch {
    return NextResponse.json({ bookings: [] });
  }
}
