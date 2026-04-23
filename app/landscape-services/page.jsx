import Link from 'next/link';

export const metadata = {
  title: 'Landscape Services Dallas Fort Worth | Sprinklers and Lawns',
  description:
    'Professional landscape services in Dallas-Fort Worth. Landscape assessment, plant material evaluation, and irrigation coordination for North Texas properties. Call (972) 755-9019.',
  keywords:
    'landscape services Dallas, landscape irrigation North Texas, landscape assessment Fort Worth, landscape maintenance DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/landscape-services' },
};

const IMG = {
  hero:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&fit=crop',
  split1: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=900&q=85&fit=crop',
  split2: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=85&fit=crop',
};

const landscapeChanges = [
  { c:'green', t:'Plants grow beyond their intended size affecting zone coverage' },
  { c:'green', t:'Trees are removed creating new sun exposure in previously shaded zones' },
  { c:'blue',  t:'Outdoor living areas are added reducing irrigated landscape space' },
  { c:'blue',  t:'New planting beds are created requiring separate hydrozone programming' },
  { c:'green', t:'Perennials and annuals end up sharing the same zone with different water needs' },
  { c:'green', t:'Hardscape receives spray from heads that have not been adjusted' },
];

const evaluationItems = [
  'Code compliance review for current system layout',
  'Coverage efficiency assessment for all zones',
  'Controller programming review and adjustment',
  'Zone performance evaluation for each area',
  'Equipment condition assessment',
  'Identification of overspray onto hardscape',
  'Identification of zones serving mixed plant materials',
  'Recommendations for system improvements',
];

const landscapeServices = [
  { ic:'📋', c:'green', t:'Landscape and Irrigation Assessment',    d:'Complete evaluation of your landscape and irrigation system to identify coverage gaps, code violations, and opportunities for improvement.' },
  { ic:'🗺️', c:'green', t:'Hydrozone Planning and Adjustment',      d:'Regrouping irrigation zones to match plants with similar watering requirements, preventing overwatering and underwatering.' },
  { ic:'🌱', c:'blue',  t:'Plant Material Irrigation Coordination',  d:'Programming adjustments to ensure each zone delivers the correct amount of water based on the specific plant material in each area.' },
  { ic:'📐', c:'green', t:'Coverage Correction and Realignment',     d:'Adjustment of sprinkler heads to eliminate overspray, correct coverage gaps, and ensure proper water distribution across all areas.' },
  { ic:'✅', c:'green', t:'Code Compliance Evaluation',              d:'Review of the entire system for compliance with local city codes including hardscape spray violations and sensor requirements.' },
  { ic:'🔧', c:'blue',  t:'Irrigation System Repair and Upgrade',    d:'Repair or upgrade of irrigation components to support current landscape conditions, including head replacement, valve repair, and controller upgrades.' },
];

const whyChoose = [
  { ic:'🌿', c:'var(--green)',      t:'Horticulture-based landscape knowledge',  d:'Joe Davis earned a Bachelor of Science in Horticulture from Texas A&M in 1989, bringing scientific knowledge to every landscape evaluation.' },
  { ic:'🪪', c:'var(--green-dark)', t:'Licensed irrigation professional',        d:'All landscape and irrigation work performed by a State of Texas licensed irrigation professional. License #8146.' },
  { ic:'📊', c:'var(--blue-dark)',  t:'Zone-specific programming',               d:'Each irrigation zone is programmed to meet the specific watering needs of each area based on plant material and environmental conditions.' },
  { ic:'✅', c:'var(--green)',      t:'Code compliant evaluations',               d:'All landscape and irrigation evaluations include a review for code compliance including hardscape spray and sensor requirements.' },
  { ic:'💧', c:'var(--green)',      t:'Water efficient recommendations',          d:'Every landscape assessment includes water-efficient recommendations to reduce unnecessary watering and lower utility costs.' },
  { ic:'💬', c:'var(--blue-dark)',  t:'Clear communication and documentation',   d:'All findings and recommendations are clearly explained. Pricing is discussed upfront before any work begins.' },
];

const areas = ['Dallas County','Tarrant County','Denton County','Rockwall County'];
const cities = ['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'];

