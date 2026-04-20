import Link from 'next/link';

export const metadata = {
  title: 'Smart Irrigation Controller Services Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Smart irrigation controller installation and programming in Dallas-Fort Worth. Weather-based scheduling, remote access, and water savings. Licensed. 1-year warranty. Call (972) 755-9019.',
  keywords:
    'smart irrigation controller Dallas, smart sprinkler controller Fort Worth, weather based irrigation DFW, smart controller installation North Texas',
  alternates: { canonical: 'https://sprinklersandlawns.com/smart-controllers' },
};

/* ── Unique Unsplash images for this page only ── */
const IMG = {
  hero:   'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1600&q=85&fit=crop',
  split1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1544986581-efac9d9e5e8c?w=900&q=85&fit=crop',
};

const weatherReasons = [
  { c:'green', t:'Sudden rainfall' },
  { c:'green', t:'Extreme summer heat' },
  { c:'blue',  t:'Seasonal watering restrictions' },
  { c:'blue',  t:'Varying soil conditions' },
];

const howItWorks = [
  'Increase watering during heat',
  'Reduce watering after rainfall',
  'Adjust schedules based on season',
  'Respond to changing landscape conditions',
];

const remoteAccess = [
  'Start or stop watering',
  'Adjust run times',
  'Monitor system activity',
  'Override automatic schedules',
];

const zoneProgramming = [
  'Soil type',
  'Plant material',
  'Sun exposure',
  'Slope and drainage',
];

const efficiencyBenefits = [
  { c:'green', t:'Reduce water waste' },
  { c:'green', t:'Prevent runoff' },
  { c:'green', t:'Lower monthly water bills' },
  { c:'blue',  t:'Improve plant health' },
  { c:'blue',  t:'Protect your landscape investment' },
];

