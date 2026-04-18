import Link from 'next/link';

export const metadata = {
  title: 'Irrigation Services Dallas Fort Worth | Sprinklers and Lawns',
  description: 'Full service irrigation solutions for North Texas homes. Sprinkler repair, installation, smart controllers, and seasonal maintenance. Family-owned. License #8146. Call (972) 755-9019.',
  keywords: 'irrigation services Dallas, sprinkler repair DFW, sprinkler installation North Texas, irrigation company Dallas Fort Worth',
  alternates: { canonical: 'https://sprinklersandlawns.com' },
};

/* ─ Unique Unsplash images for HOME only ─ */
const HERO_IMG    = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&fit=crop';
const ABOUT_IMG   = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85&fit=crop';
const LAWN_IMG    = 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=900&q=85&fit=crop';
const PROCESS_IMG = 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=85&fit=crop';

const services = [
  { color:'green', href:'/sprinkler-repair',           title:'Sprinkler Repair',           desc:'Quick diagnosis and reliable repair of broken heads, valves, wiring, pipe breaks, and leaks. Full system check included.' },
  { color:'green', href:'/sprinkler-installation',     title:'Sprinkler Installation',     desc:'Custom-designed irrigation systems priced by heads — not zones — to ensure proper coverage across your landscape.' },
  { color:'blue',  href:'/irrigation-design',          title:'Irrigation Design',           desc:'Professional design with hydrozone planning, material take-off sheets, and code-compliant layouts for every property.' },
  { color:'green', href:'/smart-controllers',          title:'Smart Controllers',           desc:'Weather-based controllers that auto-adjust schedules, reduce water waste, and connect to your phone remotely.' },
  { color:'green', href:'/rain-freeze-sensors',        title:'Rain & Freeze Sensors',       desc:'Code-required sensors that automatically shut off irrigation during rainfall or freezing temperatures.' },
  { color:'blue',  href:'/electrical-troubleshooting', title:'Electrical Troubleshooting',  desc:'Accurate diagnosis of wiring faults, short circuits, solenoid failures, and lightning damage. No guesswork.' },
  { color:'green', href:'/head-replacement',           title:'Head Replacement',            desc:'Replacement of worn or damaged heads using water-efficient models with proper alignment for even distribution.' },
  { color:'brown', href:'/seasonal-maintenance',       title:'Seasonal Maintenance',        desc:'Scheduled inspections, programming adjustments, and system checks for year-round North Texas performance.' },
];

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

const installPricing = [
  ['4-zone system', '$4,300 – $4,900'],
  ['6-zone system', '$6,400 – $7,100'],
  ['8-zone system', '$8,100 – $8,500'],
];

const whyChoose = [
  'Locally owned and operated',
  'Serving Dallas since 1980',
  'Texas A&M Horticulture graduate',
  'Irrigation License number 8146',
  'One-year warranty on parts and labor',
  'Same-day or next-day service available',
  'Online booking and multiple payment options',
  'Deep understanding of DFW soil and climate',
];

const areas = ['Lake Highlands','Lakewood','Park Cities','Preston Hollow','Plano','Frisco','McKinney','Allen','Richardson','Garland','Carrollton','Irving','Rowlett','Wylie','Lewisville','Flower Mound'];

const IcoSvg = ({ path, path2 }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path}/>{path2 && <path d={path2}/>}
  </svg>
);

