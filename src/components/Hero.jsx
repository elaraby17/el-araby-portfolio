import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PortraitScene from './PortraitScene.jsx'
import FloatingInfo from './FloatingInfo.jsx'

const ease = [0.16, 1, 0.3, 1]

const stack = ['PHP', 'LARAVEL', 'MYSQL', 'REST APIs', 'JAVASCRIPT', 'REACT']

const architecture = [
  { label: 'REACT', role: 'CLIENT' },
  { label: 'LARAVEL', role: 'API' },
  { label: 'MYSQL', role: 'DATA' },
]

export default function Hero({ reducedMotion }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const introOpacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0])
  const introY = useTransform(
    scrollYProgress,
    [0, 0.32],
    reducedMotion ? [0, 0] : [0, -50]
  )

  const midOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.68, 0.8],
    [0, 1, 1, 0]
  )
  const midY = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.8],
    reducedMotion ? [0, 0, 0] : [30, 0, -30]
  )

  const bgOpacity = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [1, 0.85])

  return (
    <section ref={sectionRef} id="top" className="relative h-[200vh]">
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-void">
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

        {/* Mobile-only legibility gradients over the portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-void via-void/70 to-transparent md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-void via-void/60 to-transparent md:hidden"
        />

        {/* Intro content column */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="relative z-10 flex h-full w-full flex-col justify-start px-6 pt-24 md:justify-center md:px-12 md:pt-0 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[11px] tracking-[0.3em] text-blood-text">01</span>
            <span className="h-px w-8 bg-iron" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-ash">
              LARAVEL BACKEND / FULL-STACK DEVELOPER
            </span>
          </motion.div>

          <h1 className="font-display mt-5 text-[15vw] leading-[0.85] text-bone sm:text-[12vw] md:text-[8.5vw] lg:text-[7.2vw]">
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
              className="block text-blood-text"
            >
              EL ARABY
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-ash md:text-lg"
          >
            I build reliable backend systems and full-stack applications —
            APIs, authentication, and clean databases, extended with modern
            frontend interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              data-cursor="link"
              className="border border-bone bg-bone px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-void transition-colors duration-300 hover:border-blood-text hover:bg-blood-text hover:text-bone"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              data-cursor="link"
              className="border border-iron/70 px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-bone transition-colors duration-300 hover:border-blood-text hover:text-blood-text"
            >
              CONTACT ME
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15, ease }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.22em] text-ash md:text-[11px]"
            aria-label="Core technologies"
          >
            {stack.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-blood-text">/</span>}
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Architecture panel — communicates the full-stack shape of the work */}
        <motion.aside
          aria-hidden="true"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease }}
          style={{ opacity: introOpacity }}
          className="pointer-events-none absolute bottom-24 right-12 z-10 hidden w-[330px] border border-iron/40 bg-abyss/60 p-5 backdrop-blur-sm xl:block"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-ash">SYSTEM SHAPE</span>
          <div className="mt-4 flex items-center justify-between">
            {architecture.map((node, i) => (
              <div key={node.label} className="flex items-center gap-2">
                <div className="border border-iron/50 px-2.5 py-2 text-center">
                  <span className="block font-mono text-[10px] tracking-[0.12em] text-bone">
                    {node.label}
                  </span>
                  <span className="mt-1 block font-mono text-[8px] tracking-[0.2em] text-blood-text">
                    {node.role}
                  </span>
                </div>
                {i < architecture.length - 1 && (
                  <span className="font-mono text-[10px] text-blood-text">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.aside>

        {/* Mid scroll statement */}
        <motion.div
          style={{ opacity: midOpacity, y: midY }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center px-6 md:px-12 lg:px-16"
        >
          <h2 className="font-display max-w-[85vw] text-[11vw] leading-[0.92] text-bone sm:text-[9vw] md:max-w-[70vw] md:text-[5.6vw]">
            BUILDING RELIABLE
            <br />
            BACKEND SYSTEMS
            <br />
            &amp; FULL-STACK
            <span className="text-blood-text">.</span>
          </h2>
        </motion.div>

        {/* Bottom-left: scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
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

        {/* Bottom-right: section index */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 right-6 z-10 hidden font-mono text-[10px] tracking-[0.2em] text-ash md:bottom-10 md:right-12 xl:right-[380px]"
        >
          01 / 06
        </motion.div>
      </div>
    </section>
  )
}
