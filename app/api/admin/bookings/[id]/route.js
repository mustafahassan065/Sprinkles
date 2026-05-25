// app/api/admin/bookings/[id]/route.js
import { NextResponse } from 'next/server';
import { updateBookingStatus } from '@/lib/bookingsDb';

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();
    await updateBookingStatus(id, status);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Update booking error:', err);
    return NextResponse.json({ error: 'Update failed.' }, { status: 500 });
  }
}
