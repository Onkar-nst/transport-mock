import { motion } from 'framer-motion'
import { Globe2, ShieldCheck, Headset, Leaf } from 'lucide-react'
import Reveal from './Reveal'

const FEATS = [
  { icon: <Globe2 />, title: 'Global network', desc: '200+ ports, 130 countries, and a vetted carrier partner in every major trade lane.' },
  { icon: <ShieldCheck />, title: 'Cargo insured', desc: 'Full-value coverage and licensed customs brokers protect every shipment, end to end.' },
  { icon: <Headset />, title: 'Always-on support', desc: 'A dedicated coordinator and 24/7 ops desk — real humans, average reply under 4 minutes.' },
  { icon: <Leaf />, title: 'Greener freight', desc: 'Carbon-tracked routes and optional offsets on every booking, reported in your dashboard.' },
]

// Approximate hub coordinates on a 1000x460 viewBox
const HUBS = [
  [180, 160], [250, 150], [470, 130], [510, 170], [560, 120],
  [700, 150], [760, 220], [820, 180], [400, 250], [300, 280], [640, 300],
]

export default function Coverage() {
  return (
    <section className="section coverage" id="network">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--blue-400)' }}>
            Worldwide coverage
          </span>
          <h2>Wherever your cargo needs to go, we're already there</h2>
          <p>A single network spanning every continent — managed from one dashboard, backed by one team.</p>
        </Reveal>

        <div className="cov-grid">
          <Reveal className="cov-feats">
            {FEATS.map((f, i) => (
              <motion.div
                key={f.title}
                className="cov-feat"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="ic">{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="cov-map">
            <WorldMap />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function WorldMap() {
  return (
    <svg viewBox="0 0 1000 460" fill="none">
      {/* dotted continents impression */}
      <g fill="rgba(94,155,255,0.22)">
        {DOTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" />
        ))}
      </g>

      {/* connecting arcs between a few hubs */}
      {ARCS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#cov-g)"
          strokeWidth="1.6"
          strokeDasharray="4 6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3 + i * 0.25 }}
        />
      ))}

      {/* glowing hubs */}
      {HUBS.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4.5" className="cov-dot" />
          <circle cx={x} cy={y} r="4.5" fill="none" stroke="#ff7a3d" strokeWidth="1.5">
            <animate attributeName="r" from="4.5" to="14" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      <defs>
        <linearGradient id="cov-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5e9bff" />
          <stop offset="100%" stopColor="#ff7a3d" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const ARCS = [
  'M250 150 Q 380 60 470 130',
  'M510 170 Q 620 80 700 150',
  'M180 160 Q 300 320 400 250',
  'M560 120 Q 680 60 820 180',
  'M700 150 Q 730 250 640 300',
]

// A sparse scatter that loosely reads as world landmasses.
const DOTS = (() => {
  const pts = []
  const blobs = [
    { cx: 200, cy: 150, rx: 90, ry: 70 },   // N. America
    { cx: 330, cy: 290, rx: 55, ry: 70 },   // S. America
    { cx: 500, cy: 140, rx: 70, ry: 55 },   // Europe
    { cx: 540, cy: 270, rx: 75, ry: 80 },   // Africa
    { cx: 720, cy: 180, rx: 130, ry: 90 },  // Asia
    { cx: 810, cy: 340, rx: 50, ry: 40 },   // Oceania
  ]
  let seed = 7
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  blobs.forEach((b) => {
    const count = Math.round((b.rx * b.ry) / 230)
    for (let i = 0; i < count; i++) {
      const ang = rnd() * Math.PI * 2
      const r = Math.sqrt(rnd())
      pts.push([
        Math.round(b.cx + Math.cos(ang) * r * b.rx),
        Math.round(b.cy + Math.sin(ang) * r * b.ry),
      ])
    }
  })
  return pts
})()
