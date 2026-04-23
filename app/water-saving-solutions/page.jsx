import Link from 'next/link';

export const metadata = {
  title: 'Water-Saving Irrigation Solutions Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Water-efficient irrigation solutions for North Texas properties. Smart controllers, hydrozone planning, pressure regulation, and proper programming to reduce water waste. Call (972) 755-9019.',
  keywords:
    'water saving irrigation Dallas, water efficient sprinkler Fort Worth, xeriscape irrigation North Texas, water conservation irrigation DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/water-saving-solutions' },
};

const IMG = {
  hero:   'https://images.unsplash.com/photo-1495774539583-885e02cca8c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdmUlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
  split1: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=900&q=85&fit=crop',
};

const commonWasteProblems = [
  { c:'brown', ic:'❌', t:'Identical runtimes across all zones',         d:'Every zone in a landscape has different watering requirements. Running all zones for the same duration wastes water and damages plant material.' },
  { c:'brown', ic:'❌', t:'No seasonal schedule adjustments',            d:'Watering schedules set in spring are often never adjusted. Summer heat, fall cooling, and winter dormancy all require different programming.' },
  { c:'blue',  ic:'❌', t:'Overspray hitting hardscape',                d:'Water hitting driveways, sidewalks, and streets is pure waste. It also violates current city codes in most North Texas municipalities.' },
  { c:'blue',  ic:'❌', t:'No rain or freeze sensor installed',          d:'Systems without sensors continue watering during rainfall. This wastes water and is a code violation in North Texas.' },
  { c:'brown', ic:'❌', t:'Incorrect nozzle selection for zone type',    d:'High-precipitation nozzles in slow-absorption clay soil areas cause runoff before water can penetrate. Proper nozzle selection prevents waste.' },
  { c:'blue',  ic:'❌', t:'Perennials and annuals sharing the same zone',d:'Plants with different water needs on the same zone result in overwatering one type and underwatering the other.' },
];

const solutions = [
  { ic:'📱', c:'green', t:'Smart Irrigation Controllers',        href:'/smart-controllers',     d:'Smart controllers automatically adjust watering schedules based on real time weather conditions, reducing water usage without sacrificing landscape health.' },
  { ic:'🗺️', c:'green', t:'Hydrozone Planning',                 href:'/irrigation-design',     d:'Grouping plants with similar watering needs into the same zones prevents overwatering in one area and underwatering in another.' },
  { ic:'⚙️', c:'blue',  t:'Pressure Regulated Sprinkler Heads', href:'/head-replacement',      d:'Pressure regulation prevents fogging and misting caused by high pressure, which dramatically reduces evaporation loss.' },
  { ic:'🌧️', c:'green', t:'Rain and Freeze Sensors',            href:'/rain-freeze-sensors',   d:'Code-required sensors automatically shut off irrigation during rainfall and freezing temperatures, preventing unnecessary watering.' },
  { ic:'📅', c:'green', t:'Seasonal Programming Adjustments',   href:'/seasonal-maintenance',  d:'Proper seasonal adjustments ensure your system delivers the right amount of water through every North Texas season.' },
  { ic:'📐', c:'blue',  t:'Professional Irrigation Design',     href:'/irrigation-design',     d:'A professionally designed system with proper zone layout, head spacing, and precipitation rates eliminates inefficiency from the start.' },
];

const deepRootBenefits = [
  { c:'green', t:'Improves drought resistance across turf and plant material' },
  { c:'green', t:'Strengthens freeze protection during winter events' },
  { c:'blue',  t:'Reduces water usage and monthly utility costs' },
  { c:'blue',  t:'Protects natural resources and reduces runoff into waterways' },
  { c:'green', t:'Preserves your landscape investment long term' },
];

