import Link from 'next/link';

export const metadata = {
  title: 'Warranty Information | Sprinklers and Lawns',
  description: 'One year warranty on all parts and labor for irrigation services by Sprinklers and Lawns in Dallas-Ft. Worth, Texas.',
  alternates: { canonical: 'https://sprinklersandlawns.com/warranty' },
};

export default function WarrantyPage() {
  return (
    <>
      <section style={{ background:'var(--green-deeper)', padding:'56px 0 44px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color:'var(--green-light)' }}>Customer Protection</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'12px', marginTop:'8px' }}>
            Warranty <em style={{ color:'var(--green-light)' }}>Information</em>
          </h1>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,.72)', maxWidth:'520px', lineHeight:1.75 }}>
            Sprinklers and Lawns stands behind every job with a one year warranty on all parts and labor.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth:'780px' }}>

            {/* Warranty highlight */}
            <div style={{ background:'var(--green)', borderRadius:'14px', padding:'32px', marginBottom:'40px', textAlign:'center' }}>
              <div style={{ fontSize:'48px', marginBottom:'12px' }}>🛡️</div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'28px', fontWeight:400, color:'white', marginBottom:'10px' }}>
                1-Year Warranty on All Parts and Labor
              </h2>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,.80)', lineHeight:1.75, maxWidth:'500px', margin:'0 auto' }}>
                Every irrigation repair, installation, and service performed by Sprinklers and Lawns is backed by a full one year warranty on both parts and labor.
              </p>
            </div>

            <div style={{ fontSize:'16px', color:'var(--text-muted)', lineHeight:1.85 }}>
              {[
                {
                  title: 'What the Warranty Covers',
                  items: [
                    'All parts installed by Sprinklers and Lawns during service',
                    'Labor performed during the original service visit',
                    'Sprinkler head replacements and adjustments',
                    'Valve repairs and replacements',
                    'Pipe repairs and connections',
                    'Controller installations and programming',
                    'Rain and freeze sensor installations',
                    'Electrical wiring and connections',
                  ],
                },
                {
                  title: 'What the Warranty Does Not Cover',
                  items: [
                    'Damage caused by freezing temperatures or extreme weather events',
                    'Damage caused by third parties including other contractors or lawn care equipment',
                    'Pre-existing conditions that were not part of the original service',
                    'Normal wear and tear over time',
                    'Damage caused by failure to maintain the system',
                    'Vandalism or intentional damage',
                    'Unmarked underground utilities or obstructions',
                  ],
                },
              ].map(section => (
                <div key={section.title} style={{ marginBottom:'32px' }}>
                  <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'14px' }}>
                    {section.title}
                  </h2>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'10px' }}>
                    {section.items.map(item => (
                      <li key={item} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                        <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div style={{ marginBottom:'32px' }}>
                <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'12px' }}>How to Request Warranty Service</h2>
                <p>If you experience an issue with work performed by Sprinklers and Lawns within one year of your service date, contact us directly. We will schedule a return visit to evaluate the issue and make any necessary repairs at no charge under the warranty.</p>
                <p style={{ marginTop:'12px' }}>Call <a href="tel:9727559019" style={{ color:'var(--green-dark)', fontWeight:700 }}>(972) 755-9019</a> or use our contact form to request warranty service. Please have your original service date and address available.</p>
              </div>

              <div style={{ marginBottom:'32px' }}>
                <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'12px' }}>Our Commitment</h2>
                <p>Sprinklers and Lawns is committed to delivering irrigation services that meet the highest standards of quality. Our warranty reflects our confidence in the work we perform and our commitment to long term customer satisfaction.</p>
                <p style={{ marginTop:'12px' }}>All work is performed by licensed irrigation professionals. License #8146. Sprinklers and Lawns has served Dallas-Ft. Worth homeowners and property managers for over 25 years.</p>
              </div>

              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'10px', padding:'20px 24px' }}>
                <p style={{ margin:0, fontSize:'15px', color:'var(--green-dark)' }}>
                  <strong>Questions about your warranty?</strong> Call <a href="tel:9727559019" style={{ color:'var(--green-dark)', fontWeight:700 }}>(972) 755-9019</a> or{' '}
                  <Link href="/contact" style={{ color:'var(--green-dark)', fontWeight:700 }}>contact us online</Link>.
                  See also: <Link href="/terms" style={{ color:'var(--green-dark)', fontWeight:700 }}>Terms &amp; Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
