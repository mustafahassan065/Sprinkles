import Link from 'next/link';

export const metadata = {
  title: 'Seasonal Irrigation Maintenance Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Professional seasonal irrigation maintenance in Dallas-Fort Worth. Spring startups, winterization, programming adjustments, and system inspections. Licensed. 1-year warranty. Call (972) 755-9019.',
  keywords:
    'seasonal irrigation maintenance Dallas, sprinkler winterization Fort Worth, irrigation startup North Texas, seasonal maintenance DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/seasonal-maintenance' },
};

const IMG = {
  hero:   'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1600&q=85&fit=crop',
  split1: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=85&fit=crop',
};

const whyMatters = [
  { c:'green', t:'North Texas summers regularly exceed 100 degrees requiring proper watering adjustments' },
  { c:'green', t:'Clay soils throughout the DFW area respond differently to seasonal temperature changes' },
  { c:'blue',  t:'Freeze events occur each winter in North Texas and can damage unprotected irrigation components' },
  { c:'blue',  t:'Water restrictions change seasonally and systems must be programmed accordingly' },
  { c:'green', t:'Plant material watering requirements change significantly between seasons' },
];

const springItems = [
  'Full system inspection after winter',
  'Check all heads for damage or misalignment',
  'Test all zones for proper operation',
  'Inspect valves and replace damaged components',
  'Review and update controller programming for spring conditions',
  'Test rain and freeze sensor operation',
  'Check water pressure and flow',
  'Identify and correct any code compliance issues',
];

const summerItems = [
  'Adjust controller runtimes for peak summer heat',
  'Inspect coverage for dry spots and missed areas',
  'Check for overspray hitting hardscape',
  'Review zone programming based on plant material and sun exposure',
  'Test sensor operation and calibration',
  'Identify heads needing replacement or adjustment',
];

const fallItems = [
  'Reduce watering schedules as temperatures drop',
  'Inspect system before winter freeze season',
  'Replace or repair damaged components before freezing occurs',
  'Adjust controller programming for fall watering requirements',
  'Verify freeze sensor is functioning correctly',
  'Review coverage for areas affected by seasonal shade changes',
];

const winterItems = [
  'Verify freeze sensor is functioning and properly calibrated',
  'Reduce or suspend watering schedules based on conditions',
  'Inspect controller programming for winter settings',
  'Check for any leaks or damage from freeze events',
  'Prepare system for spring restart',
];

