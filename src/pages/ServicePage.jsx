import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Check, ArrowRight, ShieldCheck, Clock, Headset } from 'lucide-react'
import { SERVICES, getService, COMMON_FAQS } from '../data/services'
import Reveal from '../components/Reveal'
import QuoteForm from '../components/QuoteForm'
import FAQ from '../components/FAQ'

const TRUST = [
  { icon: <Clock />, text: 'Same-day quote' },
  { icon: <ShieldCheck />, text: 'Insured door to door' },
  { icon: <Headset />, text: 'A coordinator on your account' },
]

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <Navigate to="/" replace />

  const others = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="svc-hero">
        <div className="container svc-hero-grid">
          <Reveal>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services/road">Services</Link>
              <ChevronRight size={14} />
              <span>{service.name}</span>
            </nav>

            <span className="eyebrow" style={{ marginBottom: 16 }}>{service.name}</span>
            <h1 className="svc-title">{service.tagline}</h1>
            <p className="svc-intro">{service.intro}</p>

            <ul className="svc-trust">
              {TRUST.map((t) => (
                <li key={t.text}>{t.icon} {t.text}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <QuoteForm priceFrom={service.priceFrom} />
          </Reveal>
        </div>
      </section>

      {/* ---- Benefits ---- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why us for this</span>
            <h2>What you actually get</h2>
          </Reveal>
          <div className="services-grid">
            {service.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="service-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How it runs</span>
            <h2>Four steps, and you only do the first</h2>
          </Reveal>
          <div className="steps-flow">
            {service.steps.map((step, i) => (
              <motion.div
                key={i}
                className="step-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className="step-num">{i + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Specs ---- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Options</span>
            <h2>Pick what fits the cargo</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="spec-table">
              <div className="spec-row spec-head">
                {service.specHead.map((h) => <span key={h}>{h}</span>)}
              </div>
              {service.specs.map((row, i) => (
                <div className="spec-row" key={i}>
                  {row.map((cell, j) => (
                    <span key={j}>
                      {j === 0 ? <strong>{cell}</strong> : cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <FAQ items={COMMON_FAQS} title={`${service.name} — questions, answered`} />

      {/* ---- Other services ---- */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">While you’re here</span>
            <h2>More of what we run</h2>
          </Reveal>
          <div className="services-grid">
            {others.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link to={`/services/${s.slug}`} className="service-card">
                  <span className="service-icon">{s.icon}</span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="more">See how it works <ArrowRight /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="cta-band">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Get a quote</span>
            <h2>Got {service.name.toLowerCase()} to move?</h2>
            <p>Send the details and we’ll price it today — usually within the hour. No commitment, no jargon, no “contact sales”.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-light">Get a quote <ArrowRight /></Link>
              <Link to="/track" className="btn btn-ghost">Track a shipment</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
