'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ── Constants ── */
const TIME_SLOTS = [
  { id: 'morning',   label: '8:00 AM – 10:00 AM' },
  { id: 'midday',    label: '11:00 AM – 1:00 PM'  },
  { id: 'afternoon', label: '2:00 PM – 4:00 PM'   },
  { id: 'evening',   label: '5:00 PM – 7:00 PM'   },
];

const DAYS_OF_WEEK = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const SERVICES = [
  'Sprinkler Repair',
  'Sprinkler Installation',
  'Irrigation Design',
  'Smart Controller Upgrade',
  'Rain & Freeze Sensor',
  'Head Replacement',
  'Electrical Troubleshooting',
  'Seasonal Maintenance',
  'Commercial Services',
  'Other',
];

/* ── Helpers ── */
function getDateFromMonday(weekOffset = 0, dayIndex = 0) {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday + weekOffset * 7);
  const result = new Date(monday);
  result.setDate(monday.getDate() + dayIndex);
  return result;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatDateFull(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate();
}

/* ── Main Component ── */
export default function BookingPage() {
  const [step, setStep]           = useState(1); // 1=select date/time, 2=form, 3=confirm
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name:'', phone:'', email:'', address:'', service:'', notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({}); // key: "YYYY-MM-DD-slotId"

  // Load booked slots from API
  useEffect(() => {
    fetch('/api/bookings/slots').then(r => r.json()).then(data => {
      if (data.booked) setBookedSlots(data.booked);
    }).catch(() => {});
  }, []);

  // Block first 3 days from today (rolling)
  function isBlocked(date) {
    const today = new Date();
    today.setHours(0,0,0,0);
    const d = new Date(date);
    d.setHours(0,0,0,0);
    const diffDays = Math.floor((d - today) / 86400000);
    return diffDays < 3;
  }

  function isBooked(date, slotId) {
    const key = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${slotId}`;
    return !!bookedSlots[key];
  }

  function isSunday(date) { return date.getDay() === 0; }

  const weekDates = DAYS_OF_WEEK.map((_, i) => getDateFromMonday(weekOffset, i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      date: formatDateFull(selectedDate),
      dateObj: selectedDate.toISOString(),
      slot: selectedSlot,
      slotLabel: TIME_SLOTS.find(s => s.id === selectedSlot)?.label,
    };
    try {
      await fetch('/api/bookings', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    } catch {}
    setSubmitted(true);
    setStep(3);
  };

  return (
    <>
      <style>{`
        .slot-btn {
          width: 100%; padding: 12px 16px; border-radius: var(--r-md);
          border: 1.5px solid var(--gray-100); background: white;
          font-family: var(--sans); font-size: 14px; font-weight: 500;
          color: var(--text); cursor: pointer; transition: all .18s;
          text-align: left;
        }
        .slot-btn:hover:not(:disabled) { border-color: var(--green); color: var(--green); background: var(--green-faint); }
        .slot-btn.selected { border-color: var(--green); background: var(--green); color: white; }
        .slot-btn.blocked  { background: var(--gray-50); color: var(--gray-400); cursor: not-allowed; border-color: var(--gray-100); }
        .slot-btn.booked   { background: var(--gray-50); color: var(--gray-400); cursor: not-allowed; text-decoration: line-through; }
        .day-col { flex: 1; min-width: 120px; }
        .day-header { text-align: center; padding: 10px 8px; border-radius: var(--r-sm); margin-bottom: 10px; }
        .day-header.blocked { background: #fee2e2; color: #991b1b; }
        .day-header.available { background: var(--green-xlight); color: var(--green-dark); }
        .day-header.selected-day { background: var(--green); color: white; }
        .fi { width:100%; padding:10px 14px; font-size:15px; font-family:var(--sans); border:1.5px solid var(--gray-200); border-radius:var(--r-md); outline:none; transition:border-color .15s; color:var(--text); }
        .fi:focus { border-color: var(--green); box-shadow: 0 0 0 3px rgba(74,144,32,.10); }
        .step-indicator { display:flex; align-items:center; gap:8px; }
        .step-dot { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; }
        .step-line { flex:1; height:2px; background:var(--gray-100); }
      `}</style>

      {/* HERO */}
      <section style={{ background:'var(--green-deeper)', padding:'56px 0 48px' }}>
        <div className="container">
          <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,.9)' }}>Book Service</span>
          </nav>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,46px)', fontWeight:400, color:'white', marginBottom:'12px' }}>
            Schedule Your <em style={{ color:'var(--green-light)' }}>Irrigation Service</em>
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.75)', maxWidth:'520px', lineHeight:1.75, marginBottom:'20px' }}>
            Select an available date and time slot below. For emergencies or faster service, please call our office directly.
          </p>
          <a href="tel:9727559019" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--green)', color:'white', padding:'10px 22px', borderRadius:'var(--r-md)', fontWeight:700, fontSize:'15px', textDecoration:'none' }}>
            📞 Emergency? Call (972) 755-9019
          </a>
        </div>
      </section>

      <section className="section bg-soft" style={{ padding:'48px 0 80px' }}>
        <div className="container">

          {/* Step indicator */}
          <div className="step-indicator" style={{ maxWidth:'480px', margin:'0 auto 40px' }}>
            {[['01','Select Date & Time'],['02','Your Information'],['03','Confirmed']].map(([n, label], i) => (
              <>
                <div key={n} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'6px' }}>
                  <div className="step-dot" style={{ background: step > i+1 ? 'var(--green)' : step === i+1 ? 'var(--green)' : 'var(--gray-100)', color: step >= i+1 ? 'white' : 'var(--gray-400)' }}>{n}</div>
                  <span style={{ fontSize:'11px', fontWeight:600, color: step >= i+1 ? 'var(--green-dark)' : 'var(--gray-400)', textAlign:'center', whiteSpace:'nowrap' }}>{label}</span>
                </div>
                {i < 2 && <div className="step-line" key={`line-${i}`} style={{ background: step > i+1 ? 'var(--green)' : 'var(--gray-100)', marginBottom:'20px' }} />}
              </>
            ))}
          </div>

          {/* ── STEP 1: Calendar ── */}
          {step === 1 && (
            <div>
              {/* Emergency notice */}
              <div style={{ background:'#fef3c7', border:'1px solid #f59e0b', borderRadius:'var(--r-md)', padding:'14px 20px', marginBottom:'28px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
                <span style={{ fontSize:'20px', flexShrink:0 }}>⚡</span>
                <p style={{ fontSize:'14px', color:'#92400e', lineHeight:1.65 }}>
                  <strong>For emergencies or urgent service,</strong> please call our office directly at <a href="tel:9727559019" style={{ color:'#92400e', fontWeight:700 }}>(972) 755-9019</a> for faster scheduling. Online booking is for standard service appointments.
                </p>
              </div>

              {/* Week navigation */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
                <button onClick={() => weekOffset > 0 && setWeekOffset(w => w-1)} disabled={weekOffset === 0}
                  style={{ background: weekOffset === 0 ? 'var(--gray-50)' : 'var(--green-xlight)', color: weekOffset === 0 ? 'var(--gray-400)' : 'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 18px', borderRadius:'var(--r-md)', cursor: weekOffset === 0 ? 'not-allowed' : 'pointer', fontFamily:'var(--sans)', fontWeight:600, fontSize:'14px' }}>
                  ← Previous Week
                </button>
                <h3 style={{ fontFamily:'var(--serif)', fontSize:'20px', color:'var(--text)', fontWeight:400 }}>
                  {formatDate(weekDates[0])} – {formatDate(weekDates[5])}
                </h3>
                <button onClick={() => setWeekOffset(w => w+1)}
                  style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 18px', borderRadius:'var(--r-md)', cursor:'pointer', fontFamily:'var(--sans)', fontWeight:600, fontSize:'14px' }}>
                  Next Week →
                </button>
              </div>

              {/* Legend */}
              <div style={{ display:'flex', gap:'20px', marginBottom:'20px', flexWrap:'wrap' }}>
                {[['🔴','Fully Booked (Next 3 Days)'],['🟢','Available'],['⬜','Already Booked']].map(([ic,label]) => (
                  <div key={label} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', color:'var(--text-muted)' }}>
                    <span>{ic}</span> {label}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div style={{ overflowX:'auto' }}>
                <div style={{ display:'flex', gap:'12px', minWidth:'700px' }}>
                  {weekDates.map((date, dayIdx) => {
                    const blocked = isBlocked(date);
                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                    return (
                      <div key={dayIdx} className="day-col">
                        <div className={`day-header ${blocked ? 'blocked' : isSelected ? 'selected-day' : 'available'}`}>
                          <div style={{ fontWeight:700, fontSize:'14px' }}>{DAYS_OF_WEEK[dayIdx]}</div>
                          <div style={{ fontSize:'13px', opacity:.85 }}>{formatDate(date)}</div>
                          {blocked && <div style={{ fontSize:'11px', marginTop:'3px', fontWeight:700 }}>FULLY BOOKED</div>}
                        </div>
                        <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                          {TIME_SLOTS.map(slot => {
                            const booked = isBooked(date, slot.id);
                            const isSelectedSlot = isSelected && selectedSlot === slot.id;
                            return (
                              <button key={slot.id}
                                disabled={blocked || booked}
                                className={`slot-btn ${blocked ? 'blocked' : booked ? 'booked' : isSelectedSlot ? 'selected' : ''}`}
                                onClick={() => {
                                  if (!blocked && !booked) {
                                    setSelectedDate(date);
                                    setSelectedSlot(slot.id);
                                  }
                                }}
                              >
                                {slot.label}
                                {booked && <span style={{ fontSize:'11px', display:'block' }}>Booked</span>}
                                {blocked && <span style={{ fontSize:'11px', display:'block' }}>Unavailable</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selection summary + next */}
              {selectedDate && selectedSlot && (
                <div style={{ marginTop:'28px', padding:'20px 24px', background:'var(--green)', borderRadius:'var(--r-lg)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px' }}>
                  <div>
                    <p style={{ color:'rgba(255,255,255,.75)', fontSize:'13px', marginBottom:'4px' }}>Selected Appointment</p>
                    <p style={{ color:'white', fontWeight:700, fontSize:'17px' }}>
                      {formatDateFull(selectedDate)} · {TIME_SLOTS.find(s => s.id === selectedSlot)?.label}
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
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'var(--r-md)', padding:'14px 20px', marginBottom:'28px' }}>
                <p style={{ fontSize:'15px', color:'var(--green-dark)', fontWeight:600 }}>
                  📅 {formatDateFull(selectedDate)} · {TIME_SLOTS.find(s => s.id === selectedSlot)?.label}
                </p>
                <button onClick={() => setStep(1)} style={{ background:'none', border:'none', color:'var(--green)', cursor:'pointer', fontSize:'13px', fontWeight:600, marginTop:'4px', fontFamily:'var(--sans)' }}>
                  ← Change date/time
                </button>
              </div>

              <h2 style={{ fontFamily:'var(--serif)', fontSize:'26px', fontWeight:400, color:'var(--text)', marginBottom:'24px' }}>
                Your <em>Information</em>
              </h2>
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Full Name *</label>
                    <input className="fi" required value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} placeholder="John Smith" />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Phone Number *</label>
                    <input className="fi" required value={form.phone} onChange={e => setForm(p=>({...p,phone:e.target.value}))} placeholder="(972) 555-0100" type="tel" />
                  </div>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Email</label>
                  <input className="fi" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))} placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Address *</label>
                  <input className="fi" required value={form.address} onChange={e => setForm(p=>({...p,address:e.target.value}))} placeholder="123 Main St, Plano, TX 75024" />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Service Needed *</label>
                  <select className="fi" required value={form.service} onChange={e => setForm(p=>({...p,service:e.target.value}))}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Additional Notes</label>
                  <textarea className="fi" rows={3} value={form.notes} onChange={e => setForm(p=>({...p,notes:e.target.value}))} placeholder="Describe the issue or any additional details..." style={{ resize:'vertical', lineHeight:1.65 }} />
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
            <div style={{ maxWidth:'560px', margin:'0 auto', textAlign:'center' }}>
              <div style={{ fontSize:'64px', marginBottom:'16px' }}>✅</div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'32px', fontWeight:400, color:'var(--text)', marginBottom:'12px' }}>
                Booking <em>Received!</em>
              </h2>
              <p style={{ fontSize:'17px', color:'var(--text-muted)', lineHeight:1.75, marginBottom:'20px' }}>
                Thank you, <strong>{form.name}</strong>. Your appointment request has been received.
              </p>
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'var(--r-lg)', padding:'24px', marginBottom:'24px', textAlign:'left' }}>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'15px', fontWeight:700, color:'var(--green-dark)', marginBottom:'14px', textTransform:'uppercase', letterSpacing:'.06em' }}>Appointment Summary</h3>
                {[
                  ['📅', 'Date', formatDateFull(selectedDate)],
                  ['🕐', 'Time', TIME_SLOTS.find(s => s.id === selectedSlot)?.label],
                  ['📍', 'Address', form.address],
                  ['🔧', 'Service', form.service],
                ].map(([ic, label, val]) => (
                  <div key={label} style={{ display:'flex', gap:'10px', marginBottom:'10px' }}>
                    <span style={{ fontSize:'16px', flexShrink:0 }}>{ic}</span>
                    <div>
                      <span style={{ fontSize:'12px', color:'var(--green)', fontWeight:600, display:'block', textTransform:'uppercase' }}>{label}</span>
                      <span style={{ fontSize:'15px', color:'var(--text)' }}>{val}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'24px' }}>
                We will confirm your appointment within 24 hours. For emergencies, call us directly.
              </p>
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
