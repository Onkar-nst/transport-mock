import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Stats from './components/Stats'
import Process from './components/Process'
import Tracking from './components/Tracking'
import Coverage from './components/Coverage'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Lock scrolling while the loader is on screen.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Stats />
        <Process />
        <Tracking />
        <Coverage />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
