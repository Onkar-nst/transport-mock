import { motion } from 'framer-motion'
import { Boxes, Container, Factory, Globe2, Truck, Warehouse, Plane, Anchor } from 'lucide-react'

const BRANDS = [
  { name: 'NorthPeak', icon: <Globe2 /> },
  { name: 'Cargolux', icon: <Plane /> },
  { name: 'Vanta Retail', icon: <Boxes /> },
  { name: 'PortLine', icon: <Anchor /> },
  { name: 'Hexa Foods', icon: <Factory /> },
  { name: 'Roadway Co', icon: <Truck /> },
  { name: 'BlueShip', icon: <Container /> },
  { name: 'StoreHub', icon: <Warehouse /> },
]

export default function Logos() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...BRANDS, ...BRANDS]

  return (
    <section className="logos">
      <div className="container">
        <p className="label">Powering supply chains for industry leaders</p>
      </div>
      <div className="marquee">
        <motion.div
          className="marquee-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((b, i) => (
            <span className="logo" key={i}>
              {b.icon}
              {b.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
