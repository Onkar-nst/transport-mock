import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Ship, Check, Truck, PackageCheck, Plane } from 'lucide-react'
import TruckArt from './TruckArt'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          {/* ---- Left: copy ---- */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span className="hero-badge" variants={item}>
              <span className="dot" /> Independent freight forwarder · since 2014
            </motion.span>

            <motion.h1 variants={item}>
              Freight that <span className="grad">shows up.</span>
            </motion.h1>

            <motion.p className="lead" variants={item}>
              We move cargo by road, sea and air across the Asia–Europe lanes —
              quoted fast, tracked honestly, and run by people who pick up the
              phone when a sailing slips.
            </motion.p>

            <motion.div className="hero-actions" variants={item}>
              <Link to="/contact" className="btn btn-primary">
                Get a quote <ArrowRight />
              </Link>
              <Link to="/track" className="btn btn-ghost">
                Track a shipment
              </Link>
            </motion.div>
          </motion.div>

          {/* ---- Right: a live shipment docket ---- */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="route-card">
              <div className="rc-head">
                <span className="tag">MRD-90427</span>
                <span className="live">
                  <span className="dot" /> LIVE
                </span>
              </div>

              <RouteMap />

              <div className="rc-stops">
                <Stop state="done" place="Shenzhen, CN" time="Picked up · 12 Jun" icon={<Check />} />
                <Stop state="done" place="Singapore" time="Tranship · 15 Jun" icon={<Ship />} />
                <Stop state="active" place="Rotterdam, NL" time="In transit · ETA 21 Jun" icon={<Truck />} />
              </div>
            </div>

            {/* Floating ops chips */}
            <motion.div
              className="float-chip one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="ic"><PackageCheck /></span>
              <div>
                <div className="t">Cleared last 24h</div>
                <div className="v">1,284 parcels</div>
              </div>
            </motion.div>

            <motion.div
              className="float-chip two"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="ic"><Plane /></span>
              <div>
                <div className="t">In the air now</div>
                <div className="v">42 shipments</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stat rail + a small truck rolling along the baseline */}
      <div className="container">
        <div className="hero-trust">
          <div className="item">
            <span className="num">98.6%</span>
            <span className="lbl">On-time, measured across 2025</span>
          </div>
          <div className="item">
            <span className="num">42</span>
            <span className="lbl">Trade lanes we run ourselves</span>
          </div>
          <div className="item">
            <span className="num">600+</span>
            <span className="lbl">Shippers on the books</span>
          </div>
        </div>

        <div className="hero-road">
          <span className="road-line" />
          <DrivingTruck />
        </div>
      </div>
    </section>
  )
}

/* A small truck that loops across the baseline of the hero. */
function DrivingTruck() {
  return (
    <motion.div
      className="hero-truck"
      initial={{ x: '-18vw' }}
      animate={{ x: '108vw' }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
    >
      <motion.div
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
      >
        <TruckArt width={96} height={49} />
      </motion.div>
    </motion.div>
  )
}

function Stop({ state, place, time, icon }) {
  return (
    <div className={`rc-stop ${state}`}>
      <span className="bullet">{icon}</span>
      <div className="meta">
        <div className="place">{place}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  )
}

/* A plain ink route with an amber marker tracing it. */
function RouteMap() {
  const path = 'M40 150 C 120 70, 200 70, 280 52'
  return (
    <svg className="map-svg" viewBox="0 0 320 200" fill="none">
      {/* faint scatter that reads as a chart of ports */}
      <g opacity="0.5" fill="#c9c0aa">
        {[[50, 60], [90, 40], [140, 90], [210, 50], [260, 110], [180, 150], [80, 140], [290, 70]].map(
          ([x, y], i) => <circle key={i} cx={x} cy={y} r="2" />,
        )}
      </g>

      <motion.path
        d={path}
        stroke="#181511"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 7"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />

      {/* marker travelling along the lane */}
      <motion.circle
        r="5"
        fill="#d94e1f"
        animate={{ offsetDistance: ['0%', '100%'] }}
        style={{ offsetPath: `path('${path}')` }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* endpoints */}
      <circle cx="40" cy="150" r="5" fill="#181511" />
      <circle cx="280" cy="52" r="5" fill="#d94e1f" />
      <circle cx="280" cy="52" r="5" fill="none" stroke="#d94e1f" strokeWidth="1.5">
        <animate attributeName="r" from="5" to="14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
