import Link from 'next/link';

export const metadata = {
  title: 'About Sprinklers and Lawns | Family-Owned Irrigation Company Dallas',
  description: 'Meet Joe Davis, owner of Sprinklers and Lawns. Texas A&M Horticulture graduate serving Dallas-Fort Worth with professional irrigation services since 1980. License #8146.',
  alternates: { canonical: 'https://sprinklersandlawns.com/about' },
};

/* ─ Unique images for ABOUT — none repeat from home ─ */
const HERO_IMG    = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85&fit=crop';
const PORTRAIT    = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85&fit=crop';
const GARDEN_IMG  = 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=85&fit=crop';
const INSPECT_IMG = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=85&fit=crop';

const values = [
  { ico:'🤝', c:'var(--green)',      t:'Honest Work',              d:'Every repair is explained before it begins. You approve all work. No surprises on your bill — ever.' },
  { ico:'🌿', c:'var(--green-dark)', t:'Long-Term Relationships',  d:'We build lasting relationships with homeowners and property managers across North Texas.' },
  { ico:'💧', c:'var(--blue-dark)',  t:'Water-Efficient Practices',d:'Rooted in horticulture science, we recommend what is right — not what is easy. Less waste, healthier lawns.' },
  { ico:'⚡', c:'var(--brown)',      t:'Dependable Service',       d:'Same-day or next-day service available. We show up when we say we will and get the job done right.' },
];

