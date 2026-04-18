'use client';
import { useState } from 'react';
import Link from 'next/link';

/* Unique image for CONTACT — not used on any other page */
const HERO = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85&fit=crop';

const serviceOptions = ['Sprinkler Repair','Sprinkler Installation','Irrigation Design','Smart Controller Upgrade','Rain & Freeze Sensor','Head Replacement','Electrical Troubleshooting','Seasonal Maintenance','Commercial Services','Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', address:'', message:'' });
  const [status, setStatus] = useState('idle');
  const onChange = e => setForm(p=>({...p,[e.target.name]:e.target.value}));
  const onSubmit = async e => {
    e.preventDefault(); setStatus('submitting');
    try {
      const r = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      setStatus(r.ok?'success':'error');
      if(r.ok) setForm({name:'',email:'',phone:'',service:'',address:'',message:''});
    } catch { setStatus('error'); }
  };

  return (
    <>
      <style>{`
        .fi{width:100%;padding:11px 14px;font-size:15px;font-family:var(--sans);border:1.5px solid var(--gray-200);border-radius:var(--r-md);outline:none;transition:border-color .18s,box-shadow .18s;color:var(--text);background:white;}
        .fi:focus{border-color:var(--green);box-shadow:0 0 0 3px rgba(74,144,32,.10);}
        .fi::placeholder{color:#b0baa8;}
      `}</style>

      {/* HERO */}
      <section className="page-hero" style={{ minHeight:'360px' }}>
        <img src={HERO} alt="Beautiful green lawn and landscape in a Dallas Fort Worth residential property" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'72px 28px' }}>
          <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,.9)' }}>Contact</span>
          </nav>
          <div className="eyebrow" style={{ color:'var(--green-light)' }}>Contact Us</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4vw,50px)', fontWeight:400, color:'white', lineHeight:1.1, marginBottom:'14px', marginTop:'8px', maxWidth:'560px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Service</em> in Dallas-Fort Worth
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'500px', lineHeight:1.72 }}>
            Call (972) 755-9019 or fill out the form below. Same-day or next-day service available. We will always confirm pricing before work begins.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'start' }}>
            <div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'28px', fontWeight:400, color:'var(--text)', marginBottom:'28px' }}>Request a <em>Service Call</em></h2>
              {status==='success' ? (
                <div style={{ background:'var(--green-faint)', border:'1px solid var(--green-light)', borderRadius:'var(--r-xl)', padding:'44px', textAlign:'center' }}>
                  <div style={{ fontSize:'48px', marginBottom:'14px' }}>✅</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'24px', color:'var(--green)', marginBottom:'8px' }}>Request Received!</h3>
                  <p style={{ fontSize:'16px', color:'var(--green-dark)' }}>Thank you for contacting Sprinklers and Lawns. We will get back to you shortly to confirm your service appointment.</p>
                </div>
              ):(
                <form onSubmit={onSubmit} style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div>
                      <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Full Name *</label>
                      <input className="fi" name="name" type="text" value={form.name} onChange={onChange} placeholder="John Smith" required />
                    </div>
                    <div>
                      <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Phone *</label>
                      <input className="fi" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="(972) 555-0100" required />
                    </div>
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Email</label>
                    <input className="fi" name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Address</label>
                    <input className="fi" name="address" type="text" value={form.address} onChange={onChange} placeholder="123 Main St, Plano, TX 75024" />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Needed</label>
                    <select className="fi" name="service" value={form.service} onChange={onChange}>
                      <option value="">Select a service...</option>
                      {serviceOptions.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Describe the Issue</label>
                    <textarea className="fi" name="message" value={form.message} onChange={onChange} rows={5} placeholder="Please describe what you are experiencing with your irrigation system..." style={{ resize:'vertical', lineHeight:1.65 }} />
                  </div>
                  {status==='error' && <p style={{ color:'#c0392b', fontSize:'14px' }}>Something went wrong. Please call us directly at (972) 755-9019.</p>}
                  <button type="submit" className="btn-primary" disabled={status==='submitting'} style={{ justifyContent:'center', fontSize:'16px', padding:'15px' }}>
                    {status==='submitting' ? 'Sending...' : 'Submit Service Request'}
                  </button>
                  <p style={{ fontSize:'13px', color:'var(--text-muted)', textAlign:'center' }}>We will confirm pricing before any work begins.</p>
                </form>
              )}
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
              <div style={{ background:'var(--green)', borderRadius:'var(--r-xl)', padding:'32px', color:'white', textAlign:'center' }}>
                <div style={{ fontSize:'36px', marginBottom:'10px' }}>📞</div>
                <p style={{ fontSize:'12px', color:'rgba(255,255,255,.65)', letterSpacing:'.1em', textTransform:'uppercase', fontWeight:600, marginBottom:'8px' }}>Call Us Directly</p>
                <a href="tel:9727559019" style={{ fontFamily:'var(--serif)', fontSize:'32px', fontWeight:400, color:'white', display:'block', marginBottom:'6px', textDecoration:'none' }}>(972) 755-9019</a>
                <p style={{ fontSize:'14px', color:'rgba(255,255,255,.65)' }}>Same-day or next-day service available</p>
              </div>

              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'17px', fontWeight:600, color:'var(--text)', marginBottom:'16px' }}>Business Information</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'13px' }}>
                  {[['🏢','Company','Sprinklers and Lawns'],['📍','Service Area','Dallas-Fort Worth, North Texas'],['🪪','License','#8146 — State of Texas'],['🕐','Service','Same-day or next-day available'],['💳','Payment','Multiple payment options accepted']].map(([ic,lb,val])=>(
                    <div key={lb} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
                      <span style={{ fontSize:'18px', flexShrink:0, marginTop:'2px' }}>{ic}</span>
                      <div>
                        <span style={{ fontSize:'11px', color:'var(--green)', fontWeight:700, display:'block', textTransform:'uppercase', letterSpacing:'.08em' }}>{lb}</span>
                        <span style={{ fontSize:'15px', color:'var(--text)' }}>{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-tinted">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:600, color:'var(--green-dark)', marginBottom:'12px' }}>Our Service Promise</h3>
                <ul className="check-list">
                  {['Pricing discussed before work begins','You approve all repairs in advance','One-year warranty on parts and labor','Licensed irrigation professional','No guesswork — accurate diagnostics'].map(i=><li key={i}>{i}</li>)}
                </ul>
              </div>

              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:600, color:'var(--text)', marginBottom:'10px' }}>Service Areas</h3>
                <p style={{ fontSize:'13px', color:'var(--text-muted)', marginBottom:'10px' }}>Dallas County · Tarrant County · Denton County · Rockwall County</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                  {['Allen','Frisco','McKinney','Plano','Dallas','Garland','Irving','Carrollton','Richardson','Rowlett','Lewisville','Flower Mound'].map(c=>(
                    <span key={c} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--green-light)', padding:'3px 10px', borderRadius:'12px', fontSize:'12px', fontWeight:500 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
