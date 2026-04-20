import Link from 'next/link';

export const metadata = {
  title: 'Professional Irrigation Design Services Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Professional irrigation design services for North Texas properties. Hydrozone planning, material take-off sheets, and code-compliant system layouts. Licensed. Call (972) 755-9019.',
  keywords:
    'irrigation design Dallas, sprinkler system design Fort Worth, irrigation design North Texas, hydrozone planning DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/irrigation-design' },
};

/* ── Unique Unsplash images for this page only ── */
const IMG = {
  hero:    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=85&fit=crop',
  split1:  'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=85&fit=crop',
  split2:  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85&fit=crop',
};

const challenges = [
  { c:'green', t:'Clay soils that affect drainage' },
  { c:'green', t:'Extreme summer heat' },
  { c:'blue',  t:'Seasonal weather changes' },
  { c:'blue',  t:'Water restrictions' },
  { c:'green', t:'Mixed plant materials' },
];

const assessItems = [
  'Soil type and drainage conditions',
  'Plant materials and landscape layout',
  'Sun exposure and shaded areas',
  'Slope and runoff potential',
  'Water pressure and flow capacity',
  'Existing hardscape and structures',
];

const techItems = [
  { c:'green', t:'Pressure regulated sprinkler heads' },
  { c:'green', t:'High efficiency nozzles' },
  { c:'blue',  t:'Smart irrigation controllers' },
  { c:'blue',  t:'Rain and freeze sensors' },
  { c:'green', t:'Code compliant system components' },
];

const perfItems = [
  { c:'green', t:'Even water distribution' },
  { c:'green', t:'Proper zone coverage' },
  { c:'blue',  t:'Reduced runoff and overspray' },
  { c:'blue',  t:'Lower water bills' },
  { c:'green', t:'Protection of plant materials' },
];

const designIncludes = [
  'Exact component locations',
  'Required materials and quantities',
  'Zone layout and coverage details',
];

