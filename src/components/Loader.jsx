import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Boxes } from 'lucide-react'
import TruckArt from './TruckArt'

/**
 * Loader — full-screen preloader shown on first open. A truck drives from
 * left to right along a road as a progress percentage fills, then the whole
 * screen slides up to reveal the page. `onDone` fires after the fill finishes.
 */
const DURATION = 2.4 // seconds for the truck to cross / bar to fill

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / (DURATION * 1000), 1)
      setPct(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 350) // small beat at 100% before exit
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="loader-inner"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-brand">
          <span className="brand-mark"><Boxes /></span>
          Meridian
        </div>

        <div className="loader-meta">
          <span>Plotting the lane</span>
          <span className="loader-pct">{pct}%</span>
        </div>

        <div className="loader-track">
          {/* filled portion of the road */}
          <span className="loader-fill" style={{ width: `${pct}%` }} />
          {/* dashed centre line */}
          <span className="loader-dashes" />
          {/* the truck sits at the leading edge of the fill */}
          <div className="loader-truck" style={{ left: `${pct}%` }}>
            <TruckArt width={92} height={47} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
