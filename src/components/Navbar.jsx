import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Boxes, Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false)
    setSvcOpen(false)
  }, [pathname])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark"><Boxes /></span>
          Meridian
        </Link>

        <div className="nav-links">
          <div
            className="nav-dropdown"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="nav-droptoggle">
              Services <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {svcOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                >
                  {SERVICES.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="dropdown-item">
                      <span className="dd-ic">{s.icon}</span>
                      <span>
                        <span className="dd-name">{s.name}</span>
                        <span className="dd-desc">{s.short}</span>
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/track">Track</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary">
            Get a quote <ArrowRight />
          </Link>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="container nav-mobile-inner">
              <span className="nav-mobile-label">Services</span>
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="nav-mobile-link sub">
                  {s.icon} {s.name}
                </Link>
              ))}
              <span className="nav-mobile-label">More</span>
              <Link to="/track" className="nav-mobile-link">Track shipment</Link>
              <Link to="/about" className="nav-mobile-link">About us</Link>
              <Link to="/contact" className="nav-mobile-link">Contact</Link>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>
                Get a quote <ArrowRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
