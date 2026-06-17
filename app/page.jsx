import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Irrigation Services Dallas-Ft. Worth | Sprinklers and Lawns',
  description: 'Full service irrigation solutions for North Texas homes. Sprinkler repair, installation, smart controllers, and seasonal maintenance. Family-owned. License #8146. Call (972) 755-9019.',
  keywords: 'irrigation services Dallas, sprinkler repair DFW, sprinkler installation North Texas, irrigation company Dallas-Ft. Worth',
  alternates: { canonical: 'https://sprinklersandlawns.com' },
};

const stats = [
  { number:'25+',   label:'Years of Experience' },
  { number:'1980',  label:'Serving Dallas Since' },
  { number:'#8146', label:'Irrigation License' },
  { number:'1-Year',label:'Warranty on Parts & Labor' },
];

const services = [
  { icon:'🔧', title:'Sprinkler Repair',           href:'/sprinkler-repair',          desc:'Quick diagnosis and reliable repair of broken heads, valves, wiring, and leaks. Full system check included.' },
  { icon:'⚙️', title:'Sprinkler Installation',     href:'/sprinkler-installation',    desc:'Custom-designed irrigation systems for North Texas properties. Priced by heads — not just zones — for proper coverage.' },
  { icon:'📱', title:'Smart Controllers',           href:'/smart-controllers',         desc:'Weather-based smart controllers that automatically adjust schedules, reduce water waste, and lower monthly bills.' },
  { icon:'📐', title:'Irrigation Design',           href:'/irrigation-design',         desc:'Professional irrigation design with hydrozone planning, material take-off sheets, and code-compliant system layouts.' },
  { icon:'🌧️', title:'Rain & Freeze Sensors',      href:'/rain-freeze-sensors',       desc:'Code-required sensors that automatically shut off irrigation during rainfall or freezing temperatures.' },
  { icon:'⚡', title:'Electrical Troubleshooting',  href:'/electrical-troubleshooting',desc:'Accurate diagnosis of wiring faults, short circuits, solenoid failures, and lightning damage — without guesswork.' },
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

const repairPricing = [
  ['Spray head replacement',      '$15 – $35'],
  ['Rotor head replacement',      '$35 – $65'],
  ['1-inch valve replacement',    '$325 – $375'],
  ['Solenoid replacement',        '$185 – $250'],
  ['Controller replacement',      '$350 – $600'],
  ['Wireless rain/freeze sensor', '$375'],
  ['Leak repair (under 1-inch)',  '$150 – $200'],
  ['Zone reroute',                '$900 – $1,200'],
  ['Add new zone',                '$1,300 – $1,500'],
];

const installPricing = [
  ['4-zone system', '$4,300 – $4,900'],
  ['6-zone system', '$6,400 – $7,100'],
  ['8-zone system', '$8,100 – $8,500'],
];

const serviceAreas = [
  'Lake Highlands','Lakewood','Park Cities','Preston Hollow',
  'Plano','Frisco','McKinney','Allen','Richardson','Garland',
  'Carrollton','Irving','Rowlett','Wylie','Lewisville','Flower Mound',
];

const pricingTableStyle = {
  width:'100%', borderCollapse:'collapse', fontSize:'14px',
};
const thStyle = {
  padding:'10px 14px', textAlign:'left', fontSize:'12px', fontWeight:700,
  textTransform:'uppercase', letterSpacing:'.06em', color:'var(--text-muted)',
  borderBottom:'2px solid var(--gray-100)', background:'var(--off-white)',
};
const tdStyle = {
  padding:'10px 14px', borderBottom:'1px solid var(--gray-100)', color:'var(--text-muted)',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:'relative', minHeight:'560px', display:'flex', alignItems:'center', overflow:'hidden', background:'#0a1f10' }}>
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&fit=crop"
          alt="Sprinkler system watering a green North Texas lawn"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.32 }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(10,31,16,.92) 0%, rgba(10,31,16,.5) 100%)' }} />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'80px 24px' }}>
          <div style={{ maxWidth:'620px' }}>
            <span className="eyebrow" style={{ color:'var(--green-light)', background:'rgba(74,144,32,.15)', border:'1px solid rgba(74,144,32,.3)' }}>
              Dallas-Ft. Worth Irrigation Experts
            </span>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(34px,5vw,58px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'20px', marginTop:'14px' }}>
              Irrigation Services in<br />
              <em style={{ color:'var(--green-light)' }}>Dallas-Ft. Worth</em><br />
              and Surrounding Areas
            </h1>
            <p style={{ fontSize:'18px', color:'rgba(255,255,255,.75)', lineHeight:1.65, marginBottom:'32px', maxWidth:'520px' }}>
              Full service irrigation solutions for North Texas homes. Family-owned and locally experienced since 1980.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-primary" style={{ fontSize:'16px', padding:'14px 28px' }}>📞 Call (972) 755-9019</a>
              <Link href="/book" className="btn-white" style={{ fontSize:'16px', padding:'14px 28px' }}>📅 Book Now</Link>
              <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'8px', border:'2px solid rgba(255,255,255,.4)', color:'white', fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, padding:'13px 24px', borderRadius:'var(--r-md)', textDecoration:'none' }}>
                Free Quote
              </Link>
            </div>
            <div style={{ display:'flex', gap:'24px', marginTop:'24px', flexWrap:'wrap' }}>
              {['License #8146','1-Year Warranty','Same-Day Service'].map(t => (
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'6px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)' }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background:'var(--green-deeper)', color:'white', padding:'0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))' }}>
            {stats.map((s,i) => (
              <div key={s.label} style={{ padding:'24px 20px', textAlign:'center', borderRight: i<3 ? '1px solid rgba(255,255,255,.1)' : 'none', borderBottom:'1px solid rgba(255,255,255,.1)' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'30px', fontWeight:400, color:'white' }}>{s.number}</div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,.6)', marginTop:'4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Full Service Irrigation Solutions for North Texas Homes</span>
              <h2 className="section-title">Family Owned. Professionally Managed. <em>Locally Experienced.</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Keeping a lawn healthy in North Texas takes more than turning on sprinklers. It requires local knowledge, proper system design, and consistent maintenance. Sprinklers and Lawns is a family-owned irrigation company serving Dallas-Ft. Worth and surrounding communities.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns has provided irrigation services for over 25 years. Joe Davis oversees daily operations. He earned a Bachelor of Science in Horticulture from Texas A&amp;M in 1989 and completed an internship with the Texas Extension State Office under Doug Welch, Director of Xeriscape.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                We help homeowners and property managers maintain green, healthy lawns while watering responsibly and reducing unnecessary water waste.
              </p>
              <Link href="/about" className="btn-secondary">Learn About Us</Link>
            </div>
            <div style={{ position:'relative' }}>
              <div style={{ borderRadius:'var(--r-xl)', overflow:'hidden', border:'4px solid var(--green-light)', boxShadow:'var(--sh-lg)', aspectRatio:'4/3', background:'var(--gray-50)', position:'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=85&fit=crop"
                  alt="Joe Davis, owner of Sprinklers and Lawns, inspecting an irrigation system in North Texas"
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                />
              </div>
              {/* Badge below image not covering face */}
              <div style={{ background:'var(--brown)', color:'white', padding:'12px 20px', borderRadius:'var(--r-md)', boxShadow:'var(--sh-md)', marginTop:'12px', display:'inline-block' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'18px', fontWeight:400 }}>Texas A&amp;M</div>
                <div style={{ fontSize:'13px', opacity:.85 }}>B.S. Horticulture, 1989</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Professional Irrigation Repairs and Installations</h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Every job receives the same level of care and attention to detail — from small sprinkler repairs to complete irrigation installations.
            </p>
          </div>
          <div className="grid-3">
            {services.map(svc => (
              <Link key={svc.href} href={svc.href} className="card" style={{ textDecoration:'none', display:'flex', flexDirection:'column' }}>
                <div className="ico-green" style={{ marginBottom:'16px' }}>
                  <span style={{ fontSize:'24px' }}>{svc.icon}</span>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{svc.title}</h3>
                <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.6, flex:1 }}>{svc.desc}</p>
                <div style={{ display:'inline-flex', alignItems:'center', gap:'4px', color:'var(--green)', fontSize:'14px', fontWeight:600, marginTop:'14px' }}>
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NORTH TEXAS CONDITIONS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85&fit=crop" alt="Lush green North Texas lawn maintained by professional irrigation" />
            </div>
            <div>
              <span className="eyebrow">Designed for North Texas Conditions</span>
              <h2 className="section-title">Irrigation Designed for <em>North Texas</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                North Texas landscapes present unique challenges. Summer heat stresses turf. Clay soils affect drainage. Watering requirements change throughout the year. Properties often include areas of full sun, heavy shade, slopes, and mixed plant materials.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns reviews historical weather patterns, plant watering requirements, soil structure, precipitation rates, and seasonal conditions before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                <strong>Each irrigation zone is designed to meet the specific watering needs of each area.</strong> We do not program all zones identically with the same runtimes.
              </p>
              <div className="info-blue">
                <p style={{ fontSize:'15px', color:'var(--blue-deeper)', fontWeight:500 }}>
                  Two of the most common issues we find: <strong>identical runtimes across all zones</strong> and <strong>lack of seasonal adjustments</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — equal columns */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-title">Common Irrigation <em>Repair Pricing</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Repairs are billed on a time-and-materials basis. Work begins only after authorization. You will always know the cost before repairs proceed.
            </p>
            <div style={{ background:'#fef9ec', border:'1px solid #f5c26e', borderRadius:'var(--r-md)', padding:'12px 20px', display:'inline-block', marginTop:'16px' }}>
              <p style={{ fontSize:'14px', color:'#7a4f00', margin:0 }}>
                <strong>Rate:</strong> 1 hour minimum at $135/hr, plus materials. Half-hour billing after first hour.
              </p>
            </div>
          </div>

          {/* Pricing — both columns EQUAL height */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'28px', alignItems:'start' }}>
            <div className="card">
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>Repair Services</h3>
              <table style={pricingTableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Service</th>
                    <th style={{ ...thStyle, textAlign:'right' }}>Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {repairPricing.map(([svc,price]) => (
                    <tr key={svc}>
                      <td style={tdStyle}>{svc}</td>
                      <td style={{ ...tdStyle, textAlign:'right', fontWeight:600, color:'var(--green-dark)' }}>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'18px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>New System Installation</h3>
                <table style={pricingTableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>System Size</th>
                      <th style={{ ...thStyle, textAlign:'right' }}>Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {installPricing.map(([size,price]) => (
                      <tr key={size}>
                        <td style={tdStyle}>{size}</td>
                        <td style={{ ...tdStyle, textAlign:'right', fontWeight:600, color:'var(--green-dark)' }}>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="info-green">
                <p style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--green-deeper)', marginBottom:'6px' }}>💡 How We Price Installations</p>
                <p style={{ fontSize:'14px', color:'var(--green-dark)', lineHeight:1.65 }}>
                  Installation pricing depends on the number of heads, zones, meter size, boring requirements, and water pressure. We price based on heads — not just zones — to ensure proper coverage.
                </p>
              </div>

              <div className="card" style={{ background:'var(--off-white)' }}>
                <p style={{ fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'6px' }}>Smart Irrigation Controller Upgrades</p>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>
                  Sprinklers and Lawns installs smart irrigation controllers that automatically adjust watering based on weather conditions. These controllers reduce water waste, lower monthly utility costs, and allow remote control from your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-title">Why Choose <em>Sprinklers and Lawns</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                Before any repair or installation begins, the scope of work is clearly explained. Authorization is obtained. Pricing options are discussed in advance. You remain in control of the decision process at every step.
              </p>
              <ul className="check-list">
                {whyChoose.map(item => <li key={item}>{item}</li>)}
              </ul>
              <div style={{ marginTop:'28px' }}>
                <Link href="/about" className="btn-primary">Meet Joe Davis</Link>
              </div>
            </div>
            <div style={{ background:'var(--green)', borderRadius:'var(--r-xl)', padding:'40px 36px', color:'white' }}>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, marginBottom:'8px', color:'white' }}>
                Transparent Service from Start to Finish
              </h3>
              <p style={{ fontSize:'15px', color:'rgba(255,255,255,.8)', marginBottom:'24px', lineHeight:1.65 }}>
                If additional issues are discovered during the repair, the technician will stop and review the situation with you before continuing.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                {[['📋','Scope explained upfront'],['✅','Authorization before every repair'],['💬','Pricing discussed in advance'],['🔒','No hidden charges — ever']].map(([icon,text]) => (
                  <div key={text} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                    <span style={{ fontSize:'20px' }}>{icon}</span>
                    <span style={{ fontSize:'16px', color:'rgba(255,255,255,.9)' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'32px', paddingTop:'24px', borderTop:'1px solid rgba(255,255,255,.2)' }}>
                <a href="tel:9727559019" style={{ display:'block', background:'white', color:'var(--green-dark)', fontFamily:'var(--serif)', fontWeight:400, fontSize:'20px', padding:'14px', borderRadius:'var(--r-md)', textAlign:'center', textDecoration:'none' }}>
                  📞 (972) 755-9019
                </a>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,.6)', textAlign:'center', marginTop:'8px' }}>Same-day or next-day service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'40px' }}>
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-title">Proudly Serving <em>North Texas</em></h2>
            <p className="section-body" style={{ margin:'0 auto 32px' }}>
              Because we work exclusively in North Texas, we understand the seasonal changes and soil conditions that affect irrigation systems year-round.
            </p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center', marginBottom:'24px' }}>
            {serviceAreas.map(area => (
              <span key={area} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', padding:'6px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500, border:'1px solid var(--green-light)' }}>
                {area}
              </span>
            ))}
          </div>
          <p style={{ textAlign:'center', color:'var(--text-muted)', fontSize:'15px' }}>
            Serving Dallas County · Tarrant County · Denton County · Rockwall County
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Your Irrigation Assessment</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            If Your Irrigation System Needs Attention, <em style={{ color:'var(--green-light)' }}>Schedule a Professional Service Check Today</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', marginBottom:'36px', maxWidth:'560px', margin:'0 auto 36px', lineHeight:1.75 }}>
            Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 32px' }}>📞 Call (972) 755-9019</a>
            <Link href="/book" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 32px' }}>📅 Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
