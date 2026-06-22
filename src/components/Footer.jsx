import { Link } from 'react-router-dom'
import { Boxes, Linkedin, Twitter, Facebook, Github } from 'lucide-react'
import { SERVICES } from '../data/services'

const COMPANY = [
  { label: 'About us', to: '/about' },
  { label: 'Track a shipment', to: '/track' },
  { label: 'Get a quote', to: '/contact' },
  { label: 'We’re hiring', to: '/about' },
]

const ELSEWHERE = [
  { label: 'Help & docs', to: '/contact' },
  { label: 'Rate guide', to: '/services/road' },
  { label: 'Customs desk', to: '/services/customs' },
  { label: 'Talk to ops', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mark"><Boxes /></span>
              Meridian
            </Link>
            <p className="blurb">
              An independent freight forwarder out of Rotterdam, moving cargo by
              road, sea and air since 2014. Small enough to call, big enough to
              clear the box.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="GitHub"><Github /></a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              {COMPANY.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Elsewhere</h5>
            <ul>
              {ELSEWHERE.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Meridian Forwarding BV · A demo build, not a real carrier.</span>
          <span style={{ display: 'flex', gap: 22 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