const whyChoose = [
  { ic:'🌿', c:'var(--green)',      t:'Horticulture-based approach',         d:'Joe Davis earned a Bachelor of Science in Horticulture from Texas A&M in 1989. Water-efficient practices are rooted in horticulture science.' },
  { ic:'🪪', c:'var(--green-dark)', t:'Licensed irrigation professional',    d:'All water-saving assessments and system work performed by a State of Texas licensed irrigation professional. License #8146.' },
  { ic:'📊', c:'var(--blue-dark)',  t:'Zone-specific programming',           d:'Each irrigation zone is programmed to meet the specific watering needs of each area. We do not program all zones identically.' },
  { ic:'💧', c:'var(--green)',      t:'Reduces water waste',                 d:'Proper system design, smart controllers, and seasonal adjustments combine to significantly reduce unnecessary water usage.' },
  { ic:'✅', c:'var(--green)',      t:'Code compliant solutions',            d:'All recommendations meet local city codes and regulations including required rain and freeze sensors.' },
  { ic:'💬', c:'var(--blue-dark)',  t:'Transparent service',                d:'Every scope of work is explained before it begins. Authorization is obtained. Pricing is discussed in advance.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function WaterSavingSolutionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={IMG.hero} alt="Water-efficient irrigation solutions protecting a healthy North Texas landscape" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Water-Saving Solutions</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Water-Saving Irrigation Solutions</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Water-Saving Irrigation Solutions for{' '}
              <em style={{ color:'var(--green-light)' }}>North Texas Properties</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Sprinklers and Lawns is built on water-efficient practices rooted in horticulture science. We help homeowners and property managers maintain green, healthy lawns while watering responsibly and reducing unnecessary water waste.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Schedule Assessment</Link>
            </div>
            <div style={{ display:'flex', gap:'20px', marginTop:'24px', flexWrap:'wrap' }}>
              {['Licensed #8146','Texas A&M Horticulture','1-Year Warranty'].map(t => (
                <span key={t} style={{ display:'flex', alignItems:'center', gap:'5px', color:'rgba(255,255,255,.65)', fontSize:'14px' }}>
                  <span style={{ color:'var(--green-light)', fontWeight:700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON WASTE PROBLEMS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Common Irrigation Problems We Correct</span>
            <h2 className="section-title">
              Two of the Most Common Issues We Find Are <em>Identical Runtimes Across All Zones</em> and the{' '}
              <em>Lack of Seasonal Adjustments</em>
            </h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Proper watering protects natural resources and preserves your landscape investment. These are the most common sources of water waste we identify and correct.
            </p>
          </div>
          <div className="grid-3">
            {commonWasteProblems.map(p => (
              <div key={p.t} className="card">
                <div style={{ fontSize:'28px', marginBottom:'12px' }}>{p.ic}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color: p.c === 'brown' ? 'var(--brown)' : 'var(--blue-deeper)', marginBottom:'8px' }}>{p.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP ROOT SPLIT */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">The Goal Is Deep Root Growth</span>
              <h2 className="section-title">
                Overwatering Leads to Shallow Root Systems.{' '}
                <em>The Goal Is Deep Root Growth.</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Overwatering leads to shallow root systems. It creates conditions for root rot and pathogens. It increases water bills and weakens grass and ornamentals.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                The goal is deep root growth. A deeper root system improves drought resistance and strengthens freeze protection. Proper watering protects natural resources and preserves your landscape investment.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Benefits of deep root growth through proper irrigation:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                {deepRootBenefits.map(b => (
                  <div key={b.t} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: b.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0 }} />
                    <span style={{ fontSize:'15px', color:'var(--text-muted)' }}>{b.t}</span>
                  </div>
                ))}
              </div>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Sprinklers and Lawns reviews historical weather patterns, plant watering requirements, soil structure, precipitation rates, and seasonal conditions before recommending system adjustments.
                </p>
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Water-efficient irrigation keeping a North Texas landscape healthy while reducing water usage" />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Water-Efficient Solutions</span>
            <h2 className="section-title">
              Water-Saving Solutions for <em>North Texas Irrigation Systems</em>
            </h2>
            <p className="section-body" style={{ margin:'0 auto' }}>
              Sprinklers and Lawns provides a complete range of water-efficient irrigation solutions for North Texas properties.
            </p>
          </div>
          <div className="grid-3">
            {solutions.map(s => (
              <Link key={s.href} href={s.href} className="card" style={{ display:'flex', flexDirection:'column', textDecoration:'none' }}>
                <div className={`ico-${s.c}`} style={{ marginBottom:'14px' }}>
                  <span style={{ fontSize:'22px' }}>{s.ic}</span>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{s.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65, flex:1 }}>{s.d}</p>
                <span style={{ color:'var(--green)', fontSize:'13px', fontWeight:600, marginTop:'14px' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* XERISCAPE SPLIT */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Water-efficient landscape design and irrigation for a North Texas property" />
            </div>
            <div>
              <span className="eyebrow">Rooted in Horticulture Science</span>
              <h2 className="section-title">
                Water-Efficient Practices Rooted in <em>Horticulture Science</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Joe Davis earned a Bachelor of Science in Horticulture from Texas A&amp;M University in 1989 and completed an internship with the Texas Extension State Office under Doug Welch, Director of Xeriscape.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                That foundation in horticulture science shapes how Sprinklers and Lawns approaches every irrigation project. We review soil conditions, plant requirements, and local weather patterns before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Our company is built on honest work, dependable service, long-term relationships, and water-efficient practices rooted in horticulture science.
              </p>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Each irrigation zone is designed to meet the specific watering needs of each area. We do not program all zones identically with the same runtimes. This is the foundation of water-efficient irrigation.
                </p>
              </div>
              <div style={{ marginTop:'24px' }}>
                <Link href="/contact" className="btn-primary">Schedule Water-Saving Assessment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-white">
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
      <section className="section-sm bg-soft">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow">Areas We Serve</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'10px', marginTop:'8px' }}>
            Water-Saving Solutions Throughout <em>North Texas</em>
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Your Water-Saving Assessment</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Help Your Lawn Use Water More Efficiently.{' '}
            <em style={{ color:'var(--green-light)' }}>Schedule a Professional Assessment Today.</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule an irrigation assessment in Dallas Fort Worth. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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
