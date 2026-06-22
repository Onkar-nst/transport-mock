import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, PackageCheck, Truck, Ship, Warehouse, Check } from 'lucide-react'
import Reveal from './Reveal'

const TIMELINE = [
  { icon: <PackageCheck />, a: 'Picked up', b: 'Shenzhen, CN · 12 Jun, 09:14' },
  { icon: <Warehouse />, a: 'Consolidated at hub', b: 'Shenzhen DC · 13 Jun, 18:40' },
  { icon: <Ship />, a: 'Departed origin port', b: 'Singapore · 15 Jun, 06:00' },
  { icon: <Truck />, a: 'Out for delivery', b: 'Rotterdam, NL · ETA 21 Jun' },
]

const CHECKS = [
  'Live position at every handover',
  'A heads-up before a delay bites you',
  'Proof of delivery the moment it’s signed',
]

export default function Tracking() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(true) // show a demo result by default

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const ref = code.trim() || 'MRD-90427'
  const completed = 3
  const progress = (completed / TIMELINE.length) * 100

  return (
    <section className="section" id="tracking">
      <div className="container track-wrap">
        <Reveal>
          <span className="eyebrow">Tracking</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', margin: '22px 0 16px', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Know where it is. Honestly.
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 28, color: 'var(--body)' }}>
            Every Meridian shipment streams its position and milestones to one link.
            Drop in a number to see exactly what your customer would see.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CHECKS.map((t) => (
              <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, fontWeight: 500, color: 'var(--ink)' }}>
                <Check size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} /> {t}
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
                placeholder="Tracking number, e.g. MRD-90427"
                aria-label="Tracking number"
              />
              <button type="submit" aria-label="Track">
                <Search size={19} />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--ink)' }}>
                      <MapPin size={17} style={{ color: 'var(--accent)' }} /> {ref.toUpperCase()}
                    </div>
                    <span className="badge-status">
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} /> In transit
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
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
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
