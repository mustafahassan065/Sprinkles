import Link from 'next/link';

const SITE = 'https://sprinklersandlawns.com';

export const metadata = {
  title: 'Irrigation Services Forney TX | Sprinklers and Lawns',
  description: 'Professional irrigation services in Forney, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance. Family-owned. License #8146. Call (972) 755-9019.',
  keywords: 'irrigation services Forney TX, sprinkler repair Forney Texas, sprinkler installation Forney TX, irrigation company Forney Texas',
  alternates: { canonical: `${SITE}/service-areas/forney` },
};

const HERO = '/images/serviceareas/Garland/garland (1).jpg';
const IMG1 = '/images/serviceareas/Dallas/dallas (1).jpg';
const IMG2 = '/images/serviceareas/flowermound/flowermound (3).jpg';

const services = [
  { ic:'🔧', c:'green', t:'Sprinkler Repair',           href:'/sprinkler-repair',           d:'Quick diagnosis and reliable repair of broken heads, damaged valves, wiring issues, pipe breaks, and leaks.' },
  { ic:'⚙️', c:'green', t:'Sprinkler Installation',     href:'/sprinkler-installation',     d:'Custom-designed irrigation systems for Forney properties. Priced by heads to ensure proper coverage.' },
  { ic:'📐', c:'blue',  t:'Irrigation Design',          href:'/irrigation-design',          d:'Professional irrigation design with hydrozone planning and code-compliant layouts.' },
  { ic:'📱', c:'green', t:'Smart Controllers',          href:'/smart-controllers',          d:'Weather-based controllers that automatically adjust schedules and reduce water waste.' },
  { ic:'🌧️', c:'green', t:'Rain & Freeze Sensors',     href:'/rain-freeze-sensors',        d:'Code-required sensors that automatically shut off irrigation during rainfall or freezing.' },
  { ic:'⚡', c:'blue',  t:'Electrical Troubleshooting', href:'/electrical-troubleshooting', d:'Accurate diagnosis of wiring faults, solenoid failures, and lightning damage.' },
  { ic:'💧', c:'green', t:'Head Replacement',           href:'/head-replacement',           d:'Replacement of worn or damaged heads with water-efficient models and proper alignment.' },
  { ic:'📅', c:'brown', t:'Seasonal Maintenance',       href:'/seasonal-maintenance',       d:'Scheduled inspections and programming adjustments for year-round Forney performance.' },
];

const highlights = [
  'Forney is located in Kaufman County along US-80 and is one of the fastest-growing cities in North Texas',
  'Forney properties include newer master-planned communities and established rural-adjacent homes',
  'Heavy black clay soil common throughout Forney requires zone-specific programming and seasonal adjustments',
  'Forney enforces irrigation code compliance including rain and freeze sensors on all systems',
  'Many Forney properties are newer builds with builder-installed irrigation that benefits from smart controller upgrades and zone tuning',
];

export default function ForneyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE}/#business`,
        name: 'Sprinklers and Lawns',
        url: SITE,
        telephone: '+1-972-755-9019',
        areaServed: { '@type': 'City', name: 'Forney, TX' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE}/service-areas` },
          { '@type': 'ListItem', position: 3, name: 'Forney', item: `${SITE}/service-areas/forney` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <img src={HERO} alt="Professional irrigation services in Forney Texas — sprinkler repair, installation, and maintenance" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <Link href="/service-areas" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Service Areas</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Forney</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Forney, Texas — Irrigation Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Irrigation Services in <em style={{ color:'var(--green-light)' }}>Forney, Texas</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Sprinklers and Lawns provides professional irrigation services throughout Forney, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance for Forney homeowners and property managers.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Free Quote</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Serving Forney Since 1980','License #8146','1-Year Warranty'].map(t => (
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'5px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Irrigation Services in Forney, Texas</span>
              <h2 className="section-title">Professional Irrigation for <em>Forney Homeowners and Property Managers</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>Sprinklers and Lawns has provided irrigation services to North Texas homeowners and property managers for over 25 years. Joe Davis earned a Bachelor of Science in Horticulture from Texas A&amp;M in 1989 and brings deep local knowledge to every irrigation project in Forney.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>Forney properties face the same North Texas challenges common across Kaufman County — heavy clay soils, extreme summer heat, seasonal weather changes, and strict local irrigation codes that require rain and freeze sensors on all systems.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>Whether you need a sprinkler head replaced, a new system installed, or a full irrigation assessment, every job in Forney receives the same level of care and attention to detail.</p>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Schedule Forney Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG1} alt="Irrigation system maintenance and repair for a Forney Texas residential property" /></div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Irrigation Services in Forney, TX</span>
            <h2 className="section-title">Full Service Irrigation Solutions for <em>Forney, Texas</em></h2>
          </div>
          <div className="grid-4">
            {services.map(svc => (
              <Link key={svc.href} href={svc.href} className="card" style={{ display:'flex', flexDirection:'column', textDecoration:'none' }}>
                <div className={`ico-${svc.c}`} style={{ marginBottom:'14px' }}><span style={{ fontSize:'22px' }}>{svc.ic}</span></div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{svc.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, flex:1 }}>{svc.d}</p>
                <span style={{ color:'var(--green)', fontSize:'13px', fontWeight:600, marginTop:'14px' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG2} alt="Irrigation system installation and maintenance serving Forney Texas neighborhoods" /></div>
            <div>
              <span className="eyebrow">Serving Forney, Texas</span>
              <h2 className="section-title">Local Irrigation Knowledge for <em>Forney Properties</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>Sprinklers and Lawns understands the specific irrigation needs of Forney, Texas properties:</p>
              <ul className="check-list" style={{ marginBottom:'28px' }}>{highlights.map(h => <li key={h}>{h}</li>)}</ul>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Get a Forney Quote</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{ n:'25+',l:'Years Serving North Texas' },{ n:'1980',l:'Established in DFW' },{ n:'#8146',l:'TX Irrigation License' },{ n:'1-Year',l:'Parts & Labor Warranty' }].map((s,i) => (
              <div key={s.l} style={{ textAlign:'center', padding:'24px 16px', borderRight: i<3 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'36px', fontWeight:400, color:'white' }}>{s.n}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,.72)', marginTop:'5px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Irrigation Service in Forney, TX</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Serving Forney, Texas with Professional <em style={{ color:'var(--green-light)' }}>Irrigation Services Since 1980</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule irrigation service in Forney, Texas. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 34px' }}>📞 Call (972) 755-9019</a>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 34px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}