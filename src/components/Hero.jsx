import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Ship, CheckCircle2, Truck, PackageCheck, Plane } from 'lucide-react'
import TruckArt from './TruckArt'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero-glow a" />
      <span className="hero-glow b" />

      <div className="container hero-grid">
        {/* ---- Left: copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="hero-badge" variants={item}>
            <span className="dot" /> Trusted by 4,200+ shippers worldwide
          </motion.span>

          <motion.h1 variants={item}>
            Freight without <span className="grad">friction.</span>
          </motion.h1>

          <motion.p className="lead" variants={item}>
            Meridian moves your cargo by road, sea, and air — with live tracking,
            customs handled, and a logistics team that answers in minutes, not days.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#contact" className="btn btn-primary">
              Request a quote <ArrowRight />
            </a>
            <a href="#tracking" className="btn btn-ghost">
              <PlayCircle /> Track a shipment
            </a>
          </motion.div>

          <motion.div className="hero-trust" variants={item}>
            <div className="item">
              <span className="num">98.7%</span>
              <span className="lbl">On-time delivery</span>
            </div>
            <span className="div" />
            <div className="item">
              <span className="num">130+</span>
              <span className="lbl">Countries served</span>
            </div>
            <span className="div" />
            <div className="item">
              <span className="num">24/7</span>
              <span className="lbl">Live support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ---- Right: animated tracking card ---- */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="route-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="rc-head">
              <span className="tag">Shipment #MRD-90427</span>
              <span className="live">
                <span className="dot" /> LIVE
              </span>
            </div>

            <RouteMap />

            <div className="rc-stops">
              <Stop state="done" place="Shenzhen, CN" time="Picked up · Jun 12" icon={<CheckCircle2 />} />
              <Stop state="done" place="Singapore Port" time="Departed · Jun 15" icon={<Ship />} />
              <Stop state="active" place="Rotterdam, NL" time="In transit · ETA Jun 21" icon={<Truck />} />
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            className="float-chip one"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="ic"><PackageCheck /></span>
            <div>
              <div className="t">Delivered today</div>
              <div className="v">1,284 parcels</div>
            </div>
          </motion.div>

          <motion.div
            className="float-chip two"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="ic"><Plane /></span>
            <div>
              <div className="t">Air freight</div>
              <div className="v">42 in the sky</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ground + a little delivery truck driving across the bottom */}
      <div className="hero-road">
        <span className="road-line" />
        <DrivingTruck />
      </div>
    </section>
  )
}

/* A small truck that loops across the bottom of the hero. */
function DrivingTruck() {
  return (
    <motion.div
      className="hero-truck"
      initial={{ x: '-20vw' }}
      animate={{ x: '108vw' }}
      transition={{ duration: 13, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
    >
      {/* tiny bounce to feel like it's rolling over the road */}
      <motion.div
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
      >
        <TruckArt />
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

/* Animated dashed route between two points */
function RouteMap() {
  return (
    <svg className="map-svg" viewBox="0 0 320 200" fill="none">
      <defs>
        <linearGradient id="routeg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5e9bff" />
          <stop offset="100%" stopColor="#ff7a3d" />
        </linearGradient>
      </defs>

      {/* faint world-ish grid blobs */}
      <g opacity="0.18" fill="#5e9bff">
        <circle cx="50" cy="60" r="2" />
        <circle cx="90" cy="40" r="2" />
        <circle cx="140" cy="90" r="2" />
        <circle cx="210" cy="50" r="2" />
        <circle cx="260" cy="110" r="2" />
        <circle cx="180" cy="150" r="2" />
        <circle cx="80" cy="140" r="2" />
        <circle cx="290" cy="70" r="2" />
      </g>

      <motion.path
        d="M48 150 C 120 60, 200 60, 272 48"
        stroke="url(#routeg)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* moving plane/dot along path */}
      <motion.circle
        r="6"
        fill="#fff"
        stroke="#ff7a3d"
        strokeWidth="3"
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        style={{ offsetPath: "path('M48 150 C 120 60, 200 60, 272 48')" }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* endpoints */}
      <circle cx="48" cy="150" r="7" fill="#5e9bff" />
      <circle cx="272" cy="48" r="7" fill="#ff7a3d" />
      <circle cx="272" cy="48" r="7" fill="none" stroke="#ff7a3d" strokeWidth="2">
        <animate attributeName="r" from="7" to="16" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.8" to="0" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
