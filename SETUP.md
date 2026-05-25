# Sprinklers and Lawns — Setup Guide

## Quick Start (Local Development)

### Step 1 — Install PostgreSQL locally

**Windows (easiest):** Download PostgreSQL from https://www.postgresql.org/download/windows/
- Install with default settings
- Remember the password you set for `postgres` user

**Or use XAMPP with PostgreSQL plugin** (if you already have XAMPP)

---

### Step 2 — Create the database

Open pgAdmin (installs with PostgreSQL) or psql terminal:

```sql
CREATE DATABASE sprinklers_lawns;
```

---

### Step 3 — Set environment variable

Copy `.env.example` to `.env.local` and fill in your details:

```bash
# .env.local
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/sprinklers_lawns
NODE_ENV=development
```

---

### Step 4 — Install dependencies and create tables

```bash
npm install
npm run db:init
```

You should see:
```
✅ Connected!
✅ All tables created successfully!
📋 Tables in database:
 - bookings
 - contact_submissions
 - settings
```

---

### Step 5 — Run the project

```bash
npm run dev
```

Open: http://localhost:3000

---

## Pages

| URL | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/contact` | Contact form |
| `/book` | Customer booking page |
| `/admin` | Admin panel (password: sprinklers2024!) |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog posts |

---

## Admin Panel

URL: `http://localhost:3000/admin`
Password: `sprinklers2024!`

**Features:**
- Calendar view — click slots to block/unblock manually
- All Bookings — view, filter, update status
- By Area — group bookings by city for proximity scheduling
- Settings — adjust rolling block days (1-7)

**To change password:** Edit line in `app/admin/page.jsx`:
```js
if (password === 'sprinklers2024!') {
```

---

## Database Tables

| Table | Purpose |
|---|---|
| `bookings` | Customer booking appointments |
| `contact_submissions` | Contact form submissions |
| `settings` | Admin settings (blocked slots, block days) |

---

## SiteGround VPS Deployment

### Step 1 — Install Node.js on VPS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2 — Install PostgreSQL on VPS

```bash
sudo apt install postgresql postgresql-contrib -y
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
```

Inside psql:
```sql
CREATE DATABASE sprinklers_lawns;
CREATE USER sprinklers_user WITH PASSWORD 'your_strong_password';
GRANT ALL PRIVILEGES ON DATABASE sprinklers_lawns TO sprinklers_user;
\q
```

### Step 3 — Upload project to VPS

```bash
# On your computer — zip the project (without node_modules)
# Upload to VPS via FileZilla or SiteGround File Manager

# On VPS
cd /var/www/sprinklersandlawns
npm install
```

### Step 4 — Set environment variables on VPS

Create `/var/www/sprinklersandlawns/.env.local`:
```
DATABASE_URL=postgresql://sprinklers_user:your_strong_password@localhost:5432/sprinklers_lawns
NODE_ENV=production
```

### Step 5 — Initialize database and build

```bash
npm run db:init
npm run build
```

### Step 6 — Start with PM2 (keeps it running)

```bash
sudo npm install -g pm2
pm2 start npm --name "sprinklers" -- start
pm2 startup
pm2 save
```

### Step 7 — Nginx config (point domain to Next.js)

```nginx
server {
    listen 80;
    server_name sprinklersandlawns.com www.sprinklersandlawns.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables Reference

| Variable | Local | VPS Production |
|---|---|---|
| `DATABASE_URL` | `postgresql://postgres:pass@localhost:5432/sprinklers_lawns` | `postgresql://user:pass@localhost:5432/db_name` |
| `NODE_ENV` | `development` | `production` |