const whyChoose = [
  { ic:'🪪', c:'var(--green)',      t:'Licensed irrigation professional',  d:'All designs completed by a State of Texas licensed irrigation professional. License #8146.' },
  { ic:'📅', c:'var(--green-dark)', t:'25 plus years of experience',        d:'Over 25 years of professional irrigation experience across Dallas-Fort Worth and surrounding areas.' },
  { ic:'🌿', c:'var(--green)',      t:'Local North Texas expertise',        d:'Deep understanding of North Texas soil conditions, regional weather patterns, and city code requirements.' },
  { ic:'💧', c:'var(--blue-dark)',  t:'Water efficient system design',      d:'Every system is designed to deliver the correct amount of water based on plant type and environmental conditions.' },
  { ic:'✅', c:'var(--green)',      t:'Code compliant planning',            d:'All designs meet local city codes and regulations. Hardscape spray and other violations are identified and corrected.' },
  { ic:'📋', c:'var(--blue-dark)',  t:'Clear design documentation',         d:'Detailed design plans and material take-off sheets provided for every project.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function IrrigationDesignPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <img
          src={IMG.hero}
          alt="Professional irrigation design for a North Texas residential landscape with lush green lawn"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Irrigation Design</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Irrigation Design Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Professional Irrigation Design Services for{' '}
              <em style={{ color:'var(--green-light)' }}>North Texas Properties</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              A properly designed irrigation system is the foundation of a healthy and efficient landscape. In North Texas, irrigation design requires more than placing sprinkler heads.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Request Consultation</Link>
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

      {/* ── WHY DESIGN MATTERS ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Irrigation Design Matters in North Texas</span>
              <h2 className="section-title">
                A Properly Designed System Is the{' '}
                <em>Foundation of a Healthy and Efficient Landscape</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                In North Texas, irrigation design requires more than placing sprinkler heads. It requires a clear understanding of soil conditions, plant needs, sun exposure, slope, drainage, and local code requirements.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides professional irrigation design services across Dallas Fort Worth to ensure systems operate efficiently and protect your landscape investment from the start.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Poor irrigation design leads to uneven coverage, water waste, runoff, and long term damage to turf and plant material. A properly designed system delivers uniform coverage and supports healthy growth while reducing water usage.
              </p>

              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'14px' }}>
                North Texas landscapes face constant challenges:
              </h3>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {challenges.map(ch => (
                  <div key={ch.t} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: ch.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0 }} />
                    <span style={{ fontSize:'16px', color:'var(--text-muted)' }}>{ch.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Irrigation design assessment for a North Texas residential landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ── */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Our Irrigation Design Process</span>
            <h2 className="section-title">Every Design Begins with a <em>Detailed Property Evaluation</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Sprinklers and Lawns provides professional irrigation design services across Dallas Fort Worth to ensure systems operate efficiently and protect your landscape investment from the start.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'48px', alignItems:'start' }}>
            <div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--text)', marginBottom:'20px' }}>We assess:</h3>
              <ul className="check-list">
                {assessItems.map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="info-green" style={{ marginTop:'24px' }}>
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Based on this evaluation, we create a custom irrigation plan designed specifically for your property. Each zone is designed to deliver the correct amount of water based on plant type and environmental conditions.
                </p>
              </div>
            </div>

            {/* Hydrozone */}
            <div>
              <div className="card" style={{ marginBottom:'24px' }}>
                <div className="ico-green" style={{ marginBottom:'14px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>
                  Hydrozone Planning for Efficient Watering
                </h3>
                <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.7 }}>
                  Not all areas of a landscape require the same amount of water. We group plants with similar watering needs into the same zones. This approach prevents overwatering in one area and underwatering in another.
                </p>
                <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.7, marginTop:'10px' }}>
                  Hydrozoning improves efficiency, reduces stress on plants, and supports long term landscape health.
                </p>
              </div>

              <div className="card">
                <div className="ico-blue" style={{ marginBottom:'14px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>
                  Modern Irrigation Technology Integration
                </h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'12px' }}>
                  Sprinklers and Lawns designs systems using water efficient technology. We incorporate:
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {techItems.map(ti => (
                    <div key={ti.t} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                      <span style={{ width:'6px', height:'6px', borderRadius:'50%', background: ti.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0, display:'inline-block' }} />
                      <span style={{ fontSize:'14px', color:'var(--text-muted)' }}>{ti.t}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.7, marginTop:'12px' }}>
                  These features help reduce water waste and improve system performance throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE + DESIGN PLANS ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Irrigation system design plan and material take-off sheet for a Dallas Fort Worth property" />
            </div>

            <div>
              <span className="eyebrow">Designed for Performance and Longevity</span>
              <h2 className="section-title">
                Every System Designed with <em>Long Term Performance</em> in Mind
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Every irrigation system is designed with long term performance in mind. Our designs focus on:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'28px' }}>
                {perfItems.map(pi => (
                  <div key={pi.t} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: pi.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0 }} />
                    <span style={{ fontSize:'16px', color:'var(--text-muted)' }}>{pi.t}</span>
                  </div>
                ))}
              </div>
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                A properly designed system supports deeper root growth and improves overall landscape health.
              </p>

              <div className="info-green">
                <p style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--green-deeper)', marginBottom:'8px' }}>
                  Design Plans and Material Take Off Sheets
                </p>
                <p style={{ fontSize:'14px', color:'var(--green-dark)', lineHeight:1.72 }}>
                  Sprinklers and Lawns provides detailed irrigation design plans along with a material take off sheet. This includes:
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:'7px', marginTop:'10px' }}>
                  {designIncludes.map(di => (
                    <div key={di} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                      <span style={{ color:'var(--green)', fontWeight:700 }}>✓</span>
                      <span style={{ fontSize:'14px', color:'var(--green-dark)' }}>{di}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize:'14px', color:'var(--green-dark)', lineHeight:1.72, marginTop:'10px' }}>
                  This service is also available for property owners who plan to install their own system and need a professional design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LICENSED PROFESSIONALS ── */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Designed by Licensed Irrigation Professionals</span>
            <h2 className="section-title">
              All Designs Completed by a <em>Licensed Irrigation Professional</em>
            </h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              All irrigation designs are completed by a licensed irrigation professional with extensive experience in North Texas landscapes. Our team understands local soil conditions, regional weather patterns, city code requirements, and efficient water usage practices. This ensures every system is designed correctly the first time.
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

      {/* ── SERVICE AREAS ── */}
      <section className="section-sm bg-white">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow">Areas We Serve</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'10px', marginTop:'8px' }}>
            Irrigation Design Services Throughout <em>North Texas</em>
          </h2>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'20px' }}>
            Sprinklers and Lawns provides irrigation design services throughout:
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center', marginBottom:'14px' }}>
            {areas.map(a => (
              <span key={a} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'7px 18px', borderRadius:'20px', fontSize:'14px', fontWeight:600 }}>{a}</span>
            ))}
          </div>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'12px' }}>Including:</p>
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Request an Irrigation Design Consultation</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Planning a New Irrigation System or <em style={{ color:'var(--green-light)' }}>Upgrading an Existing One?</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to request a professional irrigation design consultation in Dallas Fort Worth. Sprinklers and Lawns delivers efficient system design with precision, local expertise, and no surprises.
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