export default function LandscapeServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img src={IMG.hero} alt="Professional landscape and irrigation services for a North Texas residential property" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px' }}>
          <div style={{ maxWidth:'620px' }}>
            <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
              <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
              <span style={{ margin:'0 8px' }}>›</span>
              <span style={{ color:'rgba(255,255,255,.9)' }}>Landscape Services</span>
            </nav>
            <div className="eyebrow" style={{ color:'var(--green-light)' }}>Landscape Services</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,54px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'18px', marginTop:'8px' }}>
              Landscape Services{' '}
              <em style={{ color:'var(--green-light)' }}>Dallas Fort Worth</em>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.78)', lineHeight:1.76, marginBottom:'32px', maxWidth:'520px' }}>
              Landscapes evolve. Plants grow beyond their intended size. Trees are removed. Outdoor living areas are added. New planting beds are created. Sprinklers and Lawns evaluates code compliance, coverage efficiency, controller programming, zone performance, and equipment condition to keep your landscape and irrigation system working together correctly.
            </p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="tel:9727559019" className="btn-white">📞 Call (972) 755-9019</a>
              <Link href="/contact" className="btn-ghost">Schedule Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LANDSCAPES CHANGE */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Landscapes Change and Irrigation Must Adjust</span>
              <h2 className="section-title">
                As Your Landscape Evolves, Your Irrigation System{' '}
                <em>Must Evolve With It</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Common issues include perennials and annuals sharing the same zone, shaded areas becoming full sun, and hardscape receiving spray, which violates current city codes.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'16px', fontSize:'17px' }}>
                Sprinklers and Lawns evaluates code compliance, coverage efficiency, controller programming, zone performance, and equipment condition. Most irrigation assessments take less than one hour. Larger systems may require additional time. A detailed corrective estimate is provided promptly.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                Common landscape changes that affect irrigation:
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                {landscapeChanges.map(lc => (
                  <div key={lc.t} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: lc.c === 'green' ? 'var(--green)' : 'var(--blue)', flexShrink:0, marginTop:'8px' }} />
                    <span style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.65 }}>{lc.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split1} alt="Landscape and irrigation assessment for a North Texas residential property showing plant material and zone coverage" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES 3×2 */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <span className="eyebrow">Landscape and Irrigation Services</span>
            <h2 className="section-title">
              Complete Landscape and Irrigation Evaluation for <em>North Texas Properties</em>
            </h2>
          </div>
          <div className="grid-3">
            {landscapeServices.map(svc => (
              <div key={svc.t} className="card">
                <div className={`ico-${svc.c}`} style={{ marginBottom:'14px' }}>
                  <span style={{ fontSize:'22px' }}>{svc.ic}</span>
                </div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{svc.t}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>{svc.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUATION ITEMS SPLIT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center' }}>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src={IMG.split2} alt="Landscape irrigation evaluation identifying coverage issues and code compliance for a North Texas property" />
            </div>
            <div>
              <span className="eyebrow">What We Evaluate</span>
              <h2 className="section-title">
                A Detailed Corrective Estimate Is Provided <em>Promptly</em>
              </h2>
              <div className="divider" />
              <p style={{ color:'var(--text-muted)', marginBottom:'20px', fontSize:'17px' }}>
                During every landscape and irrigation evaluation, Sprinklers and Lawns assesses:
              </p>
              <ul className="check-list" style={{ marginBottom:'24px' }}>
                {evaluationItems.map(ei => <li key={ei}>{ei}</li>)}
              </ul>
              <div className="info-green">
                <p style={{ fontSize:'15px', color:'var(--green-deeper)', fontWeight:500 }}>
                  Most irrigation assessments take less than one hour. Larger systems may require additional time. A detailed corrective estimate is provided promptly.
                </p>
              </div>
              <div style={{ marginTop:'24px' }}>
                <Link href="/contact" className="btn-primary">Schedule Landscape Assessment</Link>
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
            Landscape Services Throughout <em>North Texas</em>
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
          <span className="eyebrow" style={{ color:'var(--green-light)', justifyContent:'center' }}>Schedule Your Landscape and Irrigation Assessment</span>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'16px', marginTop:'8px' }}>
            Let Your Landscape and Irrigation System{' '}
            <em style={{ color:'var(--green-light)' }}>Work Together Correctly</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', maxWidth:'560px', margin:'0 auto 40px', lineHeight:1.76 }}>
            Call (972) 755-9019 to schedule a landscape and irrigation assessment in Dallas Fort Worth. Sprinklers and Lawns delivers water-efficient solutions with honest work and clear communication.
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
