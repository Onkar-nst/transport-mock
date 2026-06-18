import { Boxes, Linkedin, Twitter, Facebook, Github } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Services',
    links: ['Road Freight', 'Ocean Freight', 'Air Freight', 'Warehousing', 'Customs'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Newsroom', 'Sustainability', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Track shipment', 'Pricing', 'Help center', 'API docs', 'Status'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark">
                <Boxes />
              </span>
              Meridian
            </a>
            <p className="blurb">
              Global freight forwarding, made simple. Road, sea, and air — tracked
              live, cleared through customs, and delivered on time.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="GitHub"><Github /></a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Meridian Logistics Inc. · A demo website. All rights reserved.</span>
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
