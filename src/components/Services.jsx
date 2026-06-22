import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data/services'

export default function Services() {
  const total = String(SERVICES.length).padStart(2, '0')

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">Services</span>
            <h2>Six ways we move your cargo</h2>
          </div>
          <p>
            One pallet or a standing programme, it's the same desk and the same
            tracking link. Here's what we run — pick one to see how it actually works.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/services/${s.slug}`} className="service-card">
                <span className="svc-no">{String(i + 1).padStart(2, '0')} / {total}</span>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">
                  See how it works <ArrowRight />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
