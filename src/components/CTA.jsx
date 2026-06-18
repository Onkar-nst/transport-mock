import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-band" id="contact">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cta-glow" />
          <h2>Ready to move your freight the easy way?</h2>
          <p>
            Get a transparent quote in under 15 minutes — no commitment, no jargon, just a
            faster way to ship. Our team will map the best route for your cargo today.
          </p>
          <div className="cta-actions">
            <a href="#top" className="btn btn-light">
              Request a free quote <ArrowRight />
            </a>
            <a href="tel:+18005550100" className="btn btn-ghost">
              <PhoneCall /> +1 (800) 555-0100
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
