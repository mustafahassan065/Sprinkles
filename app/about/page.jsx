import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Sprinklers and Lawns | Family-Owned Irrigation Company Dallas',
  description: 'Meet Joe Davis, owner of Sprinklers and Lawns. Texas A&M Horticulture graduate serving Dallas-Ft. Worth with professional irrigation services since 1980. License #8146.',
  keywords: 'about Sprinklers and Lawns, Joe Davis irrigation, family owned irrigation Dallas, Texas A&M horticulture irrigation DFW',
  alternates: { canonical: 'https://sprinklersandlawns.com/about' },
};

const values = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    title: 'Honest Work',
    desc: 'Every repair is explained before it begins. You approve all work. No surprises on your bill.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
    title: 'Long-Term Relationships',
    desc: 'We build lasting relationships with homeowners and property managers across North Texas.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: 'Water-Efficient Practices',
    desc: 'Rooted in horticulture science, we recommend what is right — not what is easy. Less waste, healthier lawns.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>),
    title: 'Dependable Service',
    desc: 'Same-day or next-day service available. We show up when we say we will and get the job done right.',
  },
];

const credentials = [
  { label: 'License Number', value: '#8146' },
  { label: 'Education',      value: 'B.S. Horticulture, Texas A&M University, 1989' },
  { label: 'Internship',     value: 'Texas Extension State Office — under Doug Welch, Director of Xeriscape' },
  { label: 'Experience',     value: '25+ years of irrigation experience' },
  { label: 'Serving Since',  value: '1980' },
  { label: 'Warranty',       value: '1-year on all parts and labor' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background:'var(--off-white)', padding:'64px 0 52px', borderBottom:'1px solid var(--gray-100)' }}>
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4vw,48px)', fontWeight:400, color:'var(--text)', maxWidth:'640px', marginTop:'8px', marginBottom:'14px' }}>
            Family Owned. Professionally Managed. <em>Locally Experienced.</em>
          </h1>
          <p style={{ fontSize:'18px', color:'var(--text-muted)', maxWidth:'600px', lineHeight:1.65 }}>
            Sprinklers and Lawns has provided irrigation services across Dallas-Ft. Worth for over 25 years, built on honest work, dependable service, and water-efficient practices rooted in horticulture science.
          </p>
        </div>
      </section>

      {/* MEET JOE DAVIS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'start' }}>

            {/* Photo column — label BELOW image, not covering face */}
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div style={{ borderRadius:'var(--r-xl)', overflow:'hidden', boxShadow:'var(--sh-lg)', aspectRatio:'3/4', background:'var(--gray-50)', position:'relative', maxWidth:'420px' }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Joe Davis, Owner and Lead Irrigation Specialist at Sprinklers and Lawns"
                  fill
                  style={{ objectFit:'cover', objectPosition:'top' }}
                />
              </div>
              {/* Credential badge — BELOW photo, not covering face */}
              <div style={{ background:'var(--green)', color:'white', padding:'16px 20px', borderRadius:'var(--r-md)', boxShadow:'var(--sh-md)', maxWidth:'420px' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:'13px', fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', marginBottom:'4px', color:'rgba(255,255,255,.8)' }}>
                  Licensed Professional
                </div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'white' }}>
                  License #8146
                </div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,.75)', marginTop:'4px' }}>
                  State of Texas Irrigation
                </div>
              </div>
            </div>

            {/* Content */}
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

              {/* Credentials table */}
              <div style={{ background:'var(--off-white)', border:'1px solid var(--gray-100)', borderRadius:'var(--r-lg)', overflow:'hidden' }}>
                {credentials.map((cred, i) => (
                  <div key={cred.label} style={{ display:'grid', gridTemplateColumns:'140px 1fr', padding:'12px 18px', borderBottom: i < credentials.length-1 ? '1px solid var(--gray-100)' : 'none', gap:'12px' }}>
                    <span style={{ fontSize:'13px', color:'var(--text-muted)', fontWeight:600 }}>{cred.label}</span>
                    <span style={{ fontSize:'14px', color:'var(--text)', fontWeight:500 }}>{cred.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Company is Built On</h2>
          </div>
          <div className="grid-4">
            {values.map(val => (
              <div key={val.title} className="card" style={{ textAlign:'center' }}>
                <div className="ico-green" style={{ margin:'0 auto 16px' }}>{val.icon}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:'var(--text)', marginBottom:'8px' }}>{val.title}</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'center' }}>
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
              <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontSize:'17px' }}>
                The goal is deep root growth. A deeper root system improves drought resistance and strengthens freeze protection. Proper watering protects natural resources and preserves your landscape investment.
              </p>
              <ul className="check-list">
                {[
                  'Each zone programmed for its specific conditions',
                  'Deep root growth — not surface watering',
                  'Seasonal schedule adjustments throughout the year',
                  'Code compliant system evaluation',
                  'Water-efficient practices rooted in horticulture science',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="img-card" style={{ aspectRatio:'4/3' }}>
              <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=85&fit=crop" alt="Irrigation system inspection by licensed professional in North Texas" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background:'var(--green)', padding:'52px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap:0 }}>
            {[{n:'25+',l:'Years of Experience'},{n:'1980',l:'Serving Dallas Since'},{n:'#8146',l:'TX Irrigation License'},{n:'1-Year',l:'Parts & Labor Warranty'}].map((s,i) => (
              <div key={s.l} style={{ textAlign:'center', padding:'24px 16px', borderRight: i<3?'1px solid rgba(255,255,255,.18)':'none' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'36px', fontWeight:400, color:'white' }}>{s.n}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,.7)', marginTop:'6px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,40px)', fontWeight:400, color:'white', marginBottom:'16px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Assessment</em>
          </h2>
          <p style={{ fontSize:'18px', color:'rgba(255,255,255,.72)', marginBottom:'32px', maxWidth:'520px', margin:'0 auto 32px', lineHeight:1.75 }}>
            Call (972) 755-9019 to schedule your irrigation service call in Dallas-Ft. Worth. Honest work. Clear communication. No surprises.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'15px 32px' }}>📞 Call (972) 755-9019</a>
            <Link href="/book" className="btn-ghost" style={{ fontSize:'16px', padding:'15px 32px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
