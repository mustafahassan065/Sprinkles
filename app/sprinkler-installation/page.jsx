import Link from 'next/link';

export const metadata = {
  title: 'Sprinkler Installation Dallas Fort Worth | Sprinklers and Lawns',
  description: 'Professional sprinkler system installation for North Texas homes. Custom irrigation design, proper zone coverage, and upfront pricing. Licensed. 1-year warranty. Call (972) 755-9019.',
  alternates: { canonical: 'https://sprinklersandlawns.com/sprinkler-installation' },
};

/* Unique images for INSTALLATION — none used on other pages */
const HERO_IMG   = 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1600&q=85&fit=crop';
const DESIGN_IMG = 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=900&q=85&fit=crop';
const LAWN3_IMG  = 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=85&fit=crop';

const installPricing = [
  { zones:'4-Zone System', range:'$4,300 – $4,900', desc:'Ideal for smaller residential properties' },
  { zones:'6-Zone System', range:'$6,400 – $7,100', desc:'Most popular for standard residential lots', popular:true },
  { zones:'8-Zone System', range:'$8,100 – $8,500', desc:'For larger properties with varied landscape zones' },
];

const steps = [
  { n:'01', c:'var(--green)',        t:'Property Evaluation',       d:'We assess soil type, plant materials, sun exposure, slope, water pressure, flow capacity, and existing hardscape before designing your system.' },
  { n:'02', c:'var(--green-dark)',   t:'Custom System Design',      d:'Every system is designed specifically for your property. Each zone is mapped to deliver the correct amount of water for its plant type and conditions.' },
  { n:'03', c:'var(--blue-dark)',    t:'Hydrozone Planning',        d:'We group plants with similar watering needs into the same zones — preventing overwatering in one area and underwatering in another.' },
  { n:'04', c:'var(--green)',        t:'Professional Installation', d:'Our licensed technicians install all components using code-compliant methods. We bore under driveways and sidewalks to protect your property.' },
  { n:'05', c:'var(--green-dark)',   t:'System Programming',        d:'We program each zone based on your specific landscape conditions — never identical runtimes across all zones.' },
  { n:'06', c:'var(--green-deeper)', t:'Final Test & Walkthrough',  d:'We test every head, valve, and zone before leaving. You receive a full walkthrough of your new system.' },
];

const included = ['Custom irrigation design plan','Material take-off sheet','Pressure-regulated heads','High-efficiency nozzles','Smart irrigation controller','Rain & freeze sensor','Code-compliant components','1-year warranty'];