const svcIcons = {
  green: <IcoSvg path="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  blue:  <IcoSvg path="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  brown: <IcoSvg path="M12 2v20M2 12h20" />,
};

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="page-hero" style={{ minHeight: '600px' }}>
        <img src={HERO_IMG} alt="Professional sprinkler system watering a lush green North Texas lawn" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'104px 28px' }}>
          <div style={{ maxWidth:'600px' }}>
            <div className="eyebrow" style={{ color:'var(--green-light)', marginBottom:'18px' }}>
              Dallas · Fort Worth · North Texas
            </div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,5vw,62px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'20px' }}>
              Irrigation Services in{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas, Fort Worth,</em>{' '}
              and Surrounding Areas
            </h1>
            <p style={{ fontSize:'18px', color:'rgba(255,255,255,.82)', lineHeight:1.76, marginBottom:'12px', maxWidth:'520px' }}>
              Keeping a lawn healthy in North Texas takes more than turning on sprinklers. It requires local knowledge, proper system design, and consistent maintenance.
            </p>
            <p style={{ fontSize:'16px', color:'rgba(255,255,255,.65)', marginBottom:'36px', maxWidth:'500px' }}>
              Sprinklers and Lawns is a family-owned irrigation company serving Dallas, Plano, McKinney, Frisco, Flower Mound, Allen, Rockwall, Rowlett, and surrounding communities.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Free Quote</Link>
            </div>
            <div style={{ display:'flex', gap:'22px', marginTop:'28px', flexWrap:'wrap' }}>
              {['License #8146','1-Year Warranty','Same-Day Service','25+ Years Exp.'].map(t=>(
                <span key={t} style={{ fontSize:'13px', color:'rgba(255,255,255,.65)', display:'flex', alignItems:'center', gap:'5px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR — green bg ══ */}
      <section style={{ background:'var(--green)', color:'white' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[
              { n:'25+',    l:'Years of Experience' },
              { n:'1980',   l:'Serving Dallas Since' },
              { n:'#8146',  l:'TX Irrigation License' },
              { n:'1-Year', l:'Warranty on Parts & Labor' },
            ].map((s,i)=>(
              <div key={s.l} style={{ padding:'28px 20px', textAlign:'center', borderRight: i<3 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'38px', fontWeight:400, color:'white', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,.72)', marginTop:'6px', fontWeight:500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT SPLIT — white bg ══ */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div style={{ position:'relative' }}>
              <div className="img-card" style={{ aspectRatio:'4/3' }}>
                <img src={ABOUT_IMG} alt="Joe Davis, owner of Sprinklers and Lawns, assessing an irrigation system in a North Texas garden" />
              </div>
              {/* Brown badge from logo */}
              <div style={{ position:'absolute', bottom:'-18px', right:'-10px', background:'var(--brown)', color:'white', padding:'14px 20px', borderRadius:'var(--r-md)', boxShadow:'var(--sh-md)' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'15px', fontWeight:400 }}>Texas A&M</div>
                <div style={{ fontSize:'12px', opacity:.85 }}>B.S. Horticulture, 1989</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Full Service Irrigation Solutions for North Texas Homes</span>
              <h2 className="section-title">Family Owned. Professionally Managed. <em>Locally Experienced.</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns has provided irrigation services for over 25 years. Joe Davis oversees daily operations. He earned a Bachelor of Science in Horticulture from Texas A&amp;M in 1989 and completed an internship with the Texas Extension State Office under Doug Welch, Director of Xeriscape.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Our company is built on honest work, dependable service, long-term relationships, and water-efficient practices rooted in horticulture science.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'32px', fontSize:'17px' }}>
                Whether you need a small sprinkler repair or a complete irrigation installation, every job receives the same level of care and attention to detail.
              </p>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/about" className="btn-primary">Meet Joe Davis</Link>
                <Link href="/contact" className="btn-secondary">Get Free Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES 4×2 — off-white bg ══ */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'56px' }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Professional Irrigation <em>Repairs and Installations</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Every job receives the same level of care and attention to detail — from small sprinkler repairs to complete irrigation installations across Dallas-Fort Worth.
            </p>
          </div>
          <div className="grid-4">
            {services.map(svc=>(
              <Link key={svc.href} href={svc.href} className="card" style={{ display:'flex', flexDirection:'column', textDecoration:'none' }}>
                <div className={`ico-${svc.color}`} style={{ marginBottom:'16px' }}>
                  {svcIcons[svc.color]}
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{svc.title}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, flex:1 }}>{svc.desc}</p>
                <span style={{ color:'var(--green)', fontSize:'13px', fontWeight:600, marginTop:'14px', display:'inline-flex', alignItems:'center', gap:'3px' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NORTH TEXAS CONDITIONS — white bg ══ */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Designed for North Texas Conditions</span>
              <h2 className="section-title">Irrigation Designed for <em>North Texas</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                North Texas landscapes present unique challenges. Summer heat stresses turf. Clay soils affect drainage. Watering requirements change throughout the year. Properties often include areas of full sun, heavy shade, slopes, and mixed plant materials which affects the watering requirements.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns reviews historical weather patterns, plants watering requirements, soil structure, precipitation rates, and seasonal conditions before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                <strong style={{ color:'var(--text)' }}>Each irrigation zone is designed to meet the specific watering needs of each area.</strong> We do not program all zones identically with the same runtimes.
              </p>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Two of the most common issues: <strong>identical runtimes across all zones</strong> and <strong>lack of seasonal adjustments</strong>. Overwatering leads to shallow root systems, root rot, and increased water bills.
                </p>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={LAWN_IMG} alt="Lush healthy green lawn in North Texas maintained by a professionally designed irrigation system" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ LANDSCAPES CHANGE — off-white bg ══ */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={PROCESS_IMG} alt="Irrigation technician reviewing sprinkler system programming in a Dallas Fort Worth residential property" />
            </div>
            <div>
              <span className="eyebrow">Landscapes Change and Irrigation Must Adjust</span>
              <h2 className="section-title">When to Schedule <em>Irrigation Service</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Landscapes evolve. Plants grow beyond their intended size. Trees are removed. Outdoor living areas are added. New planting beds are created.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Common issues include perennials and annuals sharing the same zone, shaded areas becoming full sun, and hardscape receiving spray, which violates current city codes.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'22px', fontSize:'17px' }}>
                You should schedule an irrigation inspection when you notice dry spots or uneven watering. Other signs include grass growing faster in certain areas, puddles or runoff, soil erosion, and sudden increases in your water bill.
              </p>
              <ul className="check-list">
                {[
                  'Sprinkler heads that do not pop up or spray straight up',
                  'Overspray hitting sidewalks or driveways (code violation)',
                  'Zones that will not turn on or shut off',
                  'Visible leaks or water pooling around valves',
                  'Addressing concerns early reduces repair costs',
                ].map(i=><li key={i}>{i}</li>)}
              </ul>
              <div style={{ marginTop:'28px' }}>
                <a href="tel:9727559019" className="btn-primary">📞 Schedule Service Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REPAIR PROCESS 4 CARDS — white bg ══ */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Professional Irrigation Repairs and Installations</span>
            <h2 className="section-title">What Happens During <em>Your Service Call</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Many irrigation repairs result from broken heads, damaged valves, cut wires, pipe breaks, aeration damage, or other contractors accidentally striking lines.
            </p>
          </div>
          <div className="grid-4">
            {[
              { c:'var(--green)',       n:'01', t:'Full System Check',      d:'Our technician performs a full system check upon arrival. For systems with up to six zones, most adjustments can be completed within the first hour.' },
              { c:'var(--green-dark)',  n:'02', t:'Coverage Adjusted',      d:'We adjust spray coverage, unclog nozzles, inspect valves, test rain and freeze sensors, and review controller programming.' },
              { c:'var(--blue-dark)',   n:'03', t:'Transparent Estimate',   d:'Repairs are billed on a time-and-materials basis. Work begins only after authorization. You will always know the cost before repairs proceed.' },
              { c:'var(--green-deeper)',n:'04', t:'Authorized Repair',      d:'If additional issues are discovered during the repair, the technician will stop and review the situation with you before continuing.' },
            ].map(s=>(
              <div key={s.n} className="card" style={{ textAlign:'center' }}>
                <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:s.c, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize:'18px', fontWeight:400, margin:'0 auto 16px' }}>{s.n}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{s.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING — off-white bg ══ */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-title">Common Irrigation <em>Repair Pricing</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Repairs are billed on a time-and-materials basis. Work begins only after authorization. You will always know the cost before repairs proceed.
            </p>
          </div>
          <div className="grid-2" style={{ alignItems:'start' }}>
            <div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'19px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>Repair Services</h3>
              <div className="pricing-table">
                <table>
                  <thead><tr><th>Repair Service</th><th style={{textAlign:'right'}}>Price Range</th></tr></thead>
                  <tbody>{repairPricing.map(([s,p])=><tr key={s}><td>{s}</td><td className="price-val">{p}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'19px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>New System Installation</h3>
              <div className="pricing-table">
                <table>
                  <thead><tr><th>System Size</th><th style={{textAlign:'right'}}>Price Range</th></tr></thead>
                  <tbody>{installPricing.map(([s,p])=><tr key={s}><td>{s}</td><td className="price-val">{p}</td></tr>)}</tbody>
                </table>
              </div>
              <div className="info-green" style={{ marginTop:'18px' }}>
                <p style={{ fontSize:'14px', color:'var(--green-deeper)', fontWeight:600, marginBottom:'6px' }}>💡 How We Price Installations</p>
                <p style={{ fontSize:'14px', color:'var(--green-deeper)' }}>Installation pricing depends on the number of heads, zones, meter size, boring requirements, and water pressure. We price installations based on the number of heads to ensure proper coverage rather than simply counting zones.</p>
              </div>
              <div className="info-blue" style={{ marginTop:'14px' }}>
                <p style={{ fontSize:'14px', color:'var(--blue-deeper)', fontWeight:600, marginBottom:'6px' }}>🌐 Smart Irrigation Controller Upgrades</p>
                <p style={{ fontSize:'14px', color:'var(--blue-deeper)' }}>Sprinklers and Lawns installs smart irrigation controllers that automatically adjust watering based on weather conditions. These controllers reduce water waste and lower monthly utility costs. They also allow remote control from your phone when connected to wifi. Over time, many smart controllers pay for themselves through water savings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE — white bg ══ */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-title">Why Choose <em>Sprinklers and Lawns</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                Before any repair or installation begins, the scope of work is clearly explained. Authorization is obtained. Pricing options are discussed in advance. If additional issues are discovered during the repair, the technician will stop and review the situation with you before continuing. You remain in control of the decision process at every step.
              </p>
              <ul className="check-list">
                {whyChoose.map(i=><li key={i}>{i}</li>)}
              </ul>
              <div style={{ marginTop:'28px' }}>
                <Link href="/about" className="btn-primary">Meet Joe Davis</Link>
              </div>
            </div>

            {/* Blue secondary card */}
            <div style={{ background:'var(--blue-deeper)', borderRadius:'var(--r-xl)', padding:'44px 38px', color:'white' }}>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'white', marginBottom:'10px' }}>
                Transparent Service from Start to Finish
              </h3>
              <p style={{ fontSize:'15px', color:'rgba(255,255,255,.78)', marginBottom:'28px', lineHeight:1.76 }}>
                Before any repair or installation begins, the scope of work is clearly explained. Authorization is obtained. Pricing options are discussed in advance.
              </p>
              {[['📋','Scope explained upfront'],['✅','Authorization before every repair'],['💬','Pricing discussed in advance'],['🔒','No hidden charges — ever'],['🛡️','1-year warranty on all parts & labor']].map(([ic,t])=>(
                <div key={t} style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'14px' }}>
                  <span style={{ fontSize:'18px' }}>{ic}</span>
                  <span style={{ fontSize:'16px', color:'rgba(255,255,255,.90)' }}>{t}</span>
                </div>
              ))}
              <div style={{ borderTop:'1px solid rgba(255,255,255,.16)', paddingTop:'24px', marginTop:'10px' }}>
                <a href="tel:9727559019" style={{ display:'block', background:'white', color:'var(--blue-deeper)', fontFamily:'var(--sans)', fontWeight:700, fontSize:'18px', padding:'14px', borderRadius:'var(--r-md)', textAlign:'center', textDecoration:'none' }}>
                  📞 (972) 755-9019
                </a>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,.5)', textAlign:'center', marginTop:'8px' }}>Same-day or next-day service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREAS — off-white bg ══ */}
      <section className="section-sm bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'32px' }}>
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-title">Proudly Serving <em>North Texas</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Sprinklers and Lawns proudly serves the following communities. Because we work exclusively in North Texas, we understand the seasonal changes and soil conditions that affect irrigation systems year-round.
            </p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center', marginBottom:'20px' }}>
            {areas.map(a=>(
              <span key={a} style={{ background:'white', border:'1px solid var(--gray-100)', color:'var(--text-muted)', padding:'7px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500 }}>{a}</span>
            ))}
          </div>
          <p style={{ textAlign:'center', fontSize:'15px', color:'var(--text-muted)', fontWeight:500 }}>
            Dallas County · Tarrant County · Denton County · Rockwall County
          </p>
        </div>
      </section>

      {/* ══ CTA — green bg ══ */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Your Irrigation Assessment</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4vw,48px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            If Your Irrigation System Needs Attention,<br />
            <em style={{ color:'var(--green-light)' }}>Schedule a Professional Service Check Today</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call 972-755-9019 to schedule your irrigation service call in Dallas-Fort Worth. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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
