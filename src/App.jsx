import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import About from './pages/About'
import Track from './pages/Track'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  // Show the truck loader only once per browser session, so navigating
  // between pages stays calm and instant.
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('meridian-loaded'))

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  const finishLoading = () => {
    sessionStorage.setItem('meridian-loaded', '1')
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={finishLoading} />}
      </AnimatePresence>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
