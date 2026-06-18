import { motion } from 'framer-motion'
import { Truck, Ship, Plane, Warehouse, FileCheck2, Boxes, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: <Truck />,
    title: 'Road Freight',
    desc: 'FTL and LTL trucking across the continent with GPS-tracked fleets and guaranteed transit windows.',
  },
  {
    icon: <Ship />,
    title: 'Ocean Freight',
    desc: 'FCL and LCL container shipping through 200+ ports, with consolidation and door-to-door options.',
  },
  {
    icon: <Plane />,
    title: 'Air Freight',
    desc: 'Express and economy air cargo for time-critical shipments — wheels up within hours of booking.',
  },
  {
    icon: <Warehouse />,
    title: 'Warehousing',
    desc: 'Bonded and climate-controlled storage with real-time inventory, pick-pack, and fulfillment.',
  },
  {
    icon: <FileCheck2 />,
    title: 'Customs Clearance',
    desc: 'Licensed brokers handle documentation, duties, and compliance so your cargo never sits idle.',
  },
  {
    icon: <Boxes />,
    title: 'Supply Chain',
    desc: 'End-to-end visibility, demand planning, and a single dashboard for every leg of the journey.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">What we move</span>
          <h2>One partner for every mile of the journey</h2>
          <p>
            From a single pallet to a full supply chain, Meridian gives you the modes,
            the coverage, and the visibility to keep cargo moving.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="more">
                Learn more <ArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
