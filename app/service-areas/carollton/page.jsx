import Link from 'next/link';
export const metadata = {
  title: 'Irrigation Services Carrollton TX | Sprinklers and Lawns',
  description: 'Professional irrigation services in Carrollton, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance. Family-owned. License #8146. Call (972) 755-9019.',
  keywords: 'irrigation services Carrollton TX, sprinkler repair Carrollton Texas, sprinkler installation Carrollton TX, irrigation company Carrollton Texas',
  alternates: { canonical: 'https://sprinklersandlawns.com/service-areas/carrollton' },
};
const HERO = 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=85&fit=crop';
const IMG1 = 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=900&q=85&fit=crop';
const IMG2 = 'https://images.unsplash.com/photo-1490750967868-88df5691cc17?w=900&q=85&fit=crop';
const services = [
  { ic:'🔧', c:'green', t:'Sprinkler Repair',           href:'/sprinkler-repair',           d:'Quick diagnosis and reliable repair of broken heads, damaged valves, wiring issues, pipe breaks, and leaks.' },
  { ic:'⚙️', c:'green', t:'Sprinkler Installation',     href:'/sprinkler-installation',     d:'Custom-designed irrigation systems for Carrollton properties. Priced by heads to ensure proper coverage.' },
  { ic:'📐', c:'blue',  t:'Irrigation Design',          href:'/irrigation-design',          d:'Professional irrigation design with hydrozone planning and code-compliant layouts.' },
  { ic:'📱', c:'green', t:'Smart Controllers',          href:'/smart-controllers',          d:'Weather-based controllers that automatically adjust schedules and reduce water waste.' },
  { ic:'🌧️', c:'green', t:'Rain & Freeze Sensors',     href:'/rain-freeze-sensors',        d:'Code-required sensors that automatically shut off irrigation during rainfall or freezing.' },
  { ic:'⚡', c:'blue',  t:'Electrical Troubleshooting', href:'/electrical-troubleshooting', d:'Accurate diagnosis of wiring faults, solenoid failures, and lightning damage.' },
  { ic:'💧', c:'green', t:'Head Replacement',           href:'/head-replacement',           d:'Replacement of worn or damaged heads with water-efficient models and proper alignment.' },
  { ic:'📅', c:'brown', t:'Seasonal Maintenance',       href:'/seasonal-maintenance',       d:'Scheduled inspections and programming adjustments for year-round Carrollton performance.' },
];
const highlights = [
  'Carrollton is located in Dallas, Denton, and Collin Counties in the northern Dallas-Fort Worth area',
  'Carrollton properties span a range of ages from older established neighborhoods to newer developments',
  'Soil types throughout Carrollton vary requiring zone-specific irrigation programming and seasonal adjustments',
  'Carrollton enforces irrigation code compliance including rain and freeze sensors on all systems',
  'Many Carrollton properties have irrigation systems that benefit from smart controller upgrades and seasonal programming adjustments',
];
const neighborhoods = ['Old Town Carrollton','Indian Creek','Rosemeade','Castle Hills','Furneaux Creek','Sandy Lake area','Josey Lane corridor','Trinity Mills area'];
export default function CarrolltonPage() {
  return (
    <>
      <section className="page-hero">
        <img src={HERO} alt="Professional irrigation services in Carrollton Texas — sprinkler repair, installation, and maintenance" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <Link href="/service-areas" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Service Areas</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Carrollton</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Carrollton, Texas — Irrigation Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Irrigation Services in <em style={{ color:'var(--green-light)' }}>Carrollton, Texas</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Sprinklers and Lawns provides professional irrigation services throughout Carrollton, Texas. Sprinkler repair, installation, smart controllers, and seasonal maintenance for Carrollton homeowners and property managers.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Free Quote</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Serving Carrollton Since 1980','License #8146','1-Year Warranty'].map(t => (
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
              <span className="eyebrow">Irrigation Services in Carrollton, Texas</span>
              <h2 className="section-title">Professional Irrigation for <em>Carrollton Homeowners and Property Managers</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>Sprinklers and Lawns has provided irrigation services to Carrollton, Texas homeowners and property managers for over 25 years. Joe Davis earned a Bachelor of Science in Horticulture from Texas A&amp;M in 1989 and brings deep local knowledge to every irrigation project in Carrollton.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>Whether you need a sprinkler head replaced, a new system installed, or a full irrigation assessment, every job in Carrollton receives the same level of care and attention to detail.</p>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Schedule Carrollton Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG1} alt="Irrigation system maintenance and repair for a Carrollton Texas residential property" /></div>
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Irrigation Services in Carrollton, TX</span>
            <h2 className="section-title">Full Service Irrigation Solutions for <em>Carrollton, Texas</em></h2>
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
            <div className="img-card" style={{ aspectRatio:'4/3' }}><img src={IMG2} alt="Irrigation system installation and maintenance serving Carrollton Texas neighborhoods" /></div>
            <div>
              <span className="eyebrow">Serving Carrollton, Texas</span>
              <h2 className="section-title">Local Irrigation Knowledge for <em>Carrollton Properties</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>Sprinklers and Lawns understands the specific irrigation needs of Carrollton, Texas properties:</p>
              <ul className="check-list" style={{ marginBottom:'28px' }}>{highlights.map(h => <li key={h}>{h}</li>)}</ul>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'12px' }}>Carollton neighborhoods and areas we serve:</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {neighborhoods.map(n => <span key={n} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'5px 12px', borderRadius:'20px', fontSize:'13px', fontWeight:500 }}>{n}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{ n:'25+',l:'Years Serving Carrollton' },{ n:'1980',l:'Established in DFW' },{ n:'#8146',l:'TX Irrigation License' },{ n:'1-Year',l:'Parts & Labor Warranty' }].map((s,i) => (
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Irrigation Service in Carrollton, TX</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Serving Carrollton, Texas with Professional <em style={{ color:'var(--green-light)' }}>Irrigation Services Since 1980</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>Call (972) 755-9019 to schedule irrigation service in Carrollton, Texas. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.</p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 34px' }}>📞 Call (972) 755-9019</a>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 34px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
