import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Sprinkler Services',
      links: [
        ['Sprinkler Repair',           '/sprinkler-repair'],
        ['Sprinkler Installation',     '/sprinkler-installation'],
        ['Irrigation Design',          '/irrigation-design'],
        ['Smart Controllers',          '/smart-controllers'],
        ['Rain & Freeze Sensors',      '/rain-freeze-sensors'],
        ['Head Replacement',           '/head-replacement'],
        ['Electrical Troubleshooting', '/electrical-troubleshooting'],
        ['Seasonal Maintenance',       '/seasonal-maintenance'],
        ['Commercial Services',        '/commercial-services'],
      ],
    },
    {
      title: 'Service Areas',
      links: [
        ['Allen',        '/service-areas/allen'],
        ['Frisco',       '/service-areas/frisco'],
        ['McKinney',     '/service-areas/mckinney'],
        ['Plano',        '/service-areas/plano'],
        ['Dallas',       '/service-areas/dallas'],
        ['Flower Mound', '/service-areas/flower-mound'],
        ['Richardson',   '/service-areas/richardson'],
        ['Garland',      '/service-areas/garland'],
        ['Carrollton',   '/service-areas/carrollton'],
      ],
    },
    {
      title: 'Company',
      links: [
        ['Home',     '/'],
        ['About Us', '/about'],
        ['Blog',     '/blog'],
        ['Contact',  '/contact'],
      ],
    },
  ];

  return (
    <>
      <style>{`
        .fl  { color: rgba(255,255,255,0.55); font-size: 14px; text-decoration: none; transition: color .15s; font-family: var(--sans); display: block; }
        .fl:hover { color: white; }
        .fll { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; transition: color .15s; }
        .fll:hover { color: rgba(255,255,255,0.6); }
      `}</style>

      {/* 3-color brand stripe */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #4a9020 0%, #6db83c 40%, #7ab0d4 75%, #8b4513 100%)' }} />

      <footer style={{ background: '#1a3d0a', color: 'white', padding: '68px 0 36px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '44px',
            marginBottom: '52px',
          }}>

            {/* Brand */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 400, color: '#95cd68', letterSpacing: '-0.01em' }}>
                  Sprinklers
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.45)', margin: '0 6px' }}>and</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 400, color: 'white', letterSpacing: '-0.01em' }}>
                  Lawns
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
                Family-owned irrigation company serving Dallas-Fort Worth since 1980. Licensed, experienced, and committed to water-efficient solutions.
              </p>
              <a href="tel:9727559019" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#95cd68', fontSize: '18px', fontWeight: 700,
                fontFamily: 'var(--sans)', textDecoration: 'none', letterSpacing: '0.01em',
              }}>
                📞 (972) 755-9019
              </a>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '7px' }}>
                License #8146 · Serving DFW Since 1980
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '18px', flexWrap: 'wrap' }}>
                {['Licensed', '1-Yr Warranty', 'Same-Day'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(74,144,32,0.18)',
                    color: '#95cd68',
                    fontSize: '12px', fontWeight: 600,
                    padding: '4px 10px', borderRadius: '20px',
                    border: '1px solid rgba(74,144,32,0.3)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {cols.map(col => (
              <div key={col.title}>
                <h4 style={{
                  fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#6db83c', marginBottom: '16px',
                }}>
                  {col.title}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="fl">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
              © {year} Sprinklers and Lawns · All rights reserved · SprinklersandLawns.com
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link href="/privacy-policy" className="fll">Privacy Policy</Link>
              <Link href="/sitemap" className="fll">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}