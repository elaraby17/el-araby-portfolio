import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import portrait from '../assets/portrait.jpg'

const ease = [0.16, 1, 0.3, 1]

const bioLines = [
  'I build backend-first web applications',
  'with Laravel, PHP and MySQL — then',
  'extend them with React and Next.js',
  'on the frontend.',
]

const labels = ['LARAVEL', 'REACT', 'NEXT.JS', 'REST API']

export default function About({ reducedMotion }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const headingOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])
  const headingX = useTransform(scrollYProgress, [0, 0.12], reducedMotion ? [0, 0] : [-60, 0])

  const portraitY = useTransform(scrollYProgress, [0.3, 0.75], reducedMotion ? [0, 0] : [0, -30])
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.15, 0.88, 1], [0, 0.28, 0.28, 0])

  const labelsOpacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1])
  const labelsY = useTransform(scrollYProgress, [0.62, 0.78], reducedMotion ? [0, 0] : [16, 0])

  const exitOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  return (
    <section ref={sectionRef} id="about" className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden bg-void px-6 md:px-12 lg:px-16">
        {/* ambient portrait cameo, kept behind everything */}
        <motion.img
          aria-hidden="true"
          src={portrait}
          alt=""
          style={{ y: portraitY, opacity: portraitOpacity }}
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-[75vh] -translate-y-1/2 object-contain grayscale md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-l from-void via-void/70 to-transparent md:block"
        />

        <motion.div style={{ opacity: exitOpacity }} className="relative z-10 max-w-3xl">
          <motion.span
            style={{ opacity: eyebrowOpacity }}
            className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-ash"
          >
            <span className="text-blood-bright">02</span>
            <span className="h-px w-8 bg-iron" />
            ABOUT
          </motion.span>

          <motion.h2
            style={{ opacity: headingOpacity, x: headingX }}
            className="font-display mt-6 text-[16vw] leading-[0.82] text-bone sm:text-[13vw] md:text-[8vw]"
          >
            WHO
            <br />
            AM
            <br />
            I<span className="text-blood-bright">?</span>
          </motion.h2>

          <div className="mt-16 max-w-xl space-y-3 border-l border-iron/40 pl-6 md:mt-24 md:pl-8">
            {bioLines.map((line, i) => {
              const start = 0.16 + i * 0.09
              const end = start + 0.18
              return (
                <BioLine
                  key={line}
                  line={line}
                  scrollYProgress={scrollYProgress}
                  range={[start, end]}
                  reducedMotion={reducedMotion}
                />
              )
            })}
          </div>

          <motion.div
            style={{ opacity: labelsOpacity, y: labelsY }}
            className="mt-16 flex flex-wrap gap-3 pl-6 md:mt-20 md:pl-8"
          >
            {labels.map((label) => (
              <span
                key={label}
                className="border border-iron/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ash"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function BioLine({ line, scrollYProgress, range, reducedMotion }) {
  const opacity = useTransform(scrollYProgress, range, [0, 1])
  const y = useTransform(scrollYProgress, range, reducedMotion ? [0, 0] : [16, 0])

  return (
    <motion.p
      style={{ opacity, y }}
      className="font-body text-xl font-light leading-snug text-ash sm:text-2xl md:text-3xl"
    >
      {line}
    </motion.p>
  )
}
