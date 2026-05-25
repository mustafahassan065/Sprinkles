'use client';
import { useState } from 'react';
import Link from 'next/link';

const posts = [
  {
    slug: 'backflow-prevention-code-compliance',
    title: 'Backflow Prevention and Code Compliance Services',
    excerpt: 'Backflow prevention protects your drinking water and keeps your irrigation system compliant with local codes. Many homeowners overlook this part of the system.',
    date: 'November 2024', readTime: '5 min read', category: 'Code Compliance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
  },
  {
    slug: 'lawn-care-equipment-texas',
    title: 'Choosing the Right Lawn Care Equipment for Texas Yards',
    excerpt: 'Lawn care in Texas is not simple. Heat, clay soil, and fast growing grass make it harder to maintain a healthy lawn. Using the wrong equipment makes the job even more difficult.',
    date: 'October 2024', readTime: '5 min read', category: 'Lawn Care',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&fit=crop',
  },
  {
    slug: 'identifying-fixing-common-irrigation-issues',
    title: 'Identifying and Fixing Common Irrigation Issues',
    excerpt: 'Irrigation systems do not fail overnight. Small issues develop over time. Soil movement, weather changes, and system age all affect performance.',
    date: 'September 2024', readTime: '6 min read', category: 'Irrigation Tips',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80&fit=crop',
  },
  {
    slug: 'lawn-aeration-north-texas',
    title: 'Lawn Aeration Services in North Texas',
    excerpt: 'Soil compaction is one of the most common problems in Texas lawns. When soil becomes dense, grass roots struggle to grow. Water does not absorb properly.',
    date: 'August 2024', readTime: '5 min read', category: 'Lawn Care',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&fit=crop',
  },
  {
    slug: 'lawn-fertilization-grass-type-texas',
    title: 'Lawn Fertilization by Grass Type in Texas',
    excerpt: 'Fertilizer is not one size fits all. Each grass type in Texas requires a different nutrient plan. Using the wrong fertilizer leads to weak growth, poor color, and wasted money.',
    date: 'July 2024', readTime: '6 min read', category: 'Lawn Care',
    image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&q=80&fit=crop',
  },
  {
    slug: 'lowering-ph-inert-potting-mixes-acid-plants',
    title: 'Lowering pH in Inert Potting Mixes for Acid Loving Plants',
    excerpt: 'Healthy plants start with proper root zone pH. Blueberries, azaleas, camellias, and gardenias require acidic growing conditions to absorb nutrients properly.',
    date: 'June 2024', readTime: '6 min read', category: 'Plant Health',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80&fit=crop',
  },
  {
    slug: 'lawn-soil-test-read-results',
    title: 'How to Perform a Lawn Soil Test and Read the Results',
    excerpt: 'Healthy grass starts below the surface. Many lawn problems in Texas are caused by poor soil conditions, not bad grass. A soil test helps identify these problems early.',
    date: 'May 2024', readTime: '5 min read', category: 'Lawn Care',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&fit=crop',
  },
];

const categories = [...new Set(posts.map(p => p.category))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <style>{`
        .blog-card-img { transition: transform .35s ease; }
        .blog-card:hover .blog-card-img { transform: scale(1.06); }
        .cat-pill {
          padding: 7px 18px; border-radius: 20px; font-size: 13px;
          font-weight: 600; cursor: pointer; border: none;
          font-family: var(--sans); transition: background .15s, color .15s;
        }
        .cat-pill.active  { background: var(--green); color: white; }
        .cat-pill.inactive{ background: white; color: var(--text-muted); border: 1px solid var(--gray-100); }
        .cat-pill.inactive:hover { background: var(--green-xlight); color: var(--green-dark); }
      `}</style>

      {/* HERO */}
      <section style={{ background:'var(--green-deeper)', padding:'64px 0 52px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color:'var(--green-light)' }}>Irrigation and Lawn Care Blog</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4vw,48px)', fontWeight:400, color:'white', marginBottom:'14px', marginTop:'8px' }}>
            Irrigation Tips and Guides for{' '}
            <em style={{ color:'var(--green-light)' }}>North Texas Homeowners</em>
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'560px', lineHeight:1.75 }}>
            Expert advice on sprinkler repair, installation, water-saving practices, lawn fertilization, and seasonal maintenance from the team at Sprinklers and Lawns.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="section bg-soft">
        <div className="container">

          {/* ── WORKING CATEGORY FILTER ── */}
          <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'40px', alignItems:'center' }}>
            <button
              className={`cat-pill ${activeCategory === 'All' ? 'active' : 'inactive'}`}
              onClick={() => setActiveCategory('All')}
            >
              All Posts ({posts.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-pill ${activeCategory === cat ? 'active' : 'inactive'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({posts.filter(p => p.category === cat).length})
              </button>
            ))}
          </div>

          {/* Posts grid */}
          {filtered.length === 0 ? (
            <p style={{ color:'var(--text-muted)', fontSize:'16px' }}>No posts found.</p>
          ) : (
            <div className="grid-3" style={{ gap:'28px' }}>
              {filtered.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card blog-card"
                  style={{ textDecoration:'none', display:'flex', flexDirection:'column', overflow:'hidden', padding:0 }}
                >
                  <div style={{ height:'210px', overflow:'hidden', flexShrink:0 }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-img"
                      style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                    />
                  </div>
                  <div style={{ padding:'24px', flex:1, display:'flex', flexDirection:'column' }}>
                    <div style={{ display:'flex', gap:'8px', marginBottom:'12px', flexWrap:'wrap', alignItems:'center' }}>
                      <span style={{ background:'var(--green-xlight)', color:'var(--green-dark)', fontSize:'11px', fontWeight:700, padding:'3px 10px', borderRadius:'20px' }}>
                        {post.category}
                      </span>
                      <span style={{ color:'var(--text-muted)', fontSize:'12px' }}>
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h2 style={{ fontFamily:'var(--serif)', fontSize:'19px', fontWeight:400, color:'var(--text)', marginBottom:'10px', lineHeight:1.3 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.68, flex:1 }}>
                      {post.excerpt}
                    </p>
                    <span style={{ color:'var(--green)', fontSize:'13px', fontWeight:600, marginTop:'16px', display:'inline-flex', alignItems:'center', gap:'4px' }}>
                      Read article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,40px)', fontWeight:400, color:'white', marginBottom:'14px' }}>
            Have an Irrigation Question?{' '}
            <em style={{ color:'var(--green-light)' }}>Call Us Directly.</em>
          </h2>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'500px', margin:'0 auto 32px', lineHeight:1.75 }}>
            Sprinklers and Lawns serves Dallas, Plano, Frisco, McKinney, Allen, and surrounding North Texas communities.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:9727559019" className="btn-white" style={{ fontSize:'16px', padding:'14px 32px' }}>📞 Call (972) 755-9019</a>
            <Link href="/contact" className="btn-ghost" style={{ fontSize:'16px', padding:'14px 32px' }}>Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
