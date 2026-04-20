import Link from 'next/link';

export const metadata = {
  title: 'Rain and Freeze Sensor Services Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Professional rain and freeze sensor installation and service in Dallas-Fort Worth. Code-required sensors that automatically shut off irrigation. Licensed. 1-year warranty. Call (972) 755-9019.',
  keywords:
    'rain sensor Dallas, freeze sensor Fort Worth, irrigation rain sensor North Texas, rain freeze sensor installation DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/rain-freeze-sensors' },
};

/* ── Unique Unsplash images for this page only ── */
const IMG = {
  hero:   'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600&q=85&fit=crop',
  split1: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=900&q=85&fit=crop',
};

const whyMatters = [
  { ic:'💧', c:'green', t:'Water waste during rainfall' },
  { ic:'🧊', c:'blue',  t:'Frozen pipes and system damage' },
  { ic:'🚗', c:'brown', t:'Ice buildup on driveways and streets' },
  { ic:'⚠️', c:'blue',  t:'Unsafe conditions for vehicles and pedestrians' },
];

const sensorStops = [
  'Rainfall reaches a set level',
  'Temperatures drop near freezing',
];

const sensorTypes = [
  { t:'Hardwired Sensors', d:'Connect directly to the irrigation controller. A reliable option for most residential systems with existing wiring infrastructure in place.' },
  { t:'Wireless Sensors',  d:'Communicate without physical wiring. Easier to install in locations where running a wire to the controller is not practical.' },
];

const waterSavings = [
  { c:'green', t:'Prevent unnecessary watering' },
  { c:'green', t:'Reduce water waste' },
  { c:'green', t:'Lower utility costs' },
  { c:'blue',  t:'Extend system life' },
  { c:'blue',  t:'Protect plant material' },
];

const serviceItems = [
  'Sensor installation',
  'Replacement of faulty units',
  'Adjustment of rainfall and temperature settings',
  'System testing and verification',
];

const seasonalTests = [
  'Sensor response to moisture',
  'Temperature shutoff function',
  'Wiring and connections',
  'Controller integration',
];

