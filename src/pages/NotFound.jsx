import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow" style={{ marginBottom: 18 }}>Error 404</span>
          <h1>That page isn’t on any of our lanes.</h1>
          <p>We couldn’t find it — the cargo’s fine, the link just isn’t. Head back and we’ll get you moving again.</p>
          <Link to="/" className="btn btn-primary">Back to home <ArrowRight /></Link>
        </motion.div>
      </div>
    </section>
  )
}
