import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import EventServices from './pages/EventServices'
import Gallery from './pages/Gallery'
import EventInquiry from './pages/EventInquiry'
import BookNow from './pages/BookNow'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<EventServices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/inquiry" element={<EventInquiry />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      <Footer />
      <FloatingActionButton />
      <Analytics />
    </div>
  )
}

export default App