const whyChoose = [
  { ic:'🪪', c:'var(--green)',      t:'Licensed irrigation professionals',   d:'All sensor installations performed by State of Texas licensed irrigation professionals. License #8146.' },
  { ic:'✅', c:'var(--green-dark)', t:'Code compliant installations',         d:'All irrigation systems in North Texas must include a working rain and freeze sensor. We ensure full code compliance.' },
  { ic:'⚙️', c:'var(--blue-dark)',  t:'Accurate setup and calibration',       d:'Sensors include adjustable settings that control how much rain or what temperature triggers system shutdown.' },
  { ic:'🌿', c:'var(--green)',      t:'Experience with North Texas weather',  d:'Extensive experience with North Texas weather conditions and how they affect irrigation system performance.' },
  { ic:'🔧', c:'var(--green)',      t:'Reliable testing and adjustments',     d:'We test sensor response to moisture, temperature shutoff function, wiring connections, and controller integration.' },
  { ic:'🛡️', c:'var(--blue-dark)',  t:'One year warranty on parts and labor', d:'All rain and freeze sensor installations and repairs include a one year warranty on parts and labor.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function RainFreezeSensorsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <img
          src={IMG.hero}
          alt="Rain and freeze sensor protecting an irrigation system during a North Texas rain event"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Rain & Freeze Sensors</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Rain and Freeze Sensor Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Rain and Freeze Sensor Services{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Rain and freeze sensors are a required part of irrigation systems across North Texas. These sensors automatically shut off irrigation during rainfall or freezing temperatures. They help prevent water waste, reduce system damage, and protect surrounding areas from hazardous conditions.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Schedule Service</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Code Required','Licensed #8146','1-Year Warranty'].map(t => (
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'5px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SENSORS MATTER ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Rain and Freeze Sensors Matter</span>
              <h2 className="section-title">
                North Texas Weather Can Change Quickly.{' '}
                <em>A Properly Working Sensor Protects Your System and Property.</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides professional rain and freeze sensor installation and service throughout Dallas Fort Worth to keep your system efficient and code compliant.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Rain events and freezing temperatures can occur without warning. If irrigation continues during these conditions, it can lead to serious issues:
              </p>
              <div className="grid-2" style={{ gap:'12px' }}>
                {whyMatters.map(w => (
                  <div key={w.t} style={{ display:'flex', gap:'10px', alignItems:'flex-start', padding:'14px', background:'var(--off-white)', borderRadius:'var(--r-md)', border:'1px solid var(--gray-100)' }}>
                    <span style={{ fontSize:'20px', flexShrink:0 }}>{w.ic}</span>
                    <span style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.6 }}>{w.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Rain and freeze sensor monitoring weather conditions for an irrigation system in North Texas" />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW SENSORS WORK ── */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">How Rain and Freeze Sensors Work</span>
            <h2 className="section-title">
              Sensors Monitor Weather Conditions and{' '}
              <em>Shut Down Irrigation When Needed</em>
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'48px', alignItems:'start' }}>
            {/* How it works */}
            <div>
              <div className="info-green" style={{ marginBottom:'24px' }}>
                <p style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--green-deeper)', marginBottom:'10px' }}>
                  They stop watering when:
                </p>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                  {sensorStops.map(s => (
                    <li key={s} style={{ display:'flex', gap:'8px', fontSize:'15px', color:'var(--green-dark)', alignItems:'center' }}>
                      <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.72 }}>
                  Sensors include adjustable settings that control how much rain or what temperature triggers system shutdown. Proper setup ensures accurate response to changing conditions.
                </p>
              </div>

              {/* Code compliance */}
              <div style={{ background:'var(--blue-xlight)', border:'1px solid var(--blue-light)', borderLeft:'4px solid var(--blue)', borderRadius:'var(--r-md)', padding:'16px 20px', marginTop:'20px' }}>
                <p style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--blue-deeper)', marginBottom:'8px' }}>
                  Code Compliance and Property Protection
                </p>
                <p style={{ fontSize:'14px', color:'var(--blue-deeper)', lineHeight:1.72 }}>
                  All irrigation systems in North Texas must include a working rain and freeze sensor or an approved alternative. This is especially important for properties near roads and intersections.
                </p>
                <p style={{ fontSize:'14px', color:'var(--blue-deeper)', lineHeight:1.72, marginTop:'10px' }}>
                  If irrigation runs during freezing conditions and creates ice on public surfaces, it can lead to safety hazards and potential liability concerns. Proper installation and maintenance help ensure compliance with local codes and regulations.
                </p>
              </div>
            </div>

            {/* Sensor types */}
            <div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--text)', marginBottom:'20px' }}>
                Types of Sensors Available
              </h3>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'16px' }}>
                There are two main types of sensors. Sprinklers and Lawns installs and services both options based on your system and property needs.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'20px', marginBottom:'28px' }}>
                {sensorTypes.map((st, i) => (
                  <div key={st.t} className="card" style={{ borderLeft: i === 0 ? '4px solid var(--green)' : '4px solid var(--blue)' }}>
                    <h4 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color: i === 0 ? 'var(--green-dark)' : 'var(--blue-deeper)', marginBottom:'8px' }}>{st.t}</h4>
                    <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{st.d}</p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h4 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'14px' }}>
                  Water Savings and System Efficiency
                </h4>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, marginBottom:'14px' }}>
                  Rain and freeze sensors improve irrigation efficiency. By stopping irrigation when it is not needed, your system operates more effectively year round. They help:
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {waterSavings.map(ws => (
                    <div key={ws.t} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'center' }}>
                      <span style={{ color: ws.c === 'green' ? 'var(--green)' : 'var(--blue)', fontWeight:700, flexShrink:0 }}>✓</span> {ws.t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTALLATION + TESTING SPLIT ── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Professional irrigation rain and freeze sensor installation and testing in a Dallas Fort Worth residential property" />
            </div>
            <div>
              <span className="eyebrow">Professional Installation and Adjustment</span>
              <h2 className="section-title">
                Complete Sensor Services with{' '}
                <em>System Testing and Seasonal Checks</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides complete sensor services. We ensure the sensor responds correctly and works with your irrigation controller.
              </p>
              <div className="grid-2" style={{ gap:'16px', marginBottom:'24px' }}>
                <div>
                  <h4 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'12px' }}>We handle:</h4>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                    {serviceItems.map(s => (
                      <li key={s} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                        <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'12px' }}>We test:</h4>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                    {seasonalTests.map(st => (
                      <li key={st} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                        <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {st}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500, marginBottom:'6px' }}>
                  Sensors should be checked regularly to ensure proper operation.
                </p>
                <p style={{ fontSize:'14px', color:'var(--green-dark)', lineHeight:1.72 }}>
                  Seasonal inspections help prevent failures and ensure your system remains reliable. All rain and freeze sensor installations and repairs include a one year warranty on parts and labor. This provides confidence in system performance and long term reliability.
                </p>
              </div>
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
              We focus on protecting your irrigation system while improving efficiency and compliance.
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
            Rain and Freeze Sensor Services Throughout <em>North Texas</em>
          </h2>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'18px' }}>
            Sprinklers and Lawns provides rain and freeze sensor services throughout:
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Rain and Freeze Sensor Service</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Ensure Your Irrigation System Responds Correctly to{' '}
            <em style={{ color:'var(--green-light)' }}>Changing Weather Conditions</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule rain and freeze sensor service in Dallas Fort Worth. Sprinklers and Lawns delivers reliable installation, accurate adjustments, and efficient system performance.
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
