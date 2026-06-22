import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

/** Calm expandable FAQ list. Pass `items` as [{ q, a }]. */
export default function FAQ({ items, title = 'Frequently asked questions', subtitle }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq">
      <div className="container faq-wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Questions</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>

        <div className="faq-list">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <span className="faq-icon"><Plus /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-a-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="faq-a">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
