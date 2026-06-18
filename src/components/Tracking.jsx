import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, PackageCheck, Truck, Ship, Warehouse, CheckCircle2, Radar } from 'lucide-react'
import Reveal from './Reveal'

const TIMELINE = [
  { icon: <PackageCheck />, a: 'Order received', b: 'Shenzhen, CN · Jun 12, 09:14' },
  { icon: <Warehouse />, a: 'Processed at hub', b: 'Shenzhen DC · Jun 13, 18:40' },
  { icon: <Ship />, a: 'Departed origin port', b: 'Singapore · Jun 15, 06:00' },
  { icon: <Truck />, a: 'Out for delivery', b: 'Rotterdam, NL · ETA Jun 21' },
]

export default function Tracking() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(true) // show a demo result by default

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const ref = code.trim() || 'MRD-90427'
  // 3 of 4 steps complete → 75% progress
  const completed = 3
  const progress = (completed / TIMELINE.length) * 100

  return (
    <section className="section" id="tracking">
      <div className="container track-wrap">
        <Reveal>
          <span className="eyebrow">
            <Radar size={14} /> Real-time tracking
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', margin: '18px 0 16px', fontWeight: 800 }}>
            Know exactly where your cargo is — to the minute
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.6, marginBottom: 28 }}>
            Every Meridian shipment streams live GPS and milestone updates straight to your
            dashboard. Drop in a tracking number to see it in action.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Live GPS down to the checkpoint', 'Proactive delay alerts', 'Instant proof of delivery'].map((t) => (
              <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500, color: 'var(--ink)' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--blue-600)' }} /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="track-panel">
            <form className="track-form" onSubmit={onSubmit}>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter tracking number (e.g. MRD-90427)"
                aria-label="Tracking number"
              />
              <button type="submit" aria-label="Track">
                <Search size={20} />
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="track-result"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="rrow">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
                      <MapPin size={18} style={{ color: 'var(--accent)' }} /> #{ref.toUpperCase()}
                    </div>
                    <span className="badge-status">
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#047857' }} /> In transit
                    </span>
                  </div>

                  <div className="track-bar">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.1, ease: 'easeInOut' }}
                    />
                  </div>

                  <div className="track-steps">
                    {TIMELINE.map((s, i) => (
                      <motion.div
                        key={s.a}
                        className={`track-step ${i < completed ? 'ok' : ''}`}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.12 }}
                      >
                        <span className="ic">{s.icon}</span>
                        <div className="tx">
                          <div className="a">{s.a}</div>
                          <div className="b">{s.b}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
