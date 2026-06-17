'use client';
import { useState } from 'react';
import Link from 'next/link';

const TIME_SLOTS = [
  '8:00 AM – 10:00 AM',
  '11:00 AM – 1:00 PM',
  '2:00 PM – 4:00 PM',
  '5:00 PM – 7:00 PM',
];

const services = [
  'Sprinkler Repair','Sprinkler Installation','Irrigation Design',
  'Smart Controller Upgrade','Rain & Freeze Sensor','Head Replacement',
  'Electrical Troubleshooting','Seasonal Maintenance','Commercial Services','Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name:'', email:'', phone:'', service:'', address:'', message:'', preferredDate:'', preferredTime:'',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name:'', email:'', phone:'', service:'', address:'', message:'', preferredDate:'', preferredTime:'' });
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  const fi = {
    width:'100%', padding:'10px 14px', fontSize:'15px', fontFamily:'var(--sans)',
    border:'1.5px solid var(--gray-200)', borderRadius:'var(--r-md)', outline:'none',
    transition:'border-color .15s', color:'var(--text)', boxSizing:'border-box',
  };
  const label = { display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' };

  return (
    <>
      {/* HERO */}
      <section style={{ background:'var(--green-deeper)', padding:'56px 0 44px' }}>
        <div className="container">
          <span className="eyebrow" style={{ color:'var(--green-light)' }}>Contact Us</span>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,46px)', fontWeight:400, color:'white', maxWidth:'600px', marginTop:'8px', marginBottom:'14px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Service</em> in Dallas-Ft. Worth
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'520px', lineHeight:1.75 }}>
            Call (972) 755-9019 or fill out the form below. Same-day or next-day service available. We will always confirm pricing before work begins.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="section bg-white">
        <div className="container">
          {/* Equal height columns */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'40px', alignItems:'start' }}>

            {/* LEFT — form */}
            <div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'24px', fontWeight:400, color:'var(--text)', marginBottom:'24px' }}>
                Request a Service Call
              </h2>

              {/* Book Now highlight */}
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'var(--r-md)', padding:'14px 18px', marginBottom:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
                <div>
                  <p style={{ fontSize:'14px', fontWeight:700, color:'var(--green-dark)', margin:0 }}>Need to book a specific time slot?</p>
                  <p style={{ fontSize:'13px', color:'var(--green)', margin:'2px 0 0' }}>Use our online booking calendar</p>
                </div>
                <Link href="/book" style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'var(--green)', color:'white', fontFamily:'var(--sans)', fontWeight:700, fontSize:'14px', padding:'9px 18px', borderRadius:'var(--r-md)', textDecoration:'none', whiteSpace:'nowrap' }}>
                  📅 Book Now
                </Link>
              </div>

              {status === 'success' ? (
                <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'var(--r-lg)', padding:'32px', textAlign:'center' }}>
                  <div style={{ fontSize:'40px', marginBottom:'12px' }}>✅</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--green-dark)', marginBottom:'8px' }}>Request Received!</h3>
                  <p style={{ fontSize:'16px', color:'var(--text-muted)' }}>
                    Thank you for contacting Sprinklers and Lawns. We will get back to you shortly to confirm your service appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
                    <div>
                      <label style={label}>Full Name *</label>
                      <input style={fi} name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Smith" required
                        onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                    </div>
                    <div>
                      <label style={label}>Phone Number *</label>
                      <input style={fi} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(972) 555-0100" required
                        onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                    </div>
                  </div>
                  <div>
                    <label style={label}>Email Address</label>
                    <input style={fi} name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                      onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                  </div>
                  <div>
                    <label style={label}>Service Address</label>
                    <input style={fi} name="address" type="text" value={form.address} onChange={handleChange} placeholder="123 Main St, Plano, TX 75024"
                      onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                  </div>
                  <div>
                    <label style={label}>Service Needed</label>
                    <select style={{ ...fi, background:'white' }} name="service" value={form.service} onChange={handleChange}
                      onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'}>
                      <option value="">Select a service...</option>
                      {services.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Preferred date/time */}
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
                    <div>
                      <label style={label}>Preferred Date</label>
                      <input style={fi} name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange}
                        onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                    </div>
                    <div>
                      <label style={label}>Preferred Time</label>
                      <select style={{ ...fi, background:'white' }} name="preferredTime" value={form.preferredTime} onChange={handleChange}
                        onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'}>
                        <option value="">Any time</option>
                        {TIME_SLOTS.map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={label}>Describe the Issue</label>
                    <textarea style={{ ...fi, resize:'vertical', lineHeight:1.6 }} name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Please describe what you are experiencing with your irrigation system..."
                      onFocus={e=>e.target.style.borderColor='var(--green)'} onBlur={e=>e.target.style.borderColor='var(--gray-200)'} />
                  </div>

                  {status === 'error' && (
                    <p style={{ color:'#c0392b', fontSize:'14px' }}>Something went wrong. Please call us directly at (972) 755-9019.</p>
                  )}

                  <button type="submit" className="btn-primary" disabled={status==='submitting'} style={{ justifyContent:'center', fontSize:'16px', padding:'14px' }}>
                    {status === 'submitting' ? 'Sending...' : 'Submit Service Request'}
                  </button>
                  <p style={{ fontSize:'13px', color:'var(--text-muted)', textAlign:'center' }}>
                    We will confirm pricing before any work begins.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT — contact info, same height */}
            <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
              {/* Phone card */}
              <div style={{ background:'var(--green)', borderRadius:'var(--r-xl)', padding:'28px', color:'white', textAlign:'center' }}>
                <div style={{ fontSize:'36px', marginBottom:'8px' }}>📞</div>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,.7)', letterSpacing:'.08em', textTransform:'uppercase', fontWeight:600, marginBottom:'8px' }}>Call Us Directly</p>
                <a href="tel:9727559019" style={{ fontFamily:'var(--serif)', fontSize:'30px', fontWeight:400, color:'white', display:'block', marginBottom:'8px', textDecoration:'none' }}>
                  (972) 755-9019
                </a>
                <p style={{ fontSize:'14px', color:'rgba(255,255,255,.7)', marginBottom:'16px' }}>Same-day or next-day service available</p>
                <Link href="/book" style={{ display:'block', background:'white', color:'var(--green-dark)', fontFamily:'var(--sans)', fontWeight:700, fontSize:'15px', padding:'12px', borderRadius:'var(--r-md)', textDecoration:'none' }}>
                  📅 Book an Appointment Online
                </Link>
              </div>

              {/* Info */}
              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--text)', marginBottom:'16px' }}>Business Information</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                  {[
                    ['🏢','Company',     'Sprinklers and Lawns'],
                    ['📍','Service Area','Dallas-Ft. Worth, North Texas'],
                    ['🪪','License',     '#8146 — State of Texas'],
                    ['🕐','Service',     'Same-day or next-day available'],
                    ['🔧','Payment',     'Multiple payment options accepted'],
                  ].map(([ic,lbl,val]) => (
                    <div key={lbl} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
                      <span style={{ fontSize:'18px', flexShrink:0, marginTop:'2px' }}>{ic}</span>
                      <div>
                        <span style={{ fontSize:'12px', color:'var(--text-muted)', fontWeight:600, display:'block' }}>{lbl}</span>
                        <span style={{ fontSize:'15px', color:'var(--text)' }}>{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promise */}
              <div className="card" style={{ background:'var(--off-white)' }}>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--text)', marginBottom:'12px' }}>Our Service Promise</h3>
                <ul className="check-list">
                  {['Pricing discussed before work begins','You approve all repairs in advance','One-year warranty on parts and labor','Licensed irrigation professional','No guesswork — accurate diagnostics'].map(item=><li key={item}>{item}</li>)}
                </ul>
              </div>

              {/* Pricing notice */}
              <div style={{ background:'#fef9ec', border:'1px solid #f5c26e', borderRadius:'var(--r-md)', padding:'16px 18px' }}>
                <p style={{ fontSize:'14px', color:'#7a4f00', margin:0, lineHeight:1.65 }}>
                  <strong>Service Rate:</strong> 1 hour minimum at $135/hr, plus materials. After the first hour, billable time is charged by the half hour.
                </p>
              </div>

              {/* Areas */}
              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:700, color:'var(--text)', marginBottom:'10px' }}>Service Areas</h3>
                <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'10px' }}>Dallas County · Tarrant County · Denton County · Rockwall County</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                  {['Allen','Frisco','McKinney','Plano','Dallas','Garland','Irving','Carrollton','Richardson','Rowlett','Lewisville','Flower Mound'].map(city=>(
                    <span key={city} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', padding:'3px 10px', borderRadius:'12px', fontSize:'12px', fontWeight:500 }}>{city}</span>
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