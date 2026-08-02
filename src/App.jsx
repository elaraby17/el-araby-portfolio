import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import NoiseOverlay from './components/NoiseOverlay.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import { useScroll } from 'framer-motion'

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const { scrollYProgress } = useScroll()
  const lenisRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reducedMotion])

  return (
    <div className="relative bg-void">
      <NoiseOverlay />
      <CustomCursor />
      <ScrollProgress progress={scrollYProgress} />
      <Navbar />

      <main>
        <Hero reducedMotion={reducedMotion} />
        <About reducedMotion={reducedMotion} />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
