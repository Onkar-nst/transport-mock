import { Outlet } from 'react-router-dom'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'

/** App shell: persistent navbar + footer wrapping the routed page. */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
