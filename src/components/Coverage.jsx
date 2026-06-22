import { motion } from 'framer-motion'
import { Globe2, ShieldCheck, Headset, Leaf } from 'lucide-react'
import Reveal from './Reveal'

const FEATS = [
  {
    icon: <Globe2 />,
    title: 'The lanes we know cold',
    desc: 'Asia–Europe is our backbone — Shenzhen, Singapore, Rotterdam, Felixstowe. We’ve run them long enough to know which weeks go sideways.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Cover that actually pays out',
    desc: 'Full-value marine and cargo insurance, and brokers who file clean so containers don’t sit. We’ve handled the claims you hope you never need.',
  },
  {
    icon: <Headset />,
    title: 'A name, not a queue',
    desc: 'You get a coordinator who knows your freight and an ops desk that’s awake while your cargo is. Same people every time you call.',
  },
  {
    icon: <Leaf />,
    title: 'Carbon on the invoice',
    desc: 'Every booking shows its emissions, and you can offset at cost. No leaf-shaped badges — just the number, where you can see it.',
  },
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
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">Coverage</span>
            <h2>We file where your cargo goes</h2>
          </div>
          <p>
            Forty-odd lanes we run week in, week out — plus a vetted agent in the
            ports we don’t. One desk coordinates the lot, so you brief one team, not ten.
          </p>
        </Reveal>

        <div className="cov-grid">
          <Reveal className="cov-feats">
            {FEATS.map((f, i) => (
              <motion.div
                key={f.title}
                className="cov-feat"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
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
      <g fill="rgba(24,21,17,0.15)">
        {DOTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" />
        ))}
      </g>

      {/* connecting lanes between a few hubs */}
      {ARCS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#181511"
          strokeWidth="1.3"
          strokeDasharray="2 7"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3 + i * 0.25 }}
        />
      ))}

      {/* amber hubs */}
      {HUBS.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" className="cov-dot" />
          <circle cx={x} cy={y} r="4" fill="none" stroke="#d94e1f" strokeWidth="1.3">
            <animate attributeName="r" from="4" to="13" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
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
