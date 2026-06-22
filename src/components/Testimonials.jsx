import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Reveal from './Reveal'

const REVIEWS = [
  {
    quote:
      'We moved to Meridian because our old forwarder stopped answering after five. The rates are about the same. The difference is someone replies.',
    name: 'Priya Nair',
    role: 'Operations · Vanta Retail',
  },
  {
    quote:
      'Customs was the part that kept me up at night. Now I forward the invoice and it’s handled — and when something’s flagged, they call me before it’s a problem.',
    name: 'Marcus Feld',
    role: 'Supply chain · Hexa Foods',
  },
  {
    quote:
      'A vessel got rolled in Singapore and they had us on the next sailing before I’d seen the email. Cost us a day, not a week. That’s the whole job.',
    name: 'Sofia Alvarez',
    role: 'Founder · NorthPeak Outdoor',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">In their words</span>
            <h2>What customers actually say</h2>
          </div>
          <p>
            Three of them, lightly edited for length. We left the unglamorous
            parts in — those are the ones that tend to be true.
          </p>
        </Reveal>

        <div className="tst-grid">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              className="tst-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tst-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} />
                ))}
              </div>
              <p className="quote">“{r.quote}”</p>
              <div className="tst-author">
                <span className="av">{r.name.charAt(0)}</span>
                <div>
                  <div className="nm">{r.name}</div>
                  <div className="ro">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
