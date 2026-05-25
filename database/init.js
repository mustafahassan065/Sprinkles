// database/init.js
// Run once: node database/init.js
// This creates all tables in your PostgreSQL database

const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});

const SQL = `
CREATE TABLE IF NOT EXISTS bookings (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  phone       VARCHAR(50)  NOT NULL,
  email       VARCHAR(255),
  address     TEXT         NOT NULL,
  service     VARCHAR(255) NOT NULL,
  notes       TEXT,
  date        VARCHAR(255),
  date_obj    VARCHAR(255),
  slot        VARCHAR(50),
  slot_label  VARCHAR(100),
  status      VARCHAR(50)  DEFAULT 'pending',
  created_at  TIMESTAMP    DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS settings (
  key    VARCHAR(100) PRIMARY KEY,
  value  TEXT         NOT NULL
);

INSERT INTO settings (key, value)
VALUES ('blocked_config', '{"blocked":{},"blockDays":3}')
ON CONFLICT (key) DO NOTHING;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  phone       VARCHAR(50)  NOT NULL,
  email       VARCHAR(255),
  address     TEXT,
  service     VARCHAR(255),
  message     TEXT,
  created_at  TIMESTAMP    DEFAULT NOW()
);
`;

async function init() {
  console.log('🔌 Connecting to PostgreSQL...');
  try {
    const client = await pool.connect();
    console.log('✅ Connected!');
    await client.query(SQL);
    console.log('✅ All tables created successfully!');
    
    const res = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name"
    );
    console.log('\n📋 Tables in database:');
    res.rows.forEach(r => console.log(' -', r.table_name));
    
    client.release();
    await pool.end();
    console.log('\n🎉 Database setup complete!');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

init();
