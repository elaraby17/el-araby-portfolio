import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PortraitScene from './PortraitScene.jsx'
import FloatingInfo from './FloatingInfo.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function Hero({ reducedMotion }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const introOpacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.32], [0, -50])

  const midOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.68, 0.8],
    [0, 1, 1, 0]
  )
  const midY = useTransform(scrollYProgress, [0.42, 0.52, 0.8], [30, 0, -30])

  const bgOpacity = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [1, 0.85])

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-void">
        {/* Layer 1: background */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: bgOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
          className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-black"
        />

        <PortraitScene scrollYProgress={scrollYProgress} reducedMotion={reducedMotion} />
        <FloatingInfo scrollYProgress={scrollYProgress} reducedMotion={reducedMotion} />

        {/* Intro text block */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:px-12 lg:px-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="font-mono text-[11px] tracking-[0.3em] text-ash"
          >
            CREATIVE DEVELOPER
          </motion.span>

          <h1 className="font-display mt-4 text-[16vw] leading-[0.85] text-bone sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="block"
            >
              MOHAMED
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease }}
              className="block text-blood-bright"
            >
              EL ARABY
            </motion.span>
          </h1>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="font-mono mt-6 text-xs tracking-[0.25em] text-ash md:text-sm"
          >
            LARAVEL&nbsp;/&nbsp;PHP&nbsp;/&nbsp;REACT
          </motion.span>
        </motion.div>

        {/* Mid scroll text */}
        <motion.div
          style={{ opacity: midOpacity, y: midY }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center px-6 md:px-12 lg:px-16"
        >
          <h2 className="font-display max-w-[80vw] text-[13vw] leading-[0.88] text-bone sm:text-[10vw] md:max-w-[60vw] md:text-[6.5vw]">
            I BUILD DIGITAL
            <br />
            EXPERIENCES.
          </h2>
        </motion.div>

        {/* Bottom-left: scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 left-6 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-ash md:bottom-10 md:left-12"
        >
          <span>SCROLL TO EXPLORE</span>
          <motion.span
            animate={reducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>

        {/* Bottom-right: index */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 right-6 z-10 font-mono text-[10px] tracking-[0.2em] text-ash md:bottom-10 md:right-12"
        >
          01 / 06
        </motion.div>
      </div>
    </section>
  )
}
