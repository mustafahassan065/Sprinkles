// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const IS_POSTGRES = !!process.env.DATABASE_URL;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, address, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    if (IS_POSTGRES) {
      await query(
        `INSERT INTO contact_submissions (name,email,phone,service,address,message,created_at)
         VALUES ($1,$2,$3,$4,$5,$6,NOW())`,
        [name, email, phone, service, address, message]
      );
    } else {
      await query(
        `INSERT INTO contact_submissions (name,email,phone,service,address,message)
         VALUES (?,?,?,?,?,?)`,
        [name, email, phone, service, address, message]
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
