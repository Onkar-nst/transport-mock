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
  return (
    <>
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
