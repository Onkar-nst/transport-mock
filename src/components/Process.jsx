import { motion } from 'framer-motion'
import { ClipboardList, PackageSearch, Route, Check } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    icon: <ClipboardList />,
    title: 'You send the brief',
    desc: 'Origin, destination, what’s in the box and when it has to land. A quote comes back the same day — usually inside the hour.',
  },
  {
    icon: <PackageSearch />,
    title: 'We book and collect',
    desc: 'We hold the space, sort the paperwork, and a driver is at your dock on the agreed slot. No chasing required.',
  },
  {
    icon: <Route />,
    title: 'It moves, you watch',
    desc: 'One tracking link, updated at every handover. If a sailing slips you hear it from us first, not from your customer.',
  },
  {
    icon: <Check />,
    title: 'Signed for',
    desc: 'Proof of delivery and the final invoice land together. The number on the invoice is the number we quoted.',
  },
]

export default function Process() {
  return (
    <section className="section section--soft" id="process">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">How it runs</span>
            <h2>Brief to signature, no phone tag</h2>
          </div>
          <p>
            Four steps, and you only do the first one. The rest is our job —
            that's rather the point of hiring a forwarder.
          </p>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              className="step"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="num">
                {s.icon}
                <span className="badge">Step {String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
