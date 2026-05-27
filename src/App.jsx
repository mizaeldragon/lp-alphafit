import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Manifesto from './components/Manifesto'
import Bento from './components/Bento'
import StatsBand from './components/StatsBand'
import Plans from './components/Plans'
import Units from './components/Units'
import AppSection from './components/AppSection'
import Personal from './components/Personal'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import Privacidade from './components/Privacidade'
import Termos from './components/Termos'

function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="ambient" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Manifesto />
      <Bento />
      <StatsBand />
      <Plans />
      <Units />
      <AppSection />
      <Personal />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  )
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/termos" element={<Termos />} />
    </Routes>
  )
}
