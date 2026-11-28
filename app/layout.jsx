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
        url: '/images/SprinklesLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sprinklers and Lawns',
      },
    ],
  },
  // ✅ Browser tab + Google Search favicon (PNG)
  icons: {
    icon: [
      { url: '/images/SprinklesLogo.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/images/SprinklesLogo.png',
    apple: '/images/SprinklesLogo.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sprinklers and Lawns',
  url: 'https://sprinklersandlawns.com',
  logo: 'https://sprinklersandlawns.com/images/SprinklesLogo.png',
  image: 'https://sprinklersandlawns.com/images/SprinklesLogo.png',
  description:
    'Family-owned irrigation company serving Dallas, Plano, McKinney, Frisco, Allen, and surrounding North Texas communities.',
  telephone: '+1-972-755-9019',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Plano',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: ['Dallas', 'Plano', 'McKinney', 'Frisco', 'Allen', 'North Texas'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* ✅ Fallback favicon link for browser tab */}
        <link
          rel="icon"
          type="image/png"
          href="/images/SprinklesLogo.png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/SprinklesLogo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}