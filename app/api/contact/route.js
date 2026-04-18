// app/api/contact/route.js
// NextJS App Router API route — handles contact form submissions
// Connect to PostgreSQL in Phase 3 when database is added

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, address, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    // ─── TODO Phase 3: Save to PostgreSQL ───────────────────────────────────
    // import { Pool } from 'pg';
    // const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    // await pool.query(
    //   `INSERT INTO contact_submissions (name, email, phone, service, address, message, created_at)
    //    VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
    //   [name, email, phone, service, address, message]
    // );
    // ────────────────────────────────────────────────────────────────────────

    // ─── TODO: Send email notification via Nodemailer or Resend ─────────────
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@sprinklersandlawns.com',
    //   to: 'joe@sprinklersandlawns.com',
    //   subject: `New Service Request from ${name}`,
    //   html: `<p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p>...`
    // });
    // ────────────────────────────────────────────────────────────────────────

    // Log for now (replace with DB/email in production)
    console.log('New contact form submission:', {
      name, email, phone, service, address, message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
