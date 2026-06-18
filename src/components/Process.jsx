import { motion } from 'framer-motion'
import { ClipboardList, PackageSearch, Route, PartyPopper } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    icon: <ClipboardList />,
    title: 'Get a quote',
    desc: 'Tell us what, where, and when. Get transparent pricing back in under 15 minutes.',
  },
  {
    icon: <PackageSearch />,
    title: 'We collect',
    desc: 'Our team books carriers, prints labels, and picks up your cargo at the door.',
  },
  {
    icon: <Route />,
    title: 'In transit',
    desc: 'Follow every checkpoint live, with proactive alerts if anything needs your call.',
  },
  {
    icon: <PartyPopper />,
    title: 'Delivered',
    desc: 'Signed, scanned, and confirmed — with proof of delivery in your inbox instantly.',
  },
]

export default function Process() {
  return (
    <section className="section section--soft" id="process">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2>Booking freight should feel this simple</h2>
          <p>Four steps from quote to doorstep — no phone tag, no paperwork pile-ups.</p>
        </Reveal>

        <div className="process-grid">
          <span className="process-line" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="num">
                {s.icon}
                <span className="badge">{i + 1}</span>
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
