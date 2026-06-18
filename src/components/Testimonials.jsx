import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Reveal from './Reveal'

const REVIEWS = [
  {
    quote:
      'We switched three regional forwarders for Meridian and cut our average transit time by 22%. The live tracking alone pays for itself.',
    name: 'Priya Nair',
    role: 'Head of Ops, Vanta Retail',
    color: '#0b63f6',
  },
  {
    quote:
      'Customs used to be our nightmare. Now it just… happens. Documents filed, duties handled, cargo never sits. Genuinely the smoothest partner we have.',
    name: 'Marcus Feld',
    role: 'Supply Chain Lead, Hexa Foods',
    color: '#ff7a3d',
  },
  {
    quote:
      'Their ops desk replies in minutes, day or night. When a vessel was delayed, they rebooked air freight before we even noticed. That is trust.',
    name: 'Sofia Alvarez',
    role: 'Founder, NorthPeak',
    color: '#16a34a',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--soft" id="reviews">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Trusted partners</span>
          <h2>Logistics teams sleep better with Meridian</h2>
          <p>4.9/5 average rating across 1,800+ verified shipper reviews.</p>
        </Reveal>

        <div className="tst-grid">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              className="tst-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tst-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} />
                ))}
              </div>
              <p className="quote">"{r.quote}"</p>
              <div className="tst-author">
                <span className="av" style={{ background: r.color }}>
                  {r.name.charAt(0)}
                </span>
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
