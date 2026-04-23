import Link from 'next/link';

export const metadata = {
  title: 'Commercial Irrigation Services Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Professional commercial irrigation services in Dallas-Fort Worth. Sprinkler repair, installation, and maintenance for commercial properties. Licensed. 1-year warranty. Call (972) 755-9019.',
  keywords:
    'commercial irrigation Dallas, commercial sprinkler repair Fort Worth, commercial irrigation installation North Texas, commercial irrigation service DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/commercial-services' },
};

const IMG = {
  hero:   'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&fit=crop',
  split1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop',
};

const commercialServices = [
  { ic:'🔧', c:'green', t:'Commercial Sprinkler Repair',       d:'Diagnosis and repair of broken heads, damaged valves, wiring issues, pipe breaks, and leaks across commercial properties of all sizes.' },
  { ic:'⚙️', c:'green', t:'Commercial System Installation',    d:'Custom-designed irrigation systems for commercial properties. Each zone is designed based on specific plant material and environmental conditions.' },
  { ic:'📐', c:'blue',  t:'Commercial Irrigation Design',      d:'Professional irrigation design with hydrozone planning, material take-off sheets, and code-compliant layouts for commercial landscapes.' },
  { ic:'📱', c:'green', t:'Smart Controller Upgrades',         d:'Weather-based smart controllers that automatically adjust watering schedules, reducing water waste and lowering utility costs for commercial properties.' },
  { ic:'🌧️', c:'green', t:'Rain and Freeze Sensor Service',   d:'Code-required sensor installation, replacement, and adjustment to ensure commercial systems meet North Texas irrigation code requirements.' },
  { ic:'⚡', c:'blue',  t:'Electrical Troubleshooting',        d:'Accurate diagnosis of wiring faults, short circuits, solenoid failures, and lightning damage on commercial irrigation systems.' },
  { ic:'💧', c:'green', t:'Head Replacement and Adjustment',   d:'Replacement of worn or damaged heads on commercial properties using water-efficient models with proper alignment for even coverage.' },
  { ic:'📅', c:'brown', t:'Commercial Seasonal Maintenance',   d:'Scheduled seasonal inspections, programming adjustments, and system evaluations to keep commercial irrigation systems performing year-round.' },
];

const commercialNeeds = [
  { c:'green', t:'Larger system footprints with multiple zones and controllers' },
  { c:'green', t:'Mixed plant material including turf, ornamentals, and trees requiring separate hydrozones' },
  { c:'blue',  t:'Code compliance requirements including rain and freeze sensors on all systems' },
  { c:'blue',  t:'Water budget management and documentation for property managers' },
  { c:'green', t:'Timely response to system failures to protect landscape investment' },
  { c:'green', t:'Coordination with property managers, HOAs, and maintenance teams' },
];

const commercialProcess = [
  { n:'01', c:'var(--green)',        t:'Full System Evaluation',       d:'We inspect the entire commercial irrigation system, assess zone performance, check code compliance, and identify all issues before recommending repairs.' },
  { n:'02', c:'var(--green-dark)',   t:'Detailed Assessment Report',   d:'A detailed corrective estimate is provided promptly. All repair options and pricing are discussed before any work begins.' },
  { n:'03', c:'var(--blue-dark)',    t:'Authorized Repairs',           d:'Work begins only after authorization. We coordinate with property managers and on-site contacts as needed throughout the repair process.' },
  { n:'04', c:'var(--green-deeper)', t:'System Documentation',         d:'All work performed is documented. Recommendations for future maintenance and improvements are provided after every service visit.' },
];

