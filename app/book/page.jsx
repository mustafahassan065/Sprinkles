'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TIME_SLOTS = [
  { id:'morning',   label:'8:00 AM – 10:00 AM' },
  { id:'midday',    label:'11:00 AM – 1:00 PM'  },
  { id:'afternoon', label:'2:00 PM – 4:00 PM'   },
  { id:'evening',   label:'5:00 PM – 7:00 PM'   },
];

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const SERVICES = ['Sprinkler Repair','Sprinkler Installation','Irrigation Design','Smart Controller Upgrade','Rain & Freeze Sensor','Head Replacement','Electrical Troubleshooting','Seasonal Maintenance','Commercial Services','Other'];

function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday + weekOffset * 7);
  return Array.from({ length:6 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function fmtShort(date) { return date.toLocaleDateString('en-US', { month:'short', day:'numeric' }); }
function fmtDay(date)   { return date.toLocaleDateString('en-US', { weekday:'short' }); }
function fmtFull(date)  { return date.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' }); }
function dateKey(date)  { return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; }
function isSameDay(a,b) { return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

export default function BookingPage() {
  const [step,         setStep]         = useState(1);
  const [weekOffset,   setWeekOffset]   = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots,  setBookedSlots]  = useState({});
  const [blockDays,    setBlockDays]    = useState(3);
  const [form,         setForm]         = useState({ name:'', phone:'', email:'', address:'', service:'', notes:'', preferredDate:'', preferredTime:'' });
  const [submitted,    setSubmitted]    = useState(false);

  useEffect(() => {
    fetch('/api/bookings/slots').then(r=>r.json()).then(d=>{ if(d.booked) setBookedSlots(d.booked); }).catch(()=>{});
    fetch('/api/admin/blocked').then(r=>r.json()).then(d=>{ if(d.blockDays) setBlockDays(d.blockDays); }).catch(()=>{});
  }, []);

  function isAutoBlocked(date) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(date); d.setHours(0,0,0,0);
    const diffDays = Math.floor((d - today) / 86400000);
    // Block past dates AND next N days (default 3: today, tomorrow, day after)
    return diffDays < 0 || diffDays < blockDays;
  }

  function isBooked(date, slotId) {
    return !!bookedSlots[`${dateKey(date)}-${slotId}`];
  }

  const weekDates = getWeekDates(weekOffset);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, date: fmtFull(selectedDate), dateObj: selectedDate.toISOString(), slot: selectedSlot, slotLabel: TIME_SLOTS.find(s=>s.id===selectedSlot)?.label };
    try { await fetch('/api/bookings', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) }); } catch {}
    setSubmitted(true);
    setStep(3);
  };

  return (
    <>
      <style>{`
        .slot-btn { width:100%; padding:10px 12px; border-radius:8px; border:2px solid; font-family:var(--sans); font-size:13px; font-weight:600; cursor:pointer; transition:all .18s; text-align:center; }
        .slot-available { background:#f0faf0; border-color:#4a9020; color:#2d5c12; }
        .slot-available:hover { background:#4a9020; color:white; }
        .slot-selected  { background:#4a9020; border-color:#4a9020; color:white; }
        .slot-blocked   { background:#fee2e2; border-color:#fca5a5; color:#991b1b; cursor:not-allowed; }
        .slot-booked    { background:#f3f4f6; border-color:#d1d5db; color:#9ca3af; cursor:not-allowed; text-decoration:line-through; }
        .fi { width:100%; padding:10px 14px; font-size:15px; font-family:var(--sans); border:1.5px solid var(--gray-200); border-radius:8px; outline:none; transition:border-color .15s; color:var(--text); box-sizing:border-box; }
        .fi:focus { border-color:var(--green); box-shadow:0 0 0 3px rgba(74,144,32,.10); }
        .step-dot { width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; }
      `}</style>

      {/* HERO */}
      <section style={{ background:'var(--green-deeper)', padding:'52px 0 44px' }}>
        <div className="container">
          <nav style={{ marginBottom:'12px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,.9)' }}>Book Service</span>
          </nav>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'12px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Service</em>
          </h1>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,.75)', maxWidth:'520px', lineHeight:1.75, marginBottom:'16px' }}>
            Select an available time slot below. For emergency service, call our office directly for faster scheduling.
          </p>
          <a href="tel:9727559019" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--green)', color:'white', padding:'10px 22px', borderRadius:'8px', fontWeight:700, fontSize:'15px', textDecoration:'none' }}>
            ⚡ Emergency? Call (972) 755-9019
          </a>
        </div>
      </section>

      {/* PRICING NOTICE */}
      <div style={{ background:'#fef9ec', borderBottom:'1px solid #f5c26e' }}>
        <div className="container" style={{ padding:'14px 28px' }}>
          <p style={{ fontSize:'14px', color:'#7a4f00', margin:0 }}>
            <strong>Service Rate:</strong> 1 hour minimum at $135/hr, plus materials. After the first hour, billable time is charged by the half hour. Billable time starts when technician arrives and stops after payment is accepted.
          </p>
        </div>
      </div>

      <section className="section bg-soft" style={{ padding:'40px 0 72px' }}>
        <div className="container">

          {/* Step indicator */}
          <div style={{ display:'flex', alignItems:'center', maxWidth:'440px', margin:'0 auto 40px', gap:'8px' }}>
            {[['01','Select Date & Time'],['02','Your Information'],['03','Confirmed']].map(([n,label],i) => (
              <div key={n} style={{ display:'flex', alignItems:'center', gap:'8px', flex: i<2 ? 'none' : 1 }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'4px' }}>
                  <div className="step-dot" style={{ background: step>=i+1 ? 'var(--green)' : 'var(--gray-100)', color: step>=i+1 ? 'white' : 'var(--gray-400)' }}>{n}</div>
                  <span style={{ fontSize:'10px', fontWeight:600, color: step>=i+1 ? 'var(--green-dark)' : 'var(--gray-400)', textAlign:'center', whiteSpace:'nowrap' }}>{label}</span>
                </div>
                {i<2 && <div style={{ flex:1, height:'2px', background: step>i+1 ? 'var(--green)' : 'var(--gray-100)', marginBottom:'16px' }} />}
              </div>
            ))}
          </div>

          {/* ── STEP 1: Calendar ── */}
          {step === 1 && (
            <div>
              {/* Emergency notice */}
              <div style={{ background:'#fef3c7', border:'1px solid #f59e0b', borderRadius:'10px', padding:'14px 20px', marginBottom:'24px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
                <span style={{ fontSize:'20px', flexShrink:0 }}>⚡</span>
                <p style={{ fontSize:'14px', color:'#92400e', lineHeight:1.65, margin:0 }}>
                  <strong>For emergencies or urgent service,</strong> please call <a href="tel:9727559019" style={{ color:'#92400e', fontWeight:700 }}>(972) 755-9019</a> for faster scheduling.
                </p>
              </div>

              {/* Color legend */}
              <div style={{ display:'flex', gap:'16px', marginBottom:'20px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontSize:'13px', fontWeight:600, color:'var(--text-muted)' }}>Legend:</span>
                {[['#f0faf0','#4a9020','🟢 Available — Select to Book'],['#fee2e2','#991b1b','🔴 Unavailable (Next 3 Days)'],['#f3f4f6','#9ca3af','⬜ Already Booked']].map(([bg,color,label]) => (
                  <div key={label} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', color:'var(--text-muted)' }}>
                    <span style={{ width:'14px', height:'14px', borderRadius:'3px', background:bg, border:`2px solid ${color}`, display:'inline-block', flexShrink:0 }} />
                    {label}
                  </div>
                ))}
              </div>

              {/* Week nav */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px', flexWrap:'wrap', gap:'10px' }}>
                <button onClick={() => weekOffset>0 && setWeekOffset(w=>w-1)} disabled={weekOffset===0}
                  style={{ background: weekOffset===0 ? 'var(--gray-50)' : 'var(--green-xlight)', color: weekOffset===0 ? 'var(--gray-400)' : 'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 16px', borderRadius:'8px', cursor: weekOffset===0 ? 'not-allowed' : 'pointer', fontFamily:'var(--sans)', fontWeight:600, fontSize:'13px' }}>
                  ← Previous
                </button>
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'18px', color:'var(--text)', fontWeight:400 }}>
                    {fmtShort(weekDates[0])} – {fmtShort(weekDates[5])}, {weekDates[0].getFullYear()}
                  </div>
                  <div style={{ fontSize:'12px', color:'var(--text-muted)', marginTop:'2px' }}>
                    {weekOffset === 0 ? 'This Week' : weekOffset === 1 ? 'Next Week' : `${weekOffset} Weeks Ahead`}
                  </div>
                </div>
                <button onClick={() => setWeekOffset(w=>w+1)}
                  style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 16px', borderRadius:'8px', cursor:'pointer', fontFamily:'var(--sans)', fontWeight:600, fontSize:'13px' }}>
                  Next →
                </button>
              </div>

              {/* Calendar grid */}
              <div style={{ overflowX:'auto' }}>
                <div style={{ display:'grid', gridTemplateColumns:'90px repeat(6,1fr)', gap:'8px', minWidth:'680px' }}>
                  {/* Header row */}
                  <div />
                  {weekDates.map((date,i) => {
                    const blocked = isAutoBlocked(date);
                    const isSelected = selectedDate && isSameDay(date,selectedDate);
                    return (
                      <div key={i} style={{ textAlign:'center', padding:'10px 6px', borderRadius:'8px', background: blocked ? '#fee2e2' : isSelected ? 'var(--green)' : 'var(--green-xlight)', border: `2px solid ${blocked ? '#fca5a5' : isSelected ? 'var(--green)' : 'var(--green-light)'}` }}>
                        <div style={{ fontWeight:700, fontSize:'13px', color: blocked ? '#991b1b' : isSelected ? 'white' : 'var(--green-dark)' }}>{fmtDay(date)}</div>
                        <div style={{ fontSize:'12px', color: blocked ? '#991b1b' : isSelected ? 'rgba(255,255,255,.85)' : 'var(--green)' }}>{fmtShort(date)}</div>
                        {blocked && <div style={{ fontSize:'10px', color:'#991b1b', fontWeight:700, marginTop:'2px' }}>UNAVAILABLE</div>}
                      </div>
                    );
                  })}

                  {/* Slot rows */}
                  {TIME_SLOTS.map(slot => (
                    <>
                      <div key={`label-${slot.id}`} style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight:'8px' }}>
                        <span style={{ fontSize:'11px', fontWeight:600, color:'var(--text-muted)', textAlign:'right', lineHeight:1.3 }}>{slot.label}</span>
                      </div>
                      {weekDates.map((date,i) => {
                        const blocked = isAutoBlocked(date);
                        const booked  = isBooked(date, slot.id);
                        const isSelectedSlot = selectedDate && isSameDay(date,selectedDate) && selectedSlot===slot.id;
                        let cls = 'slot-available';
                        if (blocked) cls = 'slot-blocked';
                        else if (booked) cls = 'slot-booked';
                        else if (isSelectedSlot) cls = 'slot-selected';
                        return (
                          <button key={`${i}-${slot.id}`} className={`slot-btn ${cls}`}
                            disabled={blocked || booked}
                            onClick={() => { if(!blocked && !booked) { setSelectedDate(date); setSelectedSlot(slot.id); } }}>
                            {blocked ? 'Unavailable' : booked ? 'Booked' : isSelectedSlot ? '✓ Selected' : 'Available'}
                          </button>
                        );
                      })}
                    </>
                  ))}
                </div>
              </div>

              {/* Selection bar */}
              {selectedDate && selectedSlot && (
                <div style={{ marginTop:'24px', padding:'18px 24px', background:'var(--green)', borderRadius:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px' }}>
                  <div>
                    <p style={{ color:'rgba(255,255,255,.75)', fontSize:'12px', marginBottom:'4px' }}>Selected Appointment</p>
                    <p style={{ color:'white', fontWeight:700, fontSize:'16px' }}>
                      {fmtFull(selectedDate)} · {TIME_SLOTS.find(s=>s.id===selectedSlot)?.label}
                    </p>
                  </div>
                  <button onClick={() => setStep(2)} className="btn-white" style={{ padding:'12px 28px', fontSize:'15px' }}>
                    Continue →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── STEP 2: Form ── */}
          {step === 2 && (
            <div style={{ maxWidth:'640px', margin:'0 auto' }}>
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'8px', padding:'14px 20px', marginBottom:'28px' }}>
                <p style={{ fontSize:'15px', color:'var(--green-dark)', fontWeight:600, margin:0 }}>
                  📅 {fmtFull(selectedDate)} · {TIME_SLOTS.find(s=>s.id===selectedSlot)?.label}
                </p>
                <button onClick={() => setStep(1)} style={{ background:'none', border:'none', color:'var(--green)', cursor:'pointer', fontSize:'13px', fontWeight:600, marginTop:'4px', fontFamily:'var(--sans)', padding:0 }}>
                  ← Change date/time
                </button>
              </div>

              <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'24px' }}>Your <em>Information</em></h2>

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Full Name *</label>
                    <input className="fi" required value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} placeholder="John Smith" />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Phone *</label>
                    <input className="fi" required value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} placeholder="(972) 555-0100" type="tel" />
                  </div>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Email</label>
                  <input className="fi" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Address *</label>
                  <input className="fi" required value={form.address} onChange={e=>setForm(p=>({...p,address:e.target.value}))} placeholder="123 Main St, Plano, TX 75024" />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Needed *</label>
                  <select className="fi" required value={form.service} onChange={e=>setForm(p=>({...p,service:e.target.value}))}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Preferred Date</label>
                    <input className="fi" type="date" value={form.preferredDate} onChange={e=>setForm(p=>({...p,preferredDate:e.target.value}))} />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Preferred Time</label>
                    <select className="fi" value={form.preferredTime} onChange={e=>setForm(p=>({...p,preferredTime:e.target.value}))}>
                      <option value="">Any time</option>
                      {TIME_SLOTS.map(s=><option key={s.id} value={s.label}>{s.label}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'5px', textTransform:'uppercase', letterSpacing:'.08em' }}>Additional Notes</label>
                  <textarea className="fi" rows={3} value={form.notes} onChange={e=>setForm(p=>({...p,notes:e.target.value}))} placeholder="Describe the issue or any additional details..." style={{ resize:'vertical', lineHeight:1.65 }} />
                </div>

                {/* Pricing reminder */}
                <div style={{ background:'#fef9ec', border:'1px solid #f5c26e', borderRadius:'8px', padding:'12px 16px' }}>
                  <p style={{ fontSize:'13px', color:'#7a4f00', margin:0, lineHeight:1.65 }}>
                    <strong>Rate:</strong> 1 hour minimum at $135/hr, plus materials. After the first hour, billable time is charged by the half hour.
                  </p>
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent:'center', fontSize:'16px', padding:'15px' }}>
                  Confirm Booking →
                </button>
                <p style={{ fontSize:'13px', color:'var(--text-muted)', textAlign:'center' }}>
                  We will confirm your appointment within 24 hours. For emergencies, call (972) 755-9019.
                </p>
              </form>
            </div>
          )}

          {/* ── STEP 3: Confirmed ── */}
          {step === 3 && (
            <div style={{ maxWidth:'540px', margin:'0 auto', textAlign:'center' }}>
              <div style={{ fontSize:'64px', marginBottom:'16px' }}>✅</div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'32px', fontWeight:400, color:'var(--text)', marginBottom:'12px' }}>Booking <em>Received!</em></h2>
              <p style={{ fontSize:'17px', color:'var(--text-muted)', lineHeight:1.75, marginBottom:'20px' }}>
                Thank you, <strong>{form.name}</strong>. Your appointment request has been received. We will confirm within 24 hours.
              </p>
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'12px', padding:'24px', marginBottom:'24px', textAlign:'left' }}>
                {[['📅','Date',fmtFull(selectedDate)],['🕐','Time',TIME_SLOTS.find(s=>s.id===selectedSlot)?.label],['📍','Address',form.address],['🔧','Service',form.service]].map(([ic,label,val]) => (
                  <div key={label} style={{ display:'flex', gap:'10px', marginBottom:'12px' }}>
                    <span style={{ fontSize:'16px', flexShrink:0 }}>{ic}</span>
                    <div>
                      <span style={{ fontSize:'11px', color:'var(--green)', fontWeight:700, display:'block', textTransform:'uppercase' }}>{label}</span>
                      <span style={{ fontSize:'15px', color:'var(--text)' }}>{val}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="tel:9727559019" className="btn-primary" style={{ display:'inline-flex', justifyContent:'center', fontSize:'16px', padding:'14px 32px' }}>
                📞 (972) 755-9019
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}