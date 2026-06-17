'use client';
import { useState } from 'react';
import Link from 'next/link';

const IMGS = [
  {src:'/images/Irrigation/irrigation (1).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (2).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (3).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (4).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (5).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (6).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (7).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (8).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (9).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (10).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (11).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (12).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (13).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (14).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (15).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (16).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (17).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (18).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (19).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (20).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (21).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (22).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (23).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (24).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (25).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (26).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (27).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (28).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (29).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (30).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (31).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (32).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (33).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (34).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (35).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (36).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (37).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (38).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (39).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (40).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (41).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (42).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (43).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (44).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (45).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (46).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (47).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (48).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (49).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (50).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (51).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (52).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (53).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (54).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (55).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (56).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (57).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (58).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (59).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (60).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (61).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (62).jpg',cat:'Irrigation'},
  {src:'/images/Irrigation/irrigation (63).jpg',cat:'Irrigation'},
  {src:'/images/Landscaping/landscaping (1).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (2).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (3).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (4).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (5).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (6).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (7).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (8).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (9).jpg',cat:'Landscaping'},
  {src:'/images/Landscaping/landscaping (10).jpg',cat:'Landscaping'},
  {src:'/images/Lawns/lawns (1).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (2).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (3).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (4).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (5).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (6).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (7).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (8).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (9).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (10).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (11).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (12).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (13).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (14).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (15).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (16).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (17).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (18).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (19).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (20).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (21).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (22).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (23).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (24).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (25).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (26).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (27).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (28).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (29).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (30).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (31).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (32).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (33).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (34).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (35).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (36).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (37).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (38).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (39).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (40).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (41).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (42).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (43).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (44).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (45).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (46).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (47).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (48).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (49).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (50).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (51).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (52).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (53).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (54).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (55).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (56).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (57).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (58).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (59).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (60).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (61).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (62).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (63).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (64).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (65).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (66).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (67).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (68).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (69).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (70).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (71).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (72).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (73).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (74).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (75).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (76).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (77).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (78).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (79).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (80).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (81).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (82).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (83).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (84).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (85).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (86).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (87).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (88).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (89).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (90).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (91).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (92).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (93).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (94).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (95).jpg',cat:'Lawns'},
  {src:'/images/Lawns/lawns (96).jpg',cat:'Lawns'}
];

const CATS = ['All','Irrigation','Landscaping','Lawns'];

export default function GalleryPage() {
  const [active,   setActive]   = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const list = active === 'All' ? IMGS : IMGS.filter(i => i.cat === active);

  function openLB(img) {
    setLightbox({ img, idx: IMGS.indexOf(img) });
  }
  function prev(e) {
    e.stopPropagation();
    const idx = (lightbox.idx - 1 + IMGS.length) % IMGS.length;
    setLightbox({ img: IMGS[idx], idx });
  }
  function next(e) {
    e.stopPropagation();
    const idx = (lightbox.idx + 1) % IMGS.length;
    setLightbox({ img: IMGS[idx], idx });
  }

  return (
    <>
      <style>{`
        .gal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }
        .gal-item {
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 10px;
          background: #e8f0e0;
          cursor: zoom-in;
        }
        .gal-item img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform .35s;
        }
        .gal-item:hover img { transform: scale(1.06); }
        .cat-pill {
          padding: 7px 20px; border-radius: 20px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; border: none;
          font-family: var(--sans);
          transition: background .15s, color .15s;
        }
        .cat-on  { background: #4a9020; color: white; }
        .cat-off {
          background: white; color: #666;
          border: 1px solid #ddd !important;
        }
        .cat-off:hover { background: #edf7e2; color: #2d5c12; }
        .lb-wrap {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.93);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .lb-wrap img {
          max-width: 90vw; max-height: 85vh;
          object-fit: contain; border-radius: 8px;
        }
        .lb-close {
          position: absolute; top: 16px; right: 20px;
          color: white; font-size: 36px; cursor: pointer;
          background: none; border: none; line-height: 1;
        }
        .lb-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,.15); color: white;
          border: none; font-size: 32px; cursor: pointer;
          padding: 10px 18px; border-radius: 8px;
          transition: background .15s;
        }
        .lb-arrow:hover { background: rgba(255,255,255,.3); }
        .lb-prev { left: 12px; }
        .lb-next { right: 12px; }
        @media (max-width: 600px) {
          .gal-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
        }
      `}</style>

      <section style={{ background:'#0a2210', padding:'56px 0 44px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color:'#a8d880' }}>Our Work</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,46px)', fontWeight:400, color:'white', marginBottom:'12px', marginTop:'8px' }}>
            Photo <em style={{ color:'#a8d880' }}>Gallery</em>
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'520px', lineHeight:1.75 }}>
            Irrigation, landscaping, and lawn work across Dallas-Ft. Worth by Sprinklers and Lawns.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">

          <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'32px' }}>
            {CATS.map(cat => {
              const count = cat === 'All' ? IMGS.length : IMGS.filter(i => i.cat === cat).length;
              return (
                <button key={cat}
                  className={`cat-pill ${active === cat ? 'cat-on' : 'cat-off'}`}
                  onClick={() => setActive(cat)}>
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="gal-grid">
            {list.map((img, i) => (
              <div key={i} className="gal-item" onClick={() => openLB(img)}>
                <img src={img.src} alt={img.cat + ' - Sprinklers and Lawns'} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lb-wrap" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)}>&#x2715;</button>
          <button className="lb-arrow lb-prev" onClick={prev}>&#8249;</button>
          <img src={lightbox.img.src} alt={lightbox.img.cat} onClick={e => e.stopPropagation()} />
          <button className="lb-arrow lb-next" onClick={next}>&#8250;</button>
        </div>
      )}

      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,40px)', fontWeight:400, color:'white', marginBottom:'14px' }}>
            Ready to Improve Your <em style={{ color:'#a8d880' }}>Irrigation System?</em>
          </h2>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'24px' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'14px 32px' }}>&#128222; Call (972) 755-9019</a>
            <Link href="/book" className="btn-ghost" style={{ fontSize:'16px', padding:'14px 32px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}