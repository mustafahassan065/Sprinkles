'use client';
import { useState, useEffect } from 'react';

const TIME_SLOTS = [
  { id: 'morning',   label: '8:00 AM – 10:00 AM' },
  { id: 'midday',    label: '11:00 AM – 1:00 PM'  },
  { id: 'afternoon', label: '2:00 PM – 4:00 PM'   },
  { id: 'evening',   label: '5:00 PM – 7:00 PM'   },
];
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday + weekOffset * 7);
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatDateFull(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function dateKey(date) {
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export default function AdminPage() {
  const [authed,       setAuthed]       = useState(false);
  const [password,     setPassword]     = useState('');
  const [authError,    setAuthError]    = useState('');
  const [tab,          setTab]          = useState('calendar'); // calendar | bookings | settings
  const [weekOffset,   setWeekOffset]   = useState(0);
  const [bookings,     setBookings]     = useState([]);
  const [blockedSlots, setBlockedSlots] = useState({});
  const [blockDays,    setBlockDays]    = useState(3);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filterDate,   setFilterDate]   = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [successMsg,   setSuccessMsg]   = useState('');

  const weekDates = getWeekDates(weekOffset);

  useEffect(() => {
    if (!authed) return;
    fetch('/api/admin/bookings').then(r => r.json()).then(d => { if (d.bookings) setBookings(d.bookings); }).catch(() => {});
    fetch('/api/admin/blocked').then(r => r.json()).then(d => { if (d.blocked) setBlockedSlots(d.blocked); if (d.blockDays !== undefined) setBlockDays(d.blockDays); }).catch(() => {});
  }, [authed]);

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === 'sprinklers2024!') { setAuthed(true); setAuthError(''); }
    else setAuthError('Incorrect password.');
  };

  const toggleBlockSlot = async (date, slotId) => {
    const key = `${dateKey(date)}-${slotId}`;
    const newBlocked = { ...blockedSlots };
    if (newBlocked[key]) delete newBlocked[key];
    else newBlocked[key] = true;
    setBlockedSlots(newBlocked);
    await fetch('/api/admin/blocked', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ blocked: newBlocked, blockDays }) });
    showSuccess('Slot updated!');
  };

  const updateBlockDays = async (days) => {
    setBlockDays(days);
    await fetch('/api/admin/blocked', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ blocked: blockedSlots, blockDays: days }) });
    showSuccess(`Rolling block set to ${days} days!`);
  };

  const updateBookingStatus = async (id, status) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updated);
    await fetch(`/api/admin/bookings/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ status }) });
    showSuccess('Booking updated!');
  };

  const showSuccess = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Group bookings by area/city for proximity scheduling
  function extractCity(address) {
    if (!address) return 'Unknown';
    const parts = address.split(',');
    return parts.length >= 2 ? parts[parts.length - 2].trim().split(' ').slice(-1)[0] : 'Unknown';
  }

  const bookingsByCity = bookings.reduce((acc, b) => {
    const city = extractCity(b.address);
    if (!acc[city]) acc[city] = [];
    acc[city].push(b);
    return acc;
  }, {});

  const filteredBookings = bookings.filter(b => {
    const matchDate = filterDate ? b.date?.includes(filterDate) : true;
    const matchStatus = filterStatus === 'all' ? true : b.status === filterStatus;
    return matchDate && matchStatus;
  });

  // ── LOGIN ──
  if (!authed) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--off-white)' }}>
        <div className="card" style={{ width:'100%', maxWidth:'400px', padding:'40px' }}>
          <div style={{ textAlign:'center', marginBottom:'28px' }}>
            <div style={{ fontSize:'36px', marginBottom:'10px' }}>🔒</div>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'24px', fontWeight:400, color:'var(--text)' }}>Admin Panel</h1>
            <p style={{ fontSize:'14px', color:'var(--text-muted)', marginTop:'6px' }}>Sprinklers and Lawns — Booking Management</p>
          </div>
          <form onSubmit={handleAuth} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div>
              <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.08em' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                style={{ width:'100%', padding:'11px 14px', fontSize:'15px', fontFamily:'var(--sans)', border:'1.5px solid var(--gray-200)', borderRadius:'var(--r-md)', outline:'none' }} />
            </div>
            {authError && <p style={{ color:'#c0392b', fontSize:'14px' }}>{authError}</p>}
            <button type="submit" className="btn-primary" style={{ justifyContent:'center', padding:'13px' }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:'100vh', background:'var(--off-white)' }}>
      {/* Top bar */}
      <div style={{ background:'var(--green-deeper)', color:'white', padding:'14px 28px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <span style={{ fontFamily:'var(--serif)', fontSize:'20px', fontWeight:400 }}>🌿 Admin Panel</span>
          <span style={{ fontSize:'13px', color:'rgba(255,255,255,.6)', marginLeft:'12px' }}>Sprinklers and Lawns — Booking Management</span>
        </div>
        <div style={{ display:'flex', gap:'20px', alignItems:'center' }}>
          {successMsg && <span style={{ background:'rgba(74,144,32,.3)', color:'#a8d880', padding:'5px 14px', borderRadius:'20px', fontSize:'13px', fontWeight:600 }}>✓ {successMsg}</span>}
          <a href="/" style={{ color:'rgba(255,255,255,.7)', fontSize:'13px', textDecoration:'none' }}>← Back to Site</a>
          <button onClick={() => setAuthed(false)} style={{ background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.2)', color:'white', padding:'6px 14px', borderRadius:'var(--r-sm)', cursor:'pointer', fontSize:'13px', fontFamily:'var(--sans)' }}>Logout</button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background:'var(--green)', padding:'16px 28px', display:'flex', gap:'32px', flexWrap:'wrap' }}>
        {[
          { label:'Total Bookings',  value: bookings.length },
          { label:'Pending',         value: bookings.filter(b=>b.status==='pending').length },
          { label:'Confirmed',       value: bookings.filter(b=>b.status==='confirmed').length },
          { label:'Completed',       value: bookings.filter(b=>b.status==='completed').length },
          { label:'Rolling Block',   value: `${blockDays} Days` },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontFamily:'var(--serif)', fontSize:'22px', color:'white' }}>{s.value}</div>
            <div style={{ fontSize:'12px', color:'rgba(255,255,255,.7)', fontWeight:600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ background:'white', borderBottom:'1px solid var(--gray-100)', padding:'0 28px', display:'flex', gap:'0' }}>
        {[['calendar','📅 Calendar View'],['bookings','📋 All Bookings'],['proximity','📍 By Area'],['settings','⚙️ Settings']].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)}
            style={{ padding:'16px 24px', background:'none', border:'none', borderBottom: tab === id ? '3px solid var(--green)' : '3px solid transparent', color: tab === id ? 'var(--green-dark)' : 'var(--text-muted)', fontFamily:'var(--sans)', fontSize:'14px', fontWeight: tab === id ? 700 : 500, cursor:'pointer', transition:'all .15s' }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding:'28px', maxWidth:'1300px', margin:'0 auto' }}>

        {/* ── TAB: CALENDAR ── */}
        {tab === 'calendar' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)' }}>
                Schedule Calendar — <em>Click slots to block/unblock</em>
              </h2>
              <div style={{ display:'flex', gap:'10px' }}>
                <button onClick={() => setWeekOffset(w => Math.max(0, w-1))} disabled={weekOffset===0}
                  style={{ background: weekOffset===0 ? 'var(--gray-50)' : 'var(--green-xlight)', color: weekOffset===0 ? 'var(--gray-400)' : 'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 16px', borderRadius:'var(--r-sm)', cursor: weekOffset===0 ? 'not-allowed' : 'pointer', fontFamily:'var(--sans)', fontSize:'13px', fontWeight:600 }}>
                  ← Prev
                </button>
                <span style={{ padding:'8px 16px', fontWeight:600, fontSize:'14px', color:'var(--text)' }}>{formatDate(weekDates[0])} – {formatDate(weekDates[5])}</span>
                <button onClick={() => setWeekOffset(w => w+1)}
                  style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'1px solid var(--gray-100)', padding:'8px 16px', borderRadius:'var(--r-sm)', cursor:'pointer', fontFamily:'var(--sans)', fontSize:'13px', fontWeight:600 }}>
                  Next →
                </button>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display:'flex', gap:'16px', marginBottom:'16px', flexWrap:'wrap' }}>
              {[['#fee2e2','#991b1b','Auto-blocked (Rolling)'],['#fef3c7','#92400e','Manually Blocked'],['#edf7e2','#356a16','Available'],['#d1fae5','#065f46','Has Booking']].map(([bg,color,label]) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'12px', color }}>
                  <span style={{ width:'14px', height:'14px', borderRadius:'3px', background:bg, display:'inline-block', border:`1px solid ${color}` }} />
                  {label}
                </div>
              ))}
            </div>

            <div style={{ overflowX:'auto' }}>
              <div style={{ display:'grid', gridTemplateColumns:'100px repeat(6,1fr)', gap:'1px', background:'var(--gray-100)', border:'1px solid var(--gray-100)', borderRadius:'var(--r-lg)', overflow:'hidden', minWidth:'800px' }}>
                {/* Header row */}
                <div style={{ background:'var(--green-deeper)', padding:'10px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ fontSize:'12px', color:'rgba(255,255,255,.7)', fontWeight:700 }}>TIME</span>
                </div>
                {weekDates.map((date, i) => {
                  const autoBlocked = (() => {
                    const today = new Date(); today.setHours(0,0,0,0);
                    const d = new Date(date); d.setHours(0,0,0,0);
                    return Math.floor((d - today)/86400000) < blockDays;
                  })();
                  return (
                    <div key={i} style={{ background: autoBlocked ? '#991b1b' : 'var(--green-deeper)', padding:'10px', textAlign:'center' }}>
                      <div style={{ color:'white', fontSize:'13px', fontWeight:700 }}>{DAYS[i]}</div>
                      <div style={{ color:'rgba(255,255,255,.75)', fontSize:'12px' }}>{formatDate(date)}</div>
                      {autoBlocked && <div style={{ color:'#fca5a5', fontSize:'11px', fontWeight:700, marginTop:'2px' }}>AUTO-BLOCKED</div>}
                    </div>
                  );
                })}

                {/* Slot rows */}
                {TIME_SLOTS.map(slot => (
                  <>
                    <div key={`label-${slot.id}`} style={{ background:'white', padding:'10px 8px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontSize:'11px', fontWeight:700, color:'var(--text-muted)', textAlign:'center', lineHeight:1.4 }}>{slot.label}</span>
                    </div>
                    {weekDates.map((date, i) => {
                      const today = new Date(); today.setHours(0,0,0,0);
                      const d = new Date(date); d.setHours(0,0,0,0);
                      const autoBlocked = Math.floor((d - today)/86400000) < blockDays;
                      const key = `${dateKey(date)}-${slot.id}`;
                      const manualBlocked = !!blockedSlots[key];
                      const dayBookings = bookings.filter(b => b.slot === slot.id && b.date?.includes(formatDate(date)));
                      return (
                        <div key={`${i}-${slot.id}`}
                          onClick={() => !autoBlocked && toggleBlockSlot(date, slot.id)}
                          style={{
                            background: autoBlocked ? '#fee2e2' : manualBlocked ? '#fef3c7' : dayBookings.length > 0 ? '#d1fae5' : 'white',
                            padding:'8px', cursor: autoBlocked ? 'not-allowed' : 'pointer',
                            display:'flex', flexDirection:'column', gap:'3px', minHeight:'60px',
                            transition:'background .15s',
                          }}>
                          {autoBlocked && <span style={{ fontSize:'10px', color:'#991b1b', fontWeight:700 }}>BLOCKED</span>}
                          {manualBlocked && !autoBlocked && <span style={{ fontSize:'10px', color:'#92400e', fontWeight:700 }}>BLOCKED</span>}
                          {dayBookings.map(b => (
                            <div key={b.id} onClick={e => { e.stopPropagation(); setSelectedBooking(b); }}
                              style={{ background:'var(--green)', color:'white', borderRadius:'4px', padding:'3px 6px', fontSize:'10px', fontWeight:600, cursor:'pointer' }}>
                              {b.name?.split(' ')[0]} · {b.service?.split(' ')[0]}
                            </div>
                          ))}
                          {!autoBlocked && !manualBlocked && dayBookings.length === 0 && (
                            <span style={{ fontSize:'10px', color:'var(--gray-400)' }}>Click to block</span>
                          )}
                        </div>
                      );
                    })}
                  </>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: ALL BOOKINGS ── */}
        {tab === 'bookings' && (
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', flexWrap:'wrap', gap:'12px' }}>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)' }}>All Bookings</h2>
              <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                <input value={filterDate} onChange={e => setFilterDate(e.target.value)} placeholder="Filter by date..."
                  style={{ padding:'8px 14px', fontSize:'14px', border:'1px solid var(--gray-100)', borderRadius:'var(--r-sm)', fontFamily:'var(--sans)', outline:'none' }} />
                <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
                  style={{ padding:'8px 14px', fontSize:'14px', border:'1px solid var(--gray-100)', borderRadius:'var(--r-sm)', fontFamily:'var(--sans)', outline:'none' }}>
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {filteredBookings.length === 0 ? (
              <div className="card" style={{ textAlign:'center', padding:'48px' }}>
                <p style={{ color:'var(--text-muted)', fontSize:'16px' }}>No bookings found.</p>
              </div>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {filteredBookings.map(b => (
                  <div key={b.id} className="card" style={{ display:'grid', gridTemplateColumns:'1fr 120px 140px 180px auto', gap:'16px', alignItems:'center', padding:'16px 20px' }}>
                    <div>
                      <div style={{ fontWeight:700, fontSize:'15px', color:'var(--text)' }}>{b.name}</div>
                      <div style={{ fontSize:'13px', color:'var(--text-muted)' }}>{b.phone} · {b.address}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:'12px', color:'var(--green)', fontWeight:700, textTransform:'uppercase' }}>Service</div>
                      <div style={{ fontSize:'13px', color:'var(--text)' }}>{b.service}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:'12px', color:'var(--green)', fontWeight:700, textTransform:'uppercase' }}>Date</div>
                      <div style={{ fontSize:'13px', color:'var(--text)' }}>{b.date}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:'12px', color:'var(--green)', fontWeight:700, textTransform:'uppercase' }}>Time</div>
                      <div style={{ fontSize:'13px', color:'var(--text)' }}>{b.slotLabel}</div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                      <select value={b.status || 'pending'} onChange={e => updateBookingStatus(b.id, e.target.value)}
                        style={{ padding:'5px 10px', fontSize:'12px', border:'1px solid var(--gray-100)', borderRadius:'var(--r-sm)', fontFamily:'var(--sans)', fontWeight:600,
                          color: b.status === 'confirmed' ? 'var(--green-dark)' : b.status === 'completed' ? 'var(--blue-deeper)' : b.status === 'cancelled' ? '#991b1b' : '#92400e',
                          background: b.status === 'confirmed' ? 'var(--green-xlight)' : b.status === 'completed' ? 'var(--blue-xlight)' : b.status === 'cancelled' ? '#fee2e2' : '#fef3c7',
                        }}>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button onClick={() => setSelectedBooking(b)} style={{ background:'var(--green-xlight)', color:'var(--green-dark)', border:'none', padding:'5px 10px', borderRadius:'var(--r-sm)', fontSize:'12px', fontWeight:600, cursor:'pointer', fontFamily:'var(--sans)' }}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── TAB: PROXIMITY ── */}
        {tab === 'proximity' && (
          <div>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'8px' }}>Bookings by Area</h2>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', marginBottom:'24px' }}>Group appointments by city/area to minimize drive time. Schedule nearby appointments on the same day.</p>
            {Object.keys(bookingsByCity).length === 0 ? (
              <div className="card" style={{ textAlign:'center', padding:'48px' }}>
                <p style={{ color:'var(--text-muted)', fontSize:'16px' }}>No bookings yet to group.</p>
              </div>
            ) : (
              <div className="grid-3" style={{ alignItems:'start' }}>
                {Object.entries(bookingsByCity).map(([city, cityBookings]) => (
                  <div key={city} className="card">
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'14px' }}>
                      <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--green-dark)' }}>📍 {city}</h3>
                      <span style={{ background:'var(--green-xlight)', color:'var(--green-dark)', fontSize:'12px', fontWeight:700, padding:'3px 10px', borderRadius:'20px' }}>{cityBookings.length} appts</span>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                      {cityBookings.map(b => (
                        <div key={b.id} style={{ background:'var(--off-white)', borderRadius:'var(--r-sm)', padding:'10px 12px', cursor:'pointer' }} onClick={() => setSelectedBooking(b)}>
                          <div style={{ fontWeight:600, fontSize:'14px', color:'var(--text)' }}>{b.name}</div>
                          <div style={{ fontSize:'12px', color:'var(--text-muted)' }}>{b.date} · {b.slotLabel}</div>
                          <div style={{ fontSize:'12px', color:'var(--green)' }}>{b.service}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── TAB: SETTINGS ── */}
        {tab === 'settings' && (
          <div style={{ maxWidth:'600px' }}>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'24px' }}>Settings</h2>

            <div className="card" style={{ marginBottom:'20px' }}>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--text)', marginBottom:'8px' }}>Rolling Block Days</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'16px', lineHeight:1.65 }}>
                The first N days from today are automatically shown as Fully Booked to customers. This block rolls forward each day, giving you time to group appointments by proximity.
              </p>
              <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                {[1,2,3,4,5,7].map(n => (
                  <button key={n} onClick={() => updateBlockDays(n)}
                    style={{ padding:'10px 18px', borderRadius:'var(--r-sm)', border:'1.5px solid var(--gray-100)', background: blockDays === n ? 'var(--green)' : 'white', color: blockDays === n ? 'white' : 'var(--text)', fontFamily:'var(--sans)', fontSize:'14px', fontWeight:700, cursor:'pointer' }}>
                    {n} {n === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
              <p style={{ fontSize:'13px', color:'var(--gray-400)', marginTop:'12px' }}>Currently blocking first <strong>{blockDays} days</strong>.</p>
            </div>

            <div className="card" style={{ marginBottom:'20px' }}>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--text)', marginBottom:'8px' }}>Time Slots</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'16px' }}>Current appointment blocks (Monday–Saturday):</p>
              {TIME_SLOTS.map(slot => (
                <div key={slot.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', background:'var(--green-xlight)', borderRadius:'var(--r-sm)', marginBottom:'8px' }}>
                  <span style={{ fontSize:'14px', fontWeight:600, color:'var(--green-dark)' }}>{slot.label}</span>
                  <span style={{ fontSize:'12px', color:'var(--green)', fontWeight:700, background:'white', padding:'3px 10px', borderRadius:'20px' }}>Active</span>
                </div>
              ))}
              <p style={{ fontSize:'13px', color:'var(--gray-400)', marginTop:'8px' }}>To modify time slots, edit the TIME_SLOTS constant in the booking page code.</p>
            </div>

            <div className="card">
              <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--text)', marginBottom:'8px' }}>Admin Password</h3>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', marginBottom:'8px' }}>Current password: <code style={{ background:'var(--gray-50)', padding:'2px 8px', borderRadius:'4px', fontSize:'13px' }}>sprinklers2024!</code></p>
              <p style={{ fontSize:'13px', color:'var(--gray-400)' }}>To change the password, update it in <code>/app/admin/page.jsx</code> and the API route.</p>
            </div>
          </div>
        )}
      </div>

      {/* ── BOOKING DETAIL MODAL ── */}
      {selectedBooking && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}
          onClick={() => setSelectedBooking(null)}>
          <div className="card" style={{ width:'100%', maxWidth:'500px', padding:'32px', maxHeight:'80vh', overflowY:'auto' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400 }}>Booking Details</h3>
              <button onClick={() => setSelectedBooking(null)} style={{ background:'none', border:'none', fontSize:'20px', cursor:'pointer', color:'var(--text-muted)' }}>✕</button>
            </div>
            {[
              ['👤','Customer', selectedBooking.name],
              ['📞','Phone',    selectedBooking.phone],
              ['📧','Email',    selectedBooking.email],
              ['📍','Address',  selectedBooking.address],
              ['🔧','Service',  selectedBooking.service],
              ['📅','Date',     selectedBooking.date],
              ['🕐','Time',     selectedBooking.slotLabel],
              ['📝','Notes',    selectedBooking.notes || 'None'],
            ].map(([ic, label, val]) => (
              <div key={label} style={{ display:'flex', gap:'12px', marginBottom:'14px', paddingBottom:'14px', borderBottom:'1px solid var(--gray-100)' }}>
                <span style={{ fontSize:'18px', flexShrink:0 }}>{ic}</span>
                <div>
                  <span style={{ fontSize:'11px', color:'var(--green)', fontWeight:700, display:'block', textTransform:'uppercase', letterSpacing:'.06em' }}>{label}</span>
                  <span style={{ fontSize:'15px', color:'var(--text)' }}>{val}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop:'8px' }}>
              <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:'var(--green)', marginBottom:'8px', textTransform:'uppercase' }}>Update Status</label>
              <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                {['pending','confirmed','completed','cancelled'].map(s => (
                  <button key={s} onClick={() => { updateBookingStatus(selectedBooking.id, s); setSelectedBooking({...selectedBooking, status:s}); }}
                    style={{ padding:'8px 16px', borderRadius:'var(--r-sm)', border:'1.5px solid var(--gray-100)', background: selectedBooking.status === s ? 'var(--green)' : 'white', color: selectedBooking.status === s ? 'white' : 'var(--text)', fontFamily:'var(--sans)', fontSize:'13px', fontWeight:600, cursor:'pointer', textTransform:'capitalize' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
