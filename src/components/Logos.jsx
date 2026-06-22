import { motion } from 'framer-motion'

// Names we move for. Plain wordmarks — no fake logos.
const BRANDS = [
  'Vanta Retail',
  'Hexa Foods',
  'NorthPeak Outdoor',
  'Kellner & Sons',
  'BlueShip Marine',
  'Atlas Components',
  'Marisol Coffee',
  'Drift Furniture',
]

const Sep = () => (
  <svg viewBox="0 0 8 8" aria-hidden="true">
    <rect width="8" height="8" rx="1" fill="currentColor" />
  </svg>
)

export default function Logos() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...BRANDS, ...BRANDS]

  return (
    <section className="logos">
      <div className="container">
        <p className="label">On this quarter's manifest</p>
      </div>
      <div className="marquee">
        <motion.div
          className="marquee-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((name, i) => (
            <span className="logo" key={i}>
              {name}
              <Sep />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