export default function SprinklerInstallationPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={HERO_IMG} alt="Newly installed irrigation system with sprinkler heads in a lush green North Texas residential lawn" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Sprinkler Installation</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Irrigation System Installation</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Sprinkler System Installation <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Custom-designed irrigation systems for North Texas properties. We price installations based on the number of heads — not just zones — to ensure proper coverage across your entire landscape.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Get Installation Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Why Design Matters</span>
              <h2 className="section-title">A Properly Designed System Is the <em>Foundation of a Healthy Landscape</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                In North Texas, irrigation design requires more than placing sprinkler heads. It requires a clear understanding of soil conditions, plant needs, sun exposure, slope, drainage, and local code requirements.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Poor irrigation design leads to uneven coverage, water waste, runoff, and long-term damage to turf and plant material. A properly designed system delivers uniform coverage and supports healthy growth while reducing water usage.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                <strong style={{ color:'var(--text)' }}>We price installations based on the number of heads to ensure proper coverage rather than simply counting zones.</strong>
              </p>
              <Link href="/contact" className="btn-primary">Request Installation Quote</Link>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={DESIGN_IMG} alt="Custom irrigation system design and layout planning for a North Texas residential property" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS 3×2 */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">Our Installation <em>Process</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>Every installation begins with a detailed property evaluation and ends with a full system test and walkthrough.</p>
          </div>
          <div className="grid-3">
            {steps.map(s=>(
              <div key={s.n} className="card">
                <div style={{ width:'46px', height:'46px', borderRadius:'50%', background:s.c, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize:'16px', fontWeight:400, marginBottom:'14px' }}>{s.n}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{s.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Installation Pricing</span>
            <h2 className="section-title">Sprinkler System <em>Installation Pricing</em></h2>
            <p className="section-body" style={{ margin:'0 auto' }}>Installation pricing depends on the number of heads, zones, meter size, boring requirements, and water pressure.</p>
          </div>
          <div className="grid-3" style={{ maxWidth:'900px', margin:'0 auto 32px' }}>
            {installPricing.map(pkg=>(
              <div key={pkg.zones} className="card" style={{ textAlign:'center', position:'relative', border: pkg.popular ? '2px solid var(--green)' : '1px solid var(--gray-100)' }}>
                {pkg.popular && (
                  <div style={{ position:'absolute', top:'-14px', left:'50%', transform:'translateX(-50%)', background:'var(--green)', color:'white', fontSize:'11px', fontWeight:700, letterSpacing:'.1em', padding:'4px 14px', borderRadius:'20px', whiteSpace:'nowrap' }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'19px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>{pkg.zones}</h3>
                <div style={{ fontFamily:'var(--serif)', fontSize:'28px', fontWeight:400, color: pkg.popular ? 'var(--green)' : 'var(--text)', marginBottom:'8px' }}>{pkg.range}</div>
                <p style={{ fontSize:'14px', color:'var(--text-muted)' }}>{pkg.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center', marginBottom:'16px' }}>
            {included.map(i=><span key={i} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'5px 13px', borderRadius:'20px', fontSize:'13px', fontWeight:500 }}>✓ {i}</span>)}
          </div>
          <p style={{ textAlign:'center', fontSize:'14px', color:'var(--text-muted)' }}>All installations include the above. Pricing confirmed after on-site evaluation.</p>
        </div>
      </section>

      {/* DESIGN DETAIL SPLIT */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={LAWN3_IMG} alt="Healthy green North Texas lawn maintained by a custom-designed and professionally installed irrigation system" />
            </div>
            <div>
              <span className="eyebrow">Design Plans</span>
              <h2 className="section-title">Design Plans and <em className="brown-em">Material Take Off Sheets</em></h2>
              <div className="divider-blue" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns provides detailed irrigation design plans along with a material take off sheet. This includes exact component locations, required materials and quantities, and zone layout with coverage details.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                This service is also available for property owners who plan to install their own system and need a professional design. All irrigation designs are completed by a licensed irrigation professional with extensive experience in North Texas landscapes.
              </p>
              <ul className="check-list">
                {['Local soil and weather conditions fully considered','City code requirements built into every design','Water efficient system design to reduce waste','Clear and detailed design documentation provided'].map(i=><li key={i}>{i}</li>)}
              </ul>
              <div style={{ marginTop:'24px' }}>
                <Link href="/contact" className="btn-primary">Request Design Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="section-sm bg-white">
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'24px', fontWeight:400, color:'var(--text)', marginBottom:'10px' }}>Sprinkler Installation <em>Service Areas</em></h2>
          <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'20px' }}>Serving Dallas County · Tarrant County · Denton County · Rockwall County — including:</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            {['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton','Rowlett','Wylie'].map(c=>(
              <span key={c} style={{ background:'var(--off-white)', border:'1px solid var(--gray-100)', color:'var(--text-muted)', padding:'6px 16px', borderRadius:'20px', fontSize:'14px', fontWeight:500 }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'14px' }}>
            Schedule Your Installation <em style={{ color:'var(--green-light)' }}>Consultation</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'520px', margin:'0 auto 32px', lineHeight:1.76 }}>
            Call (972) 755-9019 to request a professional irrigation installation consultation in Dallas Fort Worth. Sprinklers and Lawns delivers efficient system design with precision, local expertise, and no surprises.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 32px' }}>📞 Call (972) 755-9019</a>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 32px' }}>Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
