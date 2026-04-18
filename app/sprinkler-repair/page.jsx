import Link from 'next/link';

export const metadata = {
  title: 'Sprinkler Repair Dallas Fort Worth | Sprinklers and Lawns',
  description: 'Professional irrigation repair services in Dallas-Fort Worth. Broken heads, damaged valves, wiring issues, leaks, and controller malfunctions. Licensed. 1-year warranty. Call (972) 755-9019.',
  alternates: { canonical: 'https://sprinklersandlawns.com/sprinkler-repair' },
};

/* Unique images for REPAIR — none repeated from other pages */
const HERO_IMG   = 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1600&q=85&fit=crop';
const REPAIR_IMG = 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=85&fit=crop';
const VALVE_IMG  = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&fit=crop';

const repairPricing = [
  ['Spray head replacement',        '$15 – $35'],
  ['Rotor head replacement',        '$35 – $65'],
  ['1-inch valve replacement',      '$325 – $375'],
  ['Solenoid replacement',          '$185 – $250'],
  ['Controller replacement',        '$350 – $600'],
  ['Wireless rain/freeze sensor',   '$375'],
  ['Leak repair (under 1-in pipe)', '$150 – $200'],
  ['Zone reroute',                  '$900 – $1,200'],
  ['Add new zone',                  '$1,300 – $1,500'],
];

const problems = [
  { c:'green', t:'Broken or Misaligned Sprinkler Heads', d:'Broken heads cause dry spots and water pooling. We replace faulty heads and realign for proper coverage across all zones.' },
  { c:'green', t:'Clogged Nozzles',                      d:'Debris and mineral buildup block nozzles. We clean or replace nozzles to restore even water distribution.' },
  { c:'blue',  t:'Leaking Underground Pipes',            d:'Soil movement, root intrusion, and aging pipes cause underground leaks that raise water bills and damage your lawn.' },
  { c:'brown', t:'Stuck or Faulty Valves',               d:'Valves that stick open or fail to open cause zones to flood or receive no water at all.' },
  { c:'blue',  t:'Electrical and Wiring Issues',         d:'Cut wires, lightning damage, and corroded connections stop zones from operating correctly.' },
  { c:'green', t:'Controller Malfunctions',              d:'Failed controllers result in zones not running or running at wrong times. We diagnose and replace as needed.' },
];

const causes = ['Broken heads from mowing or foot traffic','Damaged valves from age or water pressure','Cut wires from aeration or other contractors','Pipe breaks from freezing temperatures','Aeration damage to underground components','Root intrusion into pipes and valves','Lightning damage to electrical components','Soil movement and settling over time'];

