import Tracking from '../components/Tracking'
import FAQ from '../components/FAQ'
import Reveal from '../components/Reveal'

const TRACK_FAQS = [
  { q: 'Where do I find my tracking number?', a: 'It’s on your booking confirmation and your dashboard, and it always starts with “MRD-”. Lost it? Email the desk and we’ll dig it out.' },
  { q: 'How often does it update?', a: 'Position refreshes while the shipment’s moving, and you get a milestone alert at every handover — pickup, departure, customs, delivery. We’d rather over-notify than leave you guessing.' },
  { q: 'Can I share tracking with my customer?', a: 'Yes — every shipment has a link you can forward, no login required at their end. Plenty of our customers just pass it straight on.' },
  { q: 'It says delayed. What now?', a: 'You’ll usually have heard from us already. If not, reply to the alert or call the desk — the coordinator on your account can tell you what happened and what the options are.' },
]

export default function Track() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Tracking</span>
            <h1>Where’s my shipment?</h1>
            <p>Drop in your MRD number for live status, last-known location and the current ETA. The same view you’d hand your own customer.</p>
          </Reveal>
        </div>
      </section>

      <Tracking />
      <FAQ items={TRACK_FAQS} title="The tracking questions we actually get" />
    </>
  )
}
