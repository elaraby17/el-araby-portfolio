import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { MotionConfig, useScroll } from 'framer-motion'
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

const NAV_OFFSET = -80

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
      lenisRef.current = null
    }
  }, [reducedMotion])

  // Route in-page anchor clicks through Lenis so navigation matches the
  // site's smooth-scroll feel. Falls back to native scrolling when Lenis
  // is disabled (reduced motion).
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: NAV_OFFSET })
      } else {
        target.scrollIntoView({ block: 'start' })
      }
      if (target.hasAttribute('tabindex')) target.focus({ preventScroll: true })
      window.history.replaceState(null, '', hash)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-void">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <NoiseOverlay />
        <CustomCursor />
        <ScrollProgress progress={scrollYProgress} />
        <Navbar />

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Hero reducedMotion={reducedMotion} />
          <About reducedMotion={reducedMotion} />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}
