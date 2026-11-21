import Link from 'next/link';
import { notFound } from 'next/navigation';
import { neighborhoods, getNeighborhood } from '../../../../lib/richardson-neighborhoods';

const SITE = 'https://sprinklersandlawns.com';
const HERO_IMG = '/images/serviceareas/Richardson_/richardson (1).jpg';

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({ params }) {
  const { neighborhood } = await params;
  const d = getNeighborhood(neighborhood);
  if (!d) return {};
  const url = `${SITE}/service-areas/richardson/${d.slug}`;
  const title = `${d.seoTitle} | Sprinklers and Lawns`;
  return {
    title: { absolute: title },
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Sprinklers and Lawns',
      url,
      title,
      description: d.metaDescription,
      images: [{ url: d.img1, width: 1200, height: 630, alt: d.img1Alt }],
    },
  };
}

function buildServices(area) {
  return [
    { ic:'🔧', c:'green', t:'Sprinkler Repair',           href:'/sprinkler-repair',           d:`Quick diagnosis and reliable repair of broken heads, damaged valves, wiring issues, pipe breaks, and leaks in ${area}.` },
    { ic:'⚙️', c:'green', t:'Sprinkler Installation',     href:'/sprinkler-installation',     d:`Custom-designed irrigation systems for ${area} properties. Priced by heads to ensure proper coverage.` },
    { ic:'📐', c:'blue',  t:'Irrigation Design',          href:'/irrigation-design',          d:'Professional irrigation design with hydrozone planning and code-compliant layouts.' },
    { ic:'📱', c:'green', t:'Smart Controllers',          href:'/smart-controllers',          d:'Weather-based controllers that automatically adjust schedules and reduce water waste.' },
    { ic:'🌧️', c:'green', t:'Rain & Freeze Sensors',     href:'/rain-freeze-sensors',        d:'Code-required sensors that automatically shut off irrigation during rainfall or freezing.' },
    { ic:'⚡', c:'blue',  t:'Electrical Troubleshooting', href:'/electrical-troubleshooting', d:'Accurate diagnosis of wiring faults, solenoid failures, and lightning damage.' },
    { ic:'💧', c:'green', t:'Head Replacement',           href:'/head-replacement',           d:'Replacement of worn or damaged heads with water-efficient models and proper alignment.' },
    { ic:'📅', c:'brown', t:'Seasonal Maintenance',       href:'/seasonal-maintenance',       d:`Scheduled inspections and programming adjustments for year-round ${area} performance.` },
  ];
}

const pillStyle = {
  background: 'var(--green-xlight)',
  color: 'var(--green-dark)',
  border: '1px solid var(--green-light)',
  padding: '5px 12px',
  borderRadius: '20px',
  fontSize: '13px',
  fontWeight: 500,
  textDecoration: 'none',
};

export default async function RichardsonNeighborhoodPage({ params }) {
  const { neighborhood } = await params;
  const d = getNeighborhood(neighborhood);
  if (!d) notFound();

  const url = `${SITE}/service-areas/richardson/${d.slug}`;
  const services = buildServices(d.display);
  const others = neighborhoods.filter((n) => n.slug !== d.slug);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE}/#business`,
        name: 'Sprinklers and Lawns',
        url: SITE,
        telephone: '+1-972-755-9019',
        areaServed: [
          { '@type': 'Place', name: `${d.display}, Richardson, TX` },
          { '@type': 'City', name: 'Richardson, TX' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE}/service-areas` },
          { '@type': 'ListItem', position: 3, name: 'Richardson', item: `${SITE}/service-areas/richardson` },
          { '@type': 'ListItem', position: 4, name: d.display, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <img src={HERO_IMG} alt={`Professional irrigation services in ${d.display}, Richardson Texas`} className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <Link href="/service-areas" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Service Areas</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <Link href="/service-areas/richardson" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Richardson</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>{d.display}</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>{d.display}, Richardson — Irrigation Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Irrigation Services in <em style={{ color:'var(--green-light)' }}>{d.display}, Richardson</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              {d.heroText}
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Free Quote</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Serving Richardson Since 1980','License #8146','1-Year Warranty'].map(t => (
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
              <span className="eyebrow">Irrigation Services in {d.display}, Richardson</span>
              <h2 className="section-title">Professional Irrigation for <em>{d.introEm}</em></h2>
              <div className="divider" />
              {d.intro.map((p, i) => (
                <p key={i} style={{ color:'var(--text-muted)', marginBottom: i === d.intro.length - 1 ? '24px' : '16px', fontSize:'17px' }}>{p}</p>
              ))}
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Schedule {d.display} Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={d.img1} alt={d.img1Alt} /></div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">Irrigation Services in {d.display}, Richardson</span>
            <h2 className="section-title">Full Service Irrigation Solutions for <em>{d.display}</em></h2>
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
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={d.img2} alt={d.img2Alt} /></div>
            <div>
              <span className="eyebrow">Serving {d.display}, Richardson</span>
              <h2 className="section-title">Local Irrigation Knowledge for <em>{d.display}</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>Sprinklers and Lawns understands the specific irrigation needs of properties in {d.display}:</p>
              <ul className="check-list" style={{ marginBottom:'28px' }}>{d.highlights.map(h => <li key={h}>{h}</li>)}</ul>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'12px' }}>Other Richardson neighborhoods we serve:</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {others.map(n => (
                  <Link key={n.slug} href={`/service-areas/richardson/${n.slug}`} style={pillStyle}>{n.name}</Link>
                ))}
                <Link href="/service-areas/richardson" style={pillStyle}>All of Richardson</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'40px' }}>
            <span className="eyebrow">Common Problems</span>
            <h2 className="section-title">{d.issuesTitle}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'20px' }}>
            {d.issues.map(item => (
              <div key={item.t} className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{item.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.7 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth:'820px' }}>
          <div style={{ textAlign:'center', marginBottom:'36px' }}>
            <span className="eyebrow">Questions</span>
            <h2 className="section-title">Irrigation Questions from <em>{d.display}</em> Homeowners</h2>
          </div>
          {d.faqs.map(f => (
            <details key={f.q} style={{ background:'white', border:'1px solid var(--green-light)', borderRadius:'12px', padding:'18px 22px', marginBottom:'12px' }}>
              <summary style={{ cursor:'pointer', fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)' }}>{f.q}</summary>
              <p style={{ color:'var(--text-muted)', fontSize:'16px', lineHeight:1.75, marginTop:'12px' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{n:'25+',l:'Years Serving Richardson'},{n:'1980',l:'Established in DFW'},{n:'#8146',l:'TX Irrigation License'},{n:'1-Year',l:'Parts & Labor Warranty'}].map((s,i)=>(
              <div key={s.l} style={{ textAlign:'center', padding:'24px 16px', borderRight: i<3?'1px solid rgba(255,255,255,.18)':'none' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'36px', fontWeight:400, color:'white' }}>{s.n}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,.72)', marginTop:'5px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Irrigation Service in {d.display}, Richardson</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Serving {d.display} with Professional <em style={{ color:'var(--green-light)' }}>Irrigation Services Since 1980</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule irrigation service in {d.display}, Richardson. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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