const whyChoose = [
  { ic:'🪪', c:'var(--green)',      t:'Licensed irrigation professionals',       d:'All seasonal maintenance performed by State of Texas licensed irrigation professionals. License #8146.' },
  { ic:'🌿', c:'var(--green-dark)', t:'25 plus years of North Texas experience',  d:'Over 25 years of experience with North Texas seasonal conditions, soil types, and irrigation system performance.' },
  { ic:'⚙️', c:'var(--blue-dark)',  t:'Proper seasonal programming',             d:'Each zone is programmed based on plant material, soil type, sun exposure, and seasonal conditions — not identical runtimes.' },
  { ic:'✅', c:'var(--green)',      t:'Code compliant adjustments',               d:'All seasonal adjustments meet local city codes and regulations. Hardscape spray and other violations are identified and corrected.' },
  { ic:'💧', c:'var(--green)',      t:'Water efficient practices',                d:'Seasonal adjustments protect your landscape while reducing unnecessary water usage and lowering monthly utility costs.' },
  { ic:'🛡️', c:'var(--blue-dark)',  t:'One year warranty on parts and labor',    d:'All seasonal maintenance repairs and component replacements include a one year warranty on parts and labor.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function SeasonalMaintenancePage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={IMG.hero} alt="Seasonal irrigation maintenance keeping a North Texas lawn healthy through every season" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Seasonal Maintenance</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Seasonal Irrigation Maintenance</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Seasonal Irrigation Maintenance{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              North Texas irrigation systems require seasonal adjustments to perform correctly year-round. Sprinklers and Lawns provides scheduled seasonal inspections, programming adjustments, and system checks to ensure your irrigation system performs efficiently through every season.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Schedule Maintenance</Link>
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

      {/* WHY SEASONAL MATTERS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Seasonal Maintenance Matters in North Texas</span>
              <h2 className="section-title">
                North Texas Irrigation Systems Require Adjustments{' '}
                <em>Throughout the Year</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns reviews historical weather patterns, plant watering requirements, soil structure, precipitation rates, and seasonal conditions before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Each irrigation zone is designed to meet the specific watering needs of each area. We do not program all zones identically with the same runtimes. This applies equally to seasonal adjustments — each zone is adjusted based on its specific conditions throughout the year.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Why seasonal maintenance is critical in North Texas:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                {whyMatters.map(w => (
                  <div key={w.t} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: w.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0, marginTop:'8px' }} />
                    <span style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.65 }}>{w.t}</span>
                  </div>
                ))}
              </div>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Two of the most common issues we find are identical runtimes across all zones and the lack of seasonal adjustments. Overwatering leads to shallow root systems, root rot, and increased water bills.
                </p>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Seasonal irrigation system inspection and adjustment for a North Texas residential landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* FOUR SEASONS */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Seasonal Irrigation Services</span>
            <h2 className="section-title">
              Complete Seasonal Coverage for <em>North Texas Irrigation Systems</em>
            </h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Sprinklers and Lawns provides seasonal maintenance services throughout the year to ensure your irrigation system performs correctly in every North Texas season.
            </p>
          </div>

          <div className="grid-2" style={{ gap:'28px' }}>
            {/* Spring */}
            <div className="card" style={{ borderTop:'4px solid var(--green)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                <div style={{ fontSize:'28px' }}>🌱</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--green-dark)' }}>Spring Startup</h3>
              </div>
              <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'14px', lineHeight:1.7 }}>
                Spring is the most important time for irrigation system evaluation. After winter, systems need a full inspection before the high-demand summer season begins.
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {springItems.map(i => (
                  <li key={i} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Summer */}
            <div className="card" style={{ borderTop:'4px solid var(--blue)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                <div style={{ fontSize:'28px' }}>☀️</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--blue-deeper)' }}>Summer Adjustments</h3>
              </div>
              <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'14px', lineHeight:1.7 }}>
                North Texas summers place maximum demand on irrigation systems. Proper programming adjustments during peak heat protect your landscape and control water usage.
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {summerItems.map(i => (
                  <li key={i} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--blue-dark)', fontWeight:700, flexShrink:0 }}>✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fall */}
            <div className="card" style={{ borderTop:'4px solid var(--brown)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                <div style={{ fontSize:'28px' }}>🍂</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--brown)' }}>Fall Preparation</h3>
              </div>
              <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'14px', lineHeight:1.7 }}>
                Fall is the time to prepare your irrigation system for winter. Addressing issues before freezing temperatures arrive protects components and reduces repair costs.
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {fallItems.map(i => (
                  <li key={i} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--brown)', fontWeight:700, flexShrink:0 }}>✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Winter */}
            <div className="card" style={{ borderTop:'4px solid var(--green-dark)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                <div style={{ fontSize:'28px' }}>❄️</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--green-dark)' }}>Winter Monitoring</h3>
              </div>
              <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'14px', lineHeight:1.7 }}>
                North Texas winters require active monitoring of irrigation systems. Freeze events can occur quickly and proper sensor calibration is essential for system protection.
              </p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                {winterItems.map(i => (
                  <li key={i} style={{ display:'flex', gap:'8px', fontSize:'14px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--green-dark)', fontWeight:700, flexShrink:0 }}>✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP ROOT GROWTH SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Properly maintained irrigation system supporting deep root growth in a North Texas landscape" />
            </div>
            <div>
              <span className="eyebrow">The Goal of Seasonal Maintenance</span>
              <h2 className="section-title">
                Seasonal Adjustments Support <em>Deep Root Growth</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                The goal is deep root growth. A deeper root system improves drought resistance and strengthens freeze protection. Proper watering protects natural resources and preserves your landscape investment.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Overwatering leads to shallow root systems. It creates conditions for root rot and pathogens. It increases water bills and weakens grass and ornamentals.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Sprinklers and Lawns evaluates code compliance, coverage efficiency, controller programming, zone performance, and equipment condition during every seasonal maintenance visit. Most irrigation assessments take less than one hour. A detailed corrective estimate is provided promptly.
              </p>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Landscapes change and irrigation must adjust. Plants grow beyond their intended size. Trees are removed. Outdoor living areas are added. New planting beds are created. Seasonal maintenance ensures your system responds correctly to these changes.
                </p>
              </div>
              <div style={{ marginTop:'24px' }}>
                <Link href="/contact" className="btn-primary">Schedule Seasonal Maintenance</Link>
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
            Seasonal Maintenance Throughout <em>North Texas</em>
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Seasonal Irrigation Maintenance</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Keep Your Irrigation System Performing Correctly{' '}
            <em style={{ color:'var(--green-light)' }}>Through Every North Texas Season</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule seasonal irrigation maintenance in Dallas Fort Worth. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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
