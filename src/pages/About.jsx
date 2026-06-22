import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, Eye, Leaf, ArrowRight, Heart } from 'lucide-react'
import Reveal from '../components/Reveal'
import Stats from '../components/Stats'

const VALUES = [
  { icon: <Eye />, title: 'Say the real number', desc: 'The quote is the invoice. If a price moves we tell you why, before it does — not in a line item at the end.' },
  { icon: <Heart />, title: 'Pick up the phone', desc: 'A person answers, knows your shipment, and stays with it. We measure ourselves on whether you had to chase.' },
  { icon: <Compass />, title: 'Sweat the boring bits', desc: 'Paperwork filed clean, slots kept, edge cases caught early. Most of freight is just doing the dull parts properly.' },
  { icon: <Leaf />, title: 'Own the misses', desc: 'We get about one in seventy wrong. When we do, you hear it from us first, with a fix already in motion.' },
]

const TIMELINE = [
  { year: '2014', text: 'Two ex-truckers and five vehicles in a Rotterdam yard. One rule: no surcharge the customer didn’t agree to.' },
  { year: '2017', text: 'First customer asked us to handle their sea freight too. We learned customs the hard way, then hired someone who knew it cold.' },
  { year: '2020', text: 'Lockdowns broke everyone’s chains. We answered the phone at 3am and kept cargo moving. The book doubled.' },
  { year: '2023', text: 'Put every shipment on one tracking link — built because customers kept asking “where is it?” and we were tired of guessing.' },
  { year: '2026', text: '38 people, 42 lanes, still independent. Still small enough that the founders read the complaints.' },
]

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1>We move other people’s hard work, carefully.</h1>
            <p>
              Meridian started because moving goods shouldn’t mean a dozen phone
              calls and a surprise bill. We’re a freight forwarder — the people you
              hire so you don’t have to think about the freight.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission">
          <Reveal>
            <span className="eyebrow">Why we bother</span>
            <h2 className="about-mission-title">
              Freight is mostly invisible until it goes wrong. Our whole job is to
              keep it boring.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-mission-body">
              <p>
                A forwarder doesn’t own the ship or fly the plane. What we sell is
                judgment — which carrier, which lane, which week to avoid — plus the
                unglamorous discipline of filing the paperwork right and calling you
                before a problem lands on your desk.
              </p>
              <p>
                We’ve stayed deliberately mid-sized. Big enough to hold space on the
                lanes that matter and clear an awkward entry; small enough that the
                person who quotes your shipment is the person who runs it, and the
                founders still read the week’s complaints on a Friday.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats reuse */}
      <Stats />

      {/* Values */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>Four things we won’t bend on</h2>
          </Reveal>
          <div className="services-grid cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              >
                <span className="service-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How we got here</span>
            <h2>From five trucks to forty-two lanes</h2>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                className="timeline-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className="timeline-year">{t.year}</span>
                <span className="timeline-dot" />
                <p>{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Work with us</span>
            <h2>Got freight to move, or a career to move?</h2>
            <p>We’re always glad to quote a shipment — and we’re hiring coordinators who like solving problems before breakfast.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-light">Get in touch <ArrowRight /></Link>
              <Link to="/services/road" className="btn btn-ghost">See what we do</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
