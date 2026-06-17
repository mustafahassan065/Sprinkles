import Link from 'next/link';

export const metadata = {
  title: 'Irrigation Services McKinney TX | Sprinklers and Lawns',
  description: 'Professional irrigation services in McKinney, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance. Family-owned. License #8146. Call (972) 755-9019.',
  keywords: 'irrigation services McKinney TX, sprinkler repair McKinney Texas, sprinkler installation McKinney TX, irrigation company McKinney Texas',
  alternates: { canonical: 'https://sprinklersandlawns.com/service-areas/mckinney' },
};

const IMG = {
  hero: '/images/serviceareas/Mckinney_/mickney (1).jpg',
  img1: '/images/serviceareas/Mckinney_/mickney (2).jpg',
  img2: '/images/serviceareas/Mckinney_/mickney (1).jpg',
};

const services = [
  { ic:'🔧', c:'green', t:'Sprinkler Repair',           href:'/sprinkler-repair',           d:'Quick diagnosis and reliable repair of broken heads, damaged valves, wiring issues, pipe breaks, and leaks.' },
  { ic:'⚙️', c:'green', t:'Sprinkler Installation',     href:'/sprinkler-installation',     d:'Custom-designed irrigation systems for McKinney properties. Priced by heads to ensure proper coverage.' },
  { ic:'📐', c:'blue',  t:'Irrigation Design',          href:'/irrigation-design',          d:'Professional irrigation design with hydrozone planning and code-compliant layouts.' },
  { ic:'📱', c:'green', t:'Smart Controllers',          href:'/smart-controllers',          d:'Weather-based controllers that automatically adjust schedules and reduce water waste.' },
  { ic:'🌧️', c:'green', t:'Rain & Freeze Sensors',     href:'/rain-freeze-sensors',        d:'Code-required sensors that automatically shut off irrigation during rainfall or freezing.' },
  { ic:'⚡', c:'blue',  t:'Electrical Troubleshooting', href:'/electrical-troubleshooting', d:'Accurate diagnosis of wiring faults, solenoid failures, and lightning damage.' },
  { ic:'💧', c:'green', t:'Head Replacement',           href:'/head-replacement',           d:'Replacement of worn or damaged heads with water-efficient models and proper alignment.' },
  { ic:'📅', c:'brown', t:'Seasonal Maintenance',       href:'/seasonal-maintenance',       d:'Scheduled inspections and programming adjustments for year-round McKinney performance.' },
];

const highlights = [
  'McKinney is located in Collin County and is one of the fastest-growing cities in North Texas',
  'McKinney has a mix of older established neighborhoods and newer developments with varying irrigation needs',
  'Heavy clay soils common throughout McKinney require zone-specific programming and seasonal adjustments',
  'McKinney enforces irrigation code compliance including rain and freeze sensors on all systems',
  'Older McKinney systems may require retrofitting with updated components and smart controller upgrades',
];

const neighborhoods = ['Stonebridge Ranch','Craig Ranch','Tucker Hill','Adriatica','Heritage Ranch','Eldorado area','US-75 corridor','Downtown McKinney area'];

export default function McKinneyPage() {
  return (
    <>
      <section className="page-hero">
        <img src={IMG.hero} alt="Professional irrigation services in McKinney Texas" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <Link href="/service-areas" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Service Areas</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>McKinney</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>McKinney, Texas — Irrigation Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Irrigation Services in <em style={{ color:'var(--green-light)' }}>McKinney, Texas</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Sprinklers and Lawns provides professional irrigation services throughout McKinney, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance for McKinney homeowners and property managers.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Free Quote</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Serving McKinney Since 1980','License #8146','1-Year Warranty'].map(t => (
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
              <span className="eyebrow">Irrigation Services in McKinney, Texas</span>
              <h2 className="section-title">Professional Irrigation for <em>McKinney Homeowners and Property Managers</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>Sprinklers and Lawns has provided irrigation services to McKinney, Texas homeowners and property managers for over 25 years. Joe Davis earned a Bachelor of Science in Horticulture from Texas A&amp;M in 1989 and brings deep local knowledge to every irrigation project in McKinney.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>McKinney properties present a unique mix of older established irrigation systems and newer installations. Both require the same careful attention to soil conditions, plant needs, seasonal changes, and local code requirements.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>Whether you need a sprinkler head replaced, a new system installed, or a full irrigation assessment, every job in McKinney receives the same level of care and attention to detail.</p>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Schedule McKinney Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG.img1} alt="Irrigation system maintenance in McKinney Texas" /></div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">Irrigation Services in McKinney, TX</span>
            <h2 className="section-title">Full Service Irrigation Solutions for <em>McKinney, Texas</em></h2>
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
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG.img2} alt="Irrigation installation serving McKinney Texas" /></div>
            <div>
              <span className="eyebrow">Serving McKinney, Texas</span>
              <h2 className="section-title">Local Irrigation Knowledge for <em>McKinney Properties</em></h2>
              <div className="divider" />
              <ul className="check-list" style={{ marginBottom:'28px' }}>{highlights.map(h=><li key={h}>{h}</li>)}</ul>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'12px' }}>McKinney neighborhoods and areas we serve:</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {neighborhoods.map(n=><span key={n} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'5px 12px', borderRadius:'20px', fontSize:'13px', fontWeight:500 }}>{n}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{n:'25+',l:'Years Serving McKinney'},{n:'1980',l:'Established in DFW'},{n:'#8146',l:'TX Irrigation License'},{n:'1-Year',l:'Parts & Labor Warranty'}].map((s,i)=>(
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Irrigation Service in McKinney, TX</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Serving McKinney, Texas with Professional <em style={{ color:'var(--green-light)' }}>Irrigation Services Since 1980</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule irrigation service in McKinney, Texas. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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