const credentials = [
  { label:'License Number', value:'#8146 — State of Texas Irrigation' },
  { label:'Education',      value:'B.S. Horticulture, Texas A&M University, 1989' },
  { label:'Internship',     value:'Texas Extension State Office — under Doug Welch, Director of Xeriscape' },
  { label:'Experience',     value:'25+ years of professional irrigation service' },
  { label:'Serving Dallas', value:'Since 1980' },
  { label:'Warranty',       value:'1-year on all parts and labor' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={HERO_IMG} alt="Aerial view of a lush green lawn with irrigation system in a North Texas residential neighborhood" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,.9)' }}>About Us</span>
          </nav>
          <div className="eyebrow" style={{ color:'var(--green-light)' }}>About Us</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'16px', marginTop:'8px', maxWidth:'600px' }}>
            Family Owned. Professionally Managed. <em style={{ color:'var(--green-light)' }}>Locally Experienced.</em>
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.75)', maxWidth:'540px', lineHeight:1.76 }}>
            Sprinklers and Lawns has provided irrigation services across Dallas-Fort Worth for over 25 years, built on honest work, dependable service, and water-efficient practices rooted in horticulture science.
          </p>
        </div>
      </section>

      {/* MEET JOE */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div style={{ position:'relative' }}>
              <div className="img-card" style={{ aspectRatio:'3/4', maxWidth:'400px' }}>
                <img src={PORTRAIT} alt="Joe Davis, Owner and Lead Irrigation Specialist at Sprinklers and Lawns Dallas Fort Worth" />
              </div>
              <div style={{ position:'absolute', bottom:'20px', right:'-10px', background:'var(--green)', color:'white', padding:'16px 22px', borderRadius:'var(--r-md)', boxShadow:'var(--sh-md)' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:'11px', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', opacity:.8, marginBottom:'4px' }}>Licensed Professional</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'21px', fontWeight:400 }}>License #8146</div>
                <div style={{ fontSize:'12px', opacity:.75, marginTop:'3px' }}>State of Texas Irrigation</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Meet the Owner</span>
              <h2 className="section-title">Joe Davis — <em>Irrigation Specialist</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Joe Davis oversees daily operations at Sprinklers and Lawns. He earned a Bachelor of Science in Horticulture from Texas A&amp;M University in 1989 and completed an internship with the Texas Extension State Office under Doug Welch, Director of Xeriscape.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                That foundation in horticulture science shapes how Sprinklers and Lawns approaches every job. We do not guess. We do not overwater. We review soil conditions, plant requirements, and local weather patterns before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                Whether you need a small sprinkler repair or a complete irrigation installation, every job receives the same level of care and attention to detail.
              </p>
              <div style={{ border:'1px solid var(--gray-100)', borderRadius:'var(--r-lg)', overflow:'hidden', marginBottom:'28px' }}>
                {credentials.map((c,i)=>(
                  <div key={c.label} style={{ display:'grid', gridTemplateColumns:'150px 1fr', padding:'12px 18px', borderBottom: i<credentials.length-1 ? '1px solid var(--gray-100)' : 'none', background: i%2===0 ? 'white' : 'var(--green-faint)', gap:'12px' }}>
                    <span style={{ fontSize:'13px', color:'var(--green)', fontWeight:600 }}>{c.label}</span>
                    <span style={{ fontSize:'14px', color:'var(--text)', fontWeight:500 }}>{c.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                <Link href="/contact" className="btn-primary">Schedule Service</Link>
                <a href="tel:9727559019" className="btn-secondary">📞 (972) 755-9019</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES 4 COLS */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Company is <em>Built On</em></h2>
          </div>
          <div className="grid-4">
            {values.map(v=>(
              <div key={v.t} className="card" style={{ textAlign:'center' }}>
                <div style={{ fontSize:'36px', marginBottom:'14px' }}>{v.ico}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:v.c, marginBottom:'10px' }}>{v.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title">Irrigation Designed for <em>North Texas Conditions</em></h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                North Texas landscapes present unique challenges. Summer heat stresses turf. Clay soils affect drainage. Watering requirements change throughout the year. Properties often include areas of full sun, heavy shade, slopes, and mixed plant materials.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns reviews historical weather patterns, plant watering requirements, soil structure, precipitation rates, and seasonal conditions before recommending system adjustments.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                The goal is deep root growth. A deeper root system improves drought resistance and strengthens freeze protection. Proper watering protects natural resources and preserves your landscape investment.
              </p>
              <ul className="check-list">
                {['Each zone programmed for its specific conditions','Deep root growth — not surface watering','Seasonal schedule adjustments throughout the year','Code compliant system evaluation','Water-efficient practices rooted in horticulture science'].map(i=><li key={i}>{i}</li>)}
              </ul>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
              <div className="img-card" style={{ aspectRatio:'4/3' }}>
                <img src={GARDEN_IMG} alt="Professionally maintained irrigation system keeping a North Texas garden healthy and green" />
              </div>
              <div className="info-green">
                <p style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--green-deeper)', marginBottom:'8px' }}>Why Landscapes Must Be Assessed Individually</p>
                <p style={{ fontSize:'14px', color:'var(--green-dark)', lineHeight:1.7 }}>
                  Landscapes evolve. Plants grow beyond their intended size. Trees are removed. Outdoor living areas are added. New planting beds are created. Common issues include perennials and annuals sharing the same zone, shaded areas becoming full sun, and hardscape receiving spray — which violates current city codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND IMAGE SPLIT */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={INSPECT_IMG} alt="Irrigation system inspection and zone assessment in a North Texas residential property" />
            </div>
            <div>
              <span className="eyebrow">Irrigation Assessment</span>
              <h2 className="section-title">Most Assessments Take <em>Less Than One Hour</em></h2>
              <div className="divider-blue" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns evaluates code compliance, coverage efficiency, controller programming, zone performance, and equipment condition.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px', fontSize:'17px' }}>
                Most irrigation assessments take less than one hour. Larger systems may require additional time. A detailed corrective estimate is provided promptly.
              </p>
              <div className="info-blue" style={{ marginBottom:'24px' }}>
                <p style={{ fontSize:'15px', color:'var(--blue-deeper)', fontWeight:500 }}>
                  We help homeowners and property managers maintain green, healthy lawns while watering responsibly and reducing unnecessary water waste.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">Schedule Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{ n:'25+',l:'Years of Experience' },{ n:'1980',l:'Serving Dallas Since' },{ n:'#8146',l:'TX Irrigation License' },{ n:'1-Year',l:'Parts & Labor Warranty' }].map((s,i)=>(
              <div key={s.l} style={{ textAlign:'center', padding:'24px 16px', borderRight: i<3 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'36px', fontWeight:400, color:'white' }}>{s.n}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,.72)', marginTop:'5px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Assessment</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'520px', margin:'0 auto 32px', lineHeight:1.76 }}>
            Call 972-755-9019 to schedule your irrigation service call in Dallas-Fort Worth. Honest work. Clear communication. No surprises.
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