export default function SprinklerRepairPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={HERO_IMG} alt="Irrigation sprinkler system operating in a well-maintained green lawn in Dallas Fort Worth" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Sprinkler Repair</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Irrigation Repair Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Irrigation Repair Services <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Professional irrigation repair services that protect your landscape, your property, and your water usage. In North Texas, extreme temperatures, shifting soils, and aging systems can quickly turn small irrigation issues into costly problems.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Book Service Online</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Licensed #8146','1-Year Warranty','Same-Day Service'].map(t=>(
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'5px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Irrigation Repairs Matter</span>
              <h2 className="section-title">Small Issues Become <em>Costly Problems</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Irrigation systems operate under constant stress. Temperature changes expand and contract pipes. Soil movement shifts underground components. Aging systems lose efficiency. Weather conditions increase system strain.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Even minor issues can lead to water waste, landscape damage, and rising utility costs if not addressed early. Addressing concerns early reduces repair costs and prevents long-term damage to your lawn and foundation.
              </p>
              <div className="grid-2" style={{ gap:'12px', marginBottom:'20px' }}>
                {[['💧','Water leaks cause soil erosion'],['🌱','Overwatering damages turf and plants'],['🌿','Underwatering weakens root systems'],['🏠','Dry soil near foundations causes structural concerns']].map(([ic,txt])=>(
                  <div key={txt} style={{ display:'flex', gap:'10px', alignItems:'flex-start', padding:'12px', background:'var(--off-white)', borderRadius:'var(--r-md)', border:'1px solid var(--gray-100)' }}>
                    <span style={{ fontSize:'18px', flexShrink:0 }}>{ic}</span>
                    <span style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.6 }}>{txt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={REPAIR_IMG} alt="Licensed irrigation technician performing a professional sprinkler system repair in Dallas Texas" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS 3 COLS */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">What We Fix</span>
            <h2 className="section-title">Common Irrigation <em>Problems We Fix</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>Sprinklers and Lawns repairs all major irrigation issues across Dallas-Fort Worth.</p>
          </div>
          <div className="grid-3">
            {problems.map(p=>(
              <div key={p.t} className="card">
                <div className={`ico-${p.c}`} style={{ marginBottom:'14px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{p.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + CAUSES SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'64px' }}>
            <div>
              <span className="eyebrow">Our Process</span>
              <h2 className="section-title">Our Irrigation <em>Repair Process</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                Sprinklers and Lawns focuses on accurate diagnosis before any repair is made. Our technician performs a full system check upon arrival. For systems with up to six zones, most adjustments can be completed within the first hour. During this time, we adjust spray coverage, unclog nozzles, inspect valves, test rain and freeze sensors, and review controller programming.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                {[
                  { n:'01', c:'var(--green)',        t:'Full System Inspection', d:'We inspect the entire irrigation system and identify the root cause — not just the visible symptom.' },
                  { n:'02', c:'var(--green-dark)',   t:'Accurate Diagnosis',     d:'We do not guess. We test system performance and identify exactly what needs repair.' },
                  { n:'03', c:'var(--blue-dark)',    t:'Transparent Estimate',   d:'We provide clear repair options and pricing before any work begins. You always know the cost.' },
                  { n:'04', c:'var(--green-deeper)', t:'Authorized Repair',      d:'Work begins only after your approval. Repairs are done correctly the first time.' },
                ].map(s=>(
                  <div key={s.n} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                    <div style={{ width:'42px', height:'42px', borderRadius:'50%', background:s.c, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize:'16px', fontWeight:400, flexShrink:0 }}>{s.n}</div>
                    <div>
                      <h4 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'4px' }}>{s.t}</h4>
                      <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
              <div className="img-card" style={{ aspectRatio:'4/3' }}>
                <img src={VALVE_IMG} alt="Irrigation valve and pipe system for a residential sprinkler installation in North Texas" />
              </div>
              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>Common Causes of Irrigation System Failure</h3>
                <ul className="check-list">{causes.map(c=><li key={c}>{c}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WARRANTY BANNER */}
      <section style={{ background:'var(--green)', padding:'48px 0' }}>
        <div className="container">
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'24px' }}>
            <div>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'white', marginBottom:'6px' }}>Warranty Backed Work</h3>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,.78)', maxWidth:'560px', lineHeight:1.7 }}>
                All irrigation repair services include a one-year warranty on parts and labor. This ensures reliability and gives homeowners confidence that repairs are built to last.
              </p>
            </div>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'14px 28px', flexShrink:0 }}>📞 (972) 755-9019</a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'44px' }}>
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-title">Common Irrigation <em>Repair Pricing</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>Repairs are billed on a time-and-materials basis. Work begins only after authorization. You will always know the cost before repairs proceed.</p>
          </div>
          <div style={{ maxWidth:'700px', margin:'0 auto' }}>
            <div className="pricing-table">
              <table>
                <thead><tr><th>Repair Service</th><th style={{textAlign:'right'}}>Price Range</th></tr></thead>
                <tbody>{repairPricing.map(([s,p])=><tr key={s}><td>{s}</td><td className="price-val">{p}</td></tr>)}</tbody>
              </table>
            </div>
            <p style={{ fontSize:'14px', color:'var(--text-muted)', textAlign:'center', marginTop:'14px' }}>Pricing is for reference. Final pricing is confirmed after on-site diagnosis. No work begins without your approval.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE 4 COLS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'44px' }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why Choose <em>Sprinklers and Lawns</em></h2>
          </div>
          <div className="grid-4">
            {[
              { ic:'🪪', c:'var(--green)',      t:'Licensed Professionals',  d:'All repairs performed by licensed irrigation professionals. License #8146.' },
              { ic:'🔍', c:'var(--green-dark)', t:'Accurate Diagnostics',    d:'We do not guess. We test and diagnose before recommending any repairs.' },
              { ic:'💬', c:'var(--blue-dark)',  t:'Transparent Pricing',     d:'Every cost is discussed before work begins. No hidden charges — ever.' },
              { ic:'🛡️', c:'var(--brown)',      t:'1-Year Warranty',         d:'All parts and labor are backed by a full one-year warranty.' },
            ].map(i=>(
              <div key={i.t} className="card" style={{ textAlign:'center' }}>
                <div style={{ fontSize:'30px', marginBottom:'12px' }}>{i.ic}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:i.c, marginBottom:'8px' }}>{i.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="section-sm bg-soft">
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'24px', fontWeight:400, color:'var(--text)', marginBottom:'10px' }}>Irrigation Repair <em>Service Areas</em></h2>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'20px' }}>Serving Dallas County · Tarrant County · Denton County · Rockwall County — including:</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            {['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton','Rowlett','Wylie'].map(c=>(
              <span key={c} style={{ background:'white', border:'1px solid var(--gray-100)', color:'var(--text-muted)', padding:'6px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500 }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'14px' }}>
            Schedule Irrigation Repair <em style={{ color:'var(--green-light)' }}>Service Today</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'520px', margin:'0 auto 32px', lineHeight:1.76 }}>
            Call (972) 755-9019 to request irrigation repair service in Dallas Fort Worth. Sprinklers and Lawns delivers accurate repairs, efficient performance, and long term reliability.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 32px' }}>📞 Call (972) 755-9019</a>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 32px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
