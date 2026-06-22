import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Send,
  ShieldCheck, Zap,
} from 'lucide-react'
import Reveal from './Reveal'

const CHANNELS = [
  { icon: <Phone />, label: 'Ops desk', value: '+1 (800) 555-0100', href: 'tel:+18005550100' },
  { icon: <Mail />, label: 'Email', value: 'freight@meridian.co', href: 'mailto:freight@meridian.co' },
  { icon: <MapPin />, label: 'Where we are', value: 'Waalhaven 12, Rotterdam', href: null },
  { icon: <Clock />, label: 'When we’re about', value: 'Mon–Fri 07:00–20:00 CET · on-call overnight', href: null },
]

const SERVICES = ['Road freight', 'Ocean freight', 'Air freight', 'Warehousing', 'Customs clearance', 'Full supply chain']

const fieldVariant = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.07, duration: 0.45 } }),
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: SERVICES[0], message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <span className="contact-grid-bg" />
      <div className="container">
        <div className="contact-shell">
          {/* ---- Left: info panel ---- */}
          <div className="contact-aside">
            <Reveal>
              <span className="eyebrow">Contact</span>
              <h2 className="contact-title">Tell us what you’re moving</h2>
              <p className="contact-sub">
                Send the details and we’ll come back with a real, all-in quote — same
                day, usually within the hour. A coordinator reads every one. No bots,
                no “contact sales”.
              </p>
            </Reveal>

            <div className="contact-channels">
              {CHANNELS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href || undefined}
                  className={`channel ${c.href ? 'link' : ''}`}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <span className="channel-ic">{c.icon}</span>
                  <span className="channel-tx">
                    <span className="t">{c.label}</span>
                    <span className="v">{c.value}</span>
                  </span>
                </motion.a>
              ))}
            </div>

            <Reveal delay={0.2} className="contact-badges">
              <span><Zap size={15} /> Same-day replies</span>
              <span><ShieldCheck size={15} /> Insured door to door</span>
            </Reveal>
          </div>

          {/* ---- Right: form card ---- */}
          <Reveal delay={0.1} className="contact-formwrap">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={onSubmit}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <motion.div className="field" custom={0} variants={fieldVariant}>
                    <label>Full name</label>
                    <input required value={form.name} onChange={update('name')} placeholder="Jordan Rivera" />
                  </motion.div>

                  <div className="field-row">
                    <motion.div className="field" custom={1} variants={fieldVariant}>
                      <label>Work email</label>
                      <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" />
                    </motion.div>
                    <motion.div className="field" custom={2} variants={fieldVariant}>
                      <label>Company</label>
                      <input value={form.company} onChange={update('company')} placeholder="Acme Trading Co." />
                    </motion.div>
                  </div>

                  <motion.div className="field" custom={3} variants={fieldVariant}>
                    <label>What do you need?</label>
                    <div className="chip-select">
                      {SERVICES.map((s) => (
                        <button
                          type="button"
                          key={s}
                          className={`chip ${form.service === s ? 'on' : ''}`}
                          onClick={() => setForm((f) => ({ ...f, service: s }))}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div className="field" custom={4} variants={fieldVariant}>
                    <label>Shipment details</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Origin, destination, cargo type, weight/volume, timeline…"
                    />
                  </motion.div>

                  <motion.button type="submit" className="btn btn-primary contact-submit" custom={5} variants={fieldVariant}>
                    Send it over <Send size={16} />
                  </motion.button>

                  <motion.p className="contact-fineprint" custom={6} variants={fieldVariant}>
                    A coordinator picks this up, not an autoresponder. (This is a demo build — nothing is actually sent.)
                  </motion.p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="success-ic"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
                  >
                    <CheckCircle2 />
                  </motion.span>
                  <h3>Got it, {form.name ? form.name.split(' ')[0] : 'thanks'}.</h3>
                  <p>
                    Your note about <strong>{form.service.toLowerCase()}</strong> is with the desk.
                    A coordinator will email you an all-in quote today — usually within the hour.
                  </p>
                  <button className="btn btn-dark" onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', service: SERVICES[0], message: '' }) }}>
                    Send another <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
