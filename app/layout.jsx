import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { initDb } from '../lib/db';

// Auto-initialize database tables on first run
// Works for both SQLite (local) and PostgreSQL (VPS)
let dbInitialized = false;
if (!dbInitialized) {
  dbInitialized = true;
  initDb().catch(err => console.error('DB init error:', err));
}

export const metadata = {
  metadataBase: new URL('https://sprinklersandlawns.com'),
  title: {
    default: 'Sprinklers and Lawns | Irrigation Services Dallas Fort Worth',
    template: '%s | Sprinklers and Lawns',
  },
  description:
    'Family-owned irrigation company serving Dallas, Plano, McKinney, Frisco, Allen, and surrounding North Texas communities. Licensed professionals. License #8146.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sprinklersandlawns.com',
    siteName: 'Sprinklers and Lawns',
    images: [
      {
        url: '/images/SprinklesLogo.webp',
        width: 1200,
        height: 630,
        alt: 'Sprinklers and Lawns',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/webp" href="/images/SprinklesLogo.webp" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}