-- ════════════════════════════════════════════════════
-- Sprinklers and Lawns — Database Setup Script
-- Run this ONCE to create all required tables
-- ════════════════════════════════════════════════════

-- Bookings table
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

-- Settings table (blocked slots, block days, etc.)
CREATE TABLE IF NOT EXISTS settings (
  key    VARCHAR(100) PRIMARY KEY,
  value  TEXT         NOT NULL
);

-- Insert default blocked config
INSERT INTO settings (key, value)
VALUES ('blocked_config', '{"blocked":{},"blockDays":3}')
ON CONFLICT (key) DO NOTHING;

-- Contact form submissions
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

-- Verify tables created
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;
