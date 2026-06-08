import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Sprinklers and Lawns',
  description: 'Terms and conditions for irrigation services provided by Sprinklers and Lawns in Dallas-Ft. Worth, Texas.',
  alternates: { canonical: 'https://sprinklersandlawns.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section style={{ background:'var(--green-deeper)', padding:'56px 0 44px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color:'var(--green-light)' }}>Legal</div>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, color:'white', marginBottom:'12px', marginTop:'8px' }}>
            Terms and <em style={{ color:'var(--green-light)' }}>Conditions</em>
          </h1>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,.72)', maxWidth:'520px', lineHeight:1.75 }}>
            Please read these terms carefully before scheduling service with Sprinklers and Lawns.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth:'780px', fontSize:'16px', color:'var(--text-muted)', lineHeight:1.85 }}>

            {[
              {
                title: 'Service Rates and Billing',
                body: `Service is billed at a 1 hour minimum of $135 per hour, plus materials. After the first hour, billable time is charged by the half hour. Billable time starts when the technician arrives at the service address and stops after payment is accepted. Material costs are in addition to labor charges and will be itemized on the invoice.`,
              },
              {
                title: 'Scheduling and Appointments',
                body: `Appointments are confirmed subject to technician availability. Sprinklers and Lawns reserves the right to reschedule appointments due to weather, emergency calls, or other unforeseen circumstances. Customers will be notified as soon as possible if rescheduling is required. Cancellations should be made at least 24 hours in advance.`,
              },
              {
                title: 'Scope of Work',
                body: `All work is performed based on the scope agreed upon at the time of service. Any additional work identified during service will be discussed with the customer before proceeding. Authorization is required before any additional work begins. Sprinklers and Lawns does not perform work without customer approval.`,
              },
              {
                title: 'Payment',
                body: `Payment is due upon completion of service. Accepted forms of payment include cash, check, and major credit cards. Returned checks are subject to a returned check fee. Outstanding balances are subject to collection proceedings if not resolved within 30 days.`,
              },
              {
                title: 'Warranty',
                body: `All parts and labor are covered by a one year warranty from the date of service. See our Warranty Information page for complete details. Warranty coverage does not include damage caused by third parties, freezing events, or conditions outside of our control.`,
              },
              {
                title: 'Liability',
                body: `Sprinklers and Lawns is not responsible for pre-existing conditions, unmarked underground utilities, or damage caused by factors outside our control. Customers are responsible for marking or identifying any underground utilities, irrigation lines, or other hazards before service begins. Sprinklers and Lawns carries proper liability insurance as required by the State of Texas.`,
              },
              {
                title: 'Code Compliance',
                body: `All irrigation work is performed in compliance with applicable local codes and regulations. If an existing system does not meet current code requirements, corrections will be recommended and quoted separately. Sprinklers and Lawns will not perform work that violates local irrigation codes.`,
              },
              {
                title: 'Customer Responsibilities',
                body: `Customers are responsible for providing access to the service area, locating and identifying irrigation shut-off valves, and ensuring the service area is safe and accessible. Customers should also ensure pets are secured and children are kept away from the work area during service.`,
              },
              {
                title: 'Changes to Terms',
                body: `Sprinklers and Lawns reserves the right to update these terms and conditions at any time. The most current version will be available on our website. Continued use of our services constitutes acceptance of the current terms.`,
              },
              {
                title: 'Contact',
                body: `For questions regarding these terms, contact Sprinklers and Lawns at (972) 755-9019 or visit our contact page.`,
              },
            ].map(section => (
              <div key={section.title} style={{ marginBottom:'32px' }}>
                <h2 style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'var(--text)', marginBottom:'12px' }}>
                  {section.title}
                </h2>
                <p style={{ margin:0 }}>{section.body}</p>
              </div>
            ))}

            <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'10px', padding:'20px 24px', marginTop:'32px' }}>
              <p style={{ margin:0, fontSize:'15px', color:'var(--green-dark)' }}>
                <strong>Questions?</strong> Call us at <a href="tel:9727559019" style={{ color:'var(--green-dark)', fontWeight:700 }}>(972) 755-9019</a> or{' '}
                <Link href="/contact" style={{ color:'var(--green-dark)', fontWeight:700 }}>contact us online</Link>.
                See also: <Link href="/warranty" style={{ color:'var(--green-dark)', fontWeight:700 }}>Warranty Information</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