const whyChoose = [
  { ic:'🪪', c:'var(--green)',      t:'Licensed irrigation professionals',       d:'All installations performed by State of Texas licensed irrigation professionals. License #8146.' },
  { ic:'🌿', c:'var(--green-dark)', t:'Experience with North Texas systems',      d:'Extensive experience with irrigation systems across Dallas-Fort Worth and surrounding communities.' },
  { ic:'⚙️', c:'var(--blue-dark)',  t:'Proper setup and programming',             d:'Smart controllers require proper installation and setup to perform correctly. We ensure the system is set up correctly from the start.' },
  { ic:'✅', c:'var(--green)',      t:'Code compliant installation',              d:'All smart controller installations meet local city codes and regulations across North Texas.' },
  { ic:'💧', c:'var(--green)',      t:'Water efficient solutions',                d:'Smart controllers reduce water waste and lower monthly utility costs. Many pay for themselves through water savings.' },
  { ic:'💬', c:'var(--blue-dark)',  t:'Clear communication and support',          d:'We guide homeowners on managing and adjusting the system as needed for optimal performance year-round.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function SmartControllersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <img
          src={IMG.hero}
          alt="Smart irrigation controller installation and programming for a North Texas residential property"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Smart Controllers</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Smart Irrigation Controller Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Smart Irrigation Controller Services{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Smart irrigation controllers provide advanced control and efficient water management for your sprinkler system. These systems adjust watering schedules based on real time weather conditions, seasonal changes, and landscape needs.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Schedule Installation</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Licensed #8146','1-Year Warranty','Same-Day Service'].map(t => (
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'5px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SMART CONTROLLERS MATTER ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Smart Controllers Matter in North Texas</span>
              <h2 className="section-title">
                Traditional Controllers Follow Fixed Schedules.{' '}
                <em>Smart Controllers Adjust Automatically.</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides smart irrigation controller installation and programming across Dallas Fort Worth to help homeowners reduce water waste and maintain healthy landscapes.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Smart controllers are not only convenient. In many North Texas cities, they are also required to meet local irrigation codes.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Weather in North Texas changes quickly:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                {weatherReasons.map(wr => (
                  <div key={wr.t} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: wr.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0 }} />
                    <span style={{ fontSize:'16px', color:'var(--text-muted)' }}>{wr.t}</span>
                  </div>
                ))}
              </div>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Traditional controllers follow fixed schedules. Smart controllers adjust automatically based on real conditions. This helps prevent overwatering, reduces runoff, and protects plant health.
                </p>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Smart irrigation controller technology for efficient water management in North Texas" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES 4 COLS ── */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">How Smart Irrigation Controllers Work</span>
            <h2 className="section-title">
              Smart Controllers Connect to Local Weather Data and{' '}
              <em>Adjust Watering Schedules Automatically</em>
            </h2>
          </div>

          <div className="grid-4">
            {/* How it works */}
            <div className="card">
              <div className="ico-green" style={{ marginBottom:'14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>How Smart Controllers Work</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {howItWorks.map(h => (
                  <li key={h} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {h}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginTop:'12px' }}>
                Homeowners can also control the system through a mobile app and make manual adjustments when needed.
              </p>
            </div>

            {/* Remote access */}
            <div className="card">
              <div className="ico-blue" style={{ marginBottom:'14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>Full Control with Remote Access</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginBottom:'12px' }}>
                Smart controllers allow you to manage your irrigation system from anywhere. You can:
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {remoteAccess.map(r => (
                  <li key={r} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {r}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginTop:'12px' }}>
                This provides flexibility when weather conditions change quickly or when new landscaping requires special attention.
              </p>
            </div>

            {/* Zone programming */}
            <div className="card">
              <div className="ico-green" style={{ marginBottom:'14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>Zone Based Custom Programming</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginBottom:'12px' }}>
                Each irrigation zone can be programmed independently. Settings are adjusted based on:
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {zoneProgramming.map(z => (
                  <li key={z} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {z}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginTop:'12px' }}>
                This ensures each area receives the correct amount of water without overwatering or underwatering.
              </p>
            </div>

            {/* Efficiency */}
            <div className="card">
              <div className="ico-green" style={{ marginBottom:'14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>Efficient Water Use and Cost Savings</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginBottom:'12px' }}>
                Properly installed smart controllers improve system efficiency. They help:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                {efficiencyBenefits.map(eb => (
                  <div key={eb.t} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'center' }}>
                    <span style={{ color: eb.c === 'green' ? 'var(--green)' : 'var(--blue)', fontWeight:700, flexShrink:0 }}>✓</span> {eb.t}
                  </div>
                ))}
              </div>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginTop:'12px' }}>
                Many homeowners see noticeable savings over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SETUP + INSTALLATION ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Professional Installation and Optimization</span>
              <h2 className="section-title">
                Smart Controllers Require Proper Installation and{' '}
                <em>Setup to Perform Correctly</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Weather data may not always match exact site conditions. Storms can reach your property before weather stations update. In some cases, the opposite can occur.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                For new sod, plants, or landscaping, proper programming is critical. Sprinklers and Lawns ensures the system is set up correctly from the start and adjusted for your property conditions.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Sprinklers and Lawns provides complete smart controller services. We handle:
              </p>
              <ul className="check-list">
                {['Controller installation','System integration','Zone programming','System testing','Performance optimization'].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p style={{ color:'var(--text-muted)', marginTop:'20px', fontSize:'17px' }}>
                We also guide homeowners on managing and adjusting the system as needed.
              </p>

              <div className="info-blue" style={{ marginTop:'24px' }}>
                <p style={{ fontSize:'15px', color:'var(--blue-deeper)', fontWeight:500 }}>
                  All smart irrigation controller installations include a one-year warranty on parts and labor. This ensures dependable performance and long-term system reliability.
                </p>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Professional smart irrigation controller installation and programming in a North Texas property" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE 3×2 ── */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why Choose <em>Sprinklers and Lawns</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              We focus on helping homeowners manage water efficiently while protecting their landscape.
            </p>
          </div>
          <div className="grid-3">
            {whyChoose.map(w => (
              <div key={w.t} className="card">
                <div style={{ fontSize:'28px', marginBottom:'12px' }}>{w.ic}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:w.c, marginBottom:'8px' }}>{w.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="section-sm bg-white">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow">Areas We Serve</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'10px', marginTop:'8px' }}>
            Smart Controller Services Throughout <em>North Texas</em>
          </h2>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'18px' }}>
            Sprinklers and Lawns provides smart irrigation controller services throughout:
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center', marginBottom:'14px' }}>
            {areas.map(a => (
              <span key={a} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'7px 18px', borderRadius:'20px', fontSize:'14px', fontWeight:600 }}>{a}</span>
            ))}
          </div>
          <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'12px' }}>Including:</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            {cities.map(c => (
              <span key={c} style={{ background:'white', border:'1px solid var(--gray-100)', color:'var(--text-muted)', padding:'6px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500 }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Smart Controller Installation</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Upgrade Your Irrigation System with a Smart Controller and{' '}
            <em style={{ color:'var(--green-light)' }}>Take Control of Your Water Usage</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule smart irrigation controller service in Dallas Fort Worth. Sprinklers and Lawns deliver efficient irrigation control, reduced water waste, and reliable system performance.
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
