// lib/bookingsDb.js
import { query } from './db.js';

export async function readBookings() {
  return await query(
    'SELECT * FROM bookings ORDER BY created_at DESC'
  );
}

export async function createBooking(data) {
  const {
    name, phone, email, address, service, notes,
    date, date_obj, slot, slot_label,
  } = data;

  const IS_POSTGRES = !!process.env.DATABASE_URL;

  if (IS_POSTGRES) {
    const rows = await query(
      `INSERT INTO bookings
         (name,phone,email,address,service,notes,date,date_obj,slot,slot_label,status,created_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,'pending',NOW())
       RETURNING *`,
      [name,phone,email,address,service,notes,date,date_obj,slot,slot_label]
    );
    return rows[0];
  } else {
    await query(
      `INSERT INTO bookings
         (name,phone,email,address,service,notes,date,date_obj,slot,slot_label,status)
       VALUES (?,?,?,?,?,?,?,?,?,?,'pending')`,
      [name,phone,email,address,service,notes,date,date_obj,slot,slot_label]
    );
    // Return last inserted row
    const rows = await query('SELECT * FROM bookings ORDER BY id DESC LIMIT 1');
    return rows[0];
  }
}

export async function updateBookingStatus(id, status) {
  const IS_POSTGRES = !!process.env.DATABASE_URL;
  if (IS_POSTGRES) {
    await query('UPDATE bookings SET status=$1 WHERE id=$2', [status, id]);
  } else {
    await query('UPDATE bookings SET status=? WHERE id=?', [status, id]);
  }
}
