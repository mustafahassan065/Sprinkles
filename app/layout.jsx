import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ minHeight: '60vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
