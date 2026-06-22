import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Get a quote</span>
          <h2>Tell us what you’re shipping. We’ll tell you the number.</h2>
          <p>
            Same-day quote, usually inside the hour. No login, no “contact sales”,
            no obligation — just a real price from the coordinator who’d run it.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">
              Get a quote <ArrowRight />
            </Link>
            <a href="tel:+18005550100" className="btn btn-ghost">
              <PhoneCall /> +1 (800) 555-0100
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