const whyChoose = [
  { ic:'🪪', c:'var(--green)',      t:'Licensed irrigation professionals',       d:'All commercial work performed by State of Texas licensed irrigation professionals. License #8146.' },
  { ic:'📊', c:'var(--green-dark)', t:'Experience with commercial properties',   d:'25 plus years of experience with commercial irrigation systems across Dallas-Fort Worth and North Texas.' },
  { ic:'✅', c:'var(--blue-dark)',  t:'Code compliant installations and repairs', d:'All commercial irrigation work meets local city codes and regulations including required rain and freeze sensors.' },
  { ic:'💬', c:'var(--green)',      t:'Clear communication with property managers',d:'We coordinate with property managers, HOAs, and on-site contacts. All work is documented and pricing is discussed upfront.' },
  { ic:'💧', c:'var(--green)',      t:'Water efficient commercial solutions',     d:'Smart controllers, hydrozone planning, and seasonal adjustments combine to reduce water usage on commercial properties.' },
  { ic:'🛡️', c:'var(--blue-dark)',  t:'One year warranty on parts and labor',    d:'All commercial irrigation work includes a one year warranty on parts and labor.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function CommercialServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={IMG.hero} alt="Professional commercial irrigation services for North Texas business and commercial properties" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Commercial Services</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Commercial Irrigation Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Commercial Irrigation Services{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Sprinklers and Lawns provides professional commercial irrigation services across Dallas Fort Worth. Sprinkler repair, installation, smart controllers, and seasonal maintenance for commercial properties, HOAs, and property managers.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Request Commercial Service</Link>
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

      {/* COMMERCIAL NEEDS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Commercial Irrigation in North Texas</span>
              <h2 className="section-title">
                Commercial Properties Have Unique{' '}
                <em>Irrigation Requirements</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides professional commercial irrigation services with the same level of care and attention to detail applied to every residential job — but with an understanding of the unique demands commercial properties present.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Whether you need a commercial sprinkler repair, a new system installed, or ongoing seasonal maintenance, Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Commercial properties in North Texas require:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                {commercialNeeds.map(n => (
                  <div key={n.t} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: n.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0, marginTop:'8px' }} />
                    <span style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.65 }}>{n.t}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Request Commercial Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Commercial irrigation system maintenance and repair for a North Texas commercial property" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES 4×2 */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Commercial Irrigation Services</span>
            <h2 className="section-title">
              Complete Commercial Irrigation Solutions for <em>Dallas Fort Worth</em>
            </h2>
          </div>
          <div className="grid-4">
            {commercialServices.map(svc => (
              <div key={svc.t} className="card" style={{ display:'flex', flexDirection:'column' }}>
                <div className={`ico-${svc.c}`} style={{ marginBottom:'14px' }}>
                  <span style={{ fontSize:'22px' }}>{svc.ic}</span>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{svc.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, flex:1 }}>{svc.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Commercial irrigation system assessment and repair for a Dallas Fort Worth commercial property" />
            </div>
            <div>
              <span className="eyebrow">Our Commercial Service Process</span>
              <h2 className="section-title">
                Accurate Diagnosis and <em>Clear Communication</em> on Every Commercial Job
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                Before any repair or installation begins, the scope of work is clearly explained. Authorization is obtained. Pricing options are discussed in advance. You remain in control of the decision process at every step.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                {commercialProcess.map(s => (
                  <div key={s.n} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                    <div style={{ width:'42px', height:'42px', borderRadius:'50%', background:s.c, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize:'16px', flexShrink:0 }}>{s.n}</div>
                    <div>
                      <h4 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'4px' }}>{s.t}</h4>
                      <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why Choose <em>Sprinklers and Lawns</em></h2>
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

      {/* AREAS */}
      <section className="section-sm bg-white">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow">Areas We Serve</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'10px', marginTop:'8px' }}>
            Commercial Services Throughout <em>North Texas</em>
          </h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center', marginBottom:'14px' }}>
            {areas.map(a => <span key={a} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'7px 18px', borderRadius:'20px', fontSize:'14px', fontWeight:600 }}>{a}</span>)}
          </div>
          <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'12px' }}>Including:</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            {cities.map(c => <span key={c} style={{ background:'white', border:'1px solid var(--gray-100)', color:'var(--text-muted)', padding:'6px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500 }}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Commercial Irrigation Service</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Professional Commercial Irrigation Services{' '}
            <em style={{ color:'var(--green-light)' }}>Across Dallas Fort Worth</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to request commercial irrigation service in Dallas Fort Worth. Sprinklers and Lawns delivers accurate repairs, water-efficient solutions, and clear communication on every commercial job.
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
