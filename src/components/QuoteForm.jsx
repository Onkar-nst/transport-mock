import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

/**
 * Compact "check price" form used in service-page heroes — mirrors Porter's
 * simple pickup / drop / CTA card. On submit it shows a calm confirmation
 * instead of pretending to call an API.
 */
export default function QuoteForm({ priceFrom, accent = false }) {
  const [done, setDone] = useState(false)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <div className={`quote-card ${accent ? 'on-dark' : ''}`}>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.form
            key="q"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="quote-head">
              <span>Price this lane</span>
              {priceFrom && <span className="quote-from">from {priceFrom}</span>}
            </div>
            <div className="quote-field">
              <MapPin size={18} className="pin pickup" />
              <input required value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Pickup city" />
            </div>
            <div className="quote-field">
              <MapPin size={18} className="pin drop" />
              <input required value={to} onChange={(e) => setTo(e.target.value)} placeholder="Drop-off city" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Get the number <ArrowRight size={17} />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="ok"
            className="quote-done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="quote-check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
            >
              <CheckCircle2 />
            </motion.span>
            <h4>On it.</h4>
            <p>
              {from && to ? <>For <strong>{from} → {to}</strong>. </> : null}
              A coordinator will send the all-in price back today — usually within the hour.
            </p>
            <button className="quote-reset" onClick={() => { setDone(false); setFrom(''); setTo('') }}>
              Price another →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
