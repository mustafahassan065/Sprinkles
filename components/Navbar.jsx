'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sprinklerServices = [
  { label: 'Sprinkler Repair',           href: '/sprinkler-repair' },
  { label: 'Sprinkler Installation',     href: '/sprinkler-installation' },
  { label: 'Irrigation Design',          href: '/irrigation-design' },
  { label: 'Smart Controllers',          href: '/smart-controllers' },
  { label: 'Rain & Freeze Sensors',      href: '/rain-freeze-sensors' },
  { label: 'Electrical Troubleshooting', href: '/electrical-troubleshooting' },
  { label: 'Head Replacement',           href: '/head-replacement' },
  { label: 'Water-Saving Solutions',     href: '/water-saving-solutions' },
  { label: 'Seasonal Maintenance',       href: '/seasonal-maintenance' },
  { label: 'Commercial Services',        href: '/commercial-services' },
  { label: 'Landscape Services',         href: '/landscape-services' },
];

const serviceAreas = [
  { label: 'Allen',        href: '/service-areas/allen' },
  { label: 'Frisco',       href: '/service-areas/frisco' },
  { label: 'McKinney',     href: '/service-areas/mckinney' },
  { label: 'Plano',        href: '/service-areas/plano' },
  { label: 'Dallas',       href: '/service-areas/dallas' },
  { label: 'Flower Mound', href: '/service-areas/flower-mound' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown,   setDropdown]   = useState(null);
  const [mobileExp,  setMobileExp]  = useState(null);
  const [isMobile,   setIsMobile]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    const onResize = () => setIsMobile(window.innerWidth <= 960);
    onResize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const navLinkStyle = (active = false) => ({
    display: 'inline-flex', alignItems: 'center', gap: '5px',
    padding: '8px 14px', fontSize: '15px', fontWeight: 500,
    color: active ? 'var(--green)' : 'var(--text)',
    background: active ? 'var(--green-faint)' : 'none',
    borderRadius: 'var(--r-sm)', textDecoration: 'none',
    border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)',
    whiteSpace: 'nowrap', transition: 'color .15s, background .15s',
  });

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: 'var(--green-deeper)', color: 'white',
        fontSize: '13px', padding: '7px 0', textAlign: 'center',
      }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: '20px', flexWrap: 'wrap',
        }}>
          <span>📞 <strong>(972) 755-9019</strong></span>
          <span style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
          <span style={{ color: 'var(--green-light)' }}>✓ Serving DFW Since 1980</span>
          <span style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
          <span>License <strong>#8146</strong></span>
          <span style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
          <span style={{ color: '#f5c891' }}>1-Year Warranty on Parts &amp; Labor</span>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100, background: 'white',
        borderBottom: scrolled ? '1px solid var(--gray-100)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(74,144,32,.08)' : 'none',
        transition: 'all .2s',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: '72px', gap: '16px',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/images/SprinklesLogo.webp"
              alt="Sprinklers and Lawns — Dallas Fort Worth Irrigation"
              width={200} height={60}
              style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav — hidden on mobile via JS state */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1, justifyContent: 'center' }}>
              <Link href="/"      style={navLinkStyle()}>Home</Link>
              <Link href="/about" style={navLinkStyle()}>About</Link>

              {[
                { key: 'svc',  label: 'Sprinkler Services', items: sprinklerServices },
                { key: 'area', label: 'Service Areas',      items: serviceAreas },
              ].map(({ key, label, items }) => (
                <div key={key} style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdown(key)}
                  onMouseLeave={() => setDropdown(null)}>
                  <button style={navLinkStyle(dropdown === key)}>
                    {label}
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: dropdown === key ? 'rotate(180deg)' : 'none', transition: 'transform .2s', transformOrigin: 'center' }}
                      />
                    </svg>
                  </button>
                  {dropdown === key && (
                    <div style={{
                      position: 'absolute', top: '100%', left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'white', border: '1px solid var(--gray-100)',
                      borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-lg)',
                      padding: '8px', minWidth: '230px', zIndex: 200,
                    }}>
                      {items.map(i => (
                        <Link key={i.href} href={i.href} style={{
                          display: 'block', padding: '9px 16px', fontSize: '14px',
                          color: 'var(--text-muted)', borderRadius: 'var(--r-sm)',
                          textDecoration: 'none', transition: 'background .15s, color .15s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-faint)'; e.currentTarget.style.color = 'var(--green-dark)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/blog"    style={navLinkStyle()}>Blog</Link>
              <Link href="/contact" style={navLinkStyle()}>Contact</Link>
            </div>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
              <a href="tel:9727559019" style={{
                fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '15px',
                color: 'var(--green-dark)', textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                📞 (972) 755-9019
              </a>
              <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
                Free Quote
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: '1.5px solid var(--gray-200)',
                borderRadius: 'var(--r-sm)', padding: '8px', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: '5px',
                width: '42px', height: '42px', justifyContent: 'center', alignItems: 'center',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '20px', height: '2px',
                  background: 'var(--green)', borderRadius: '2px',
                  transition: 'all .25s',
                  transform: mobileOpen && i === 0 ? 'translateY(7px) rotate(45deg)'
                            : mobileOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)'
                            : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && mobileOpen && (
          <div style={{
            background: 'white', borderTop: '1px solid var(--gray-100)',
            padding: '8px 0 20px', maxHeight: '80vh', overflowY: 'auto',
          }}>
            <div className="container">
              {[['Home','/'],['About','/about'],['Blog','/blog'],['Contact','/contact']].map(([label,href]) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '13px 0',
                  borderBottom: '1px solid var(--gray-100)',
                  fontSize: '16px', fontWeight: 500, color: 'var(--text)',
                  textDecoration: 'none',
                }}>
                  {label}
                </Link>
              ))}

              {[
                { key: 'svc',  label: 'Sprinkler Services', items: sprinklerServices },
                { key: 'area', label: 'Service Areas',      items: serviceAreas },
              ].map(({ key, label, items }) => (
                <div key={key} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <button
                    onClick={() => setMobileExp(mobileExp === key ? null : key)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      width: '100%', padding: '13px 0', background: 'none', border: 'none',
                      fontSize: '16px', fontWeight: 500,
                      color: mobileExp === key ? 'var(--green)' : 'var(--text)',
                      cursor: 'pointer', fontFamily: 'var(--sans)',
                    }}
                  >
                    {label}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none"
                      style={{ transform: mobileExp === key ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileExp === key && (
                    <div style={{ paddingBottom: '8px' }}>
                      {items.map(i => (
                        <Link key={i.href} href={i.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block', padding: '9px 0 9px 16px',
                            fontSize: '14px', color: 'var(--text-muted)',
                            borderLeft: '2px solid var(--green-light)',
                            textDecoration: 'none',
                          }}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ paddingTop: '16px', display: 'flex', gap: '10px' }}>
                <a href="tel:9727559019" className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '14px' }}>
                  📞 Call Now
                </a>
                <Link href="/contact" className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '14px' }}
                  onClick={() => setMobileOpen(false)}>
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
