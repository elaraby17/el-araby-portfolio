import { motion, useTransform } from 'framer-motion'
import portrait from '../assets/portrait.jpg'

export default function PortraitScene({ scrollYProgress, reducedMotion }) {
  const range = reducedMotion ? [0, 1] : undefined

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reducedMotion ? [1, 1, 1, 1] : [1.02, 1, 0.95, 0.97]
  )
  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reducedMotion ? [0, 0, 0, 0] : [0, 18, -18, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reducedMotion ? [0, 0, 0, 0] : [0, -8, -22, -36]
  )
  const glowY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -60])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.85, 0.4])

  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-end">
      {/* Layer 2: atmospheric red glow */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute right-[8%] top-[18%] h-[50vh] w-[50vh] rounded-full bg-blood blur-[120px] md:right-[14%]"
      />

      {/* Layer 3: portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[62vh] w-[85vw] max-w-[560px] md:h-[72vh] md:w-auto md:max-w-none md:right-[6%] lg:right-[10%]"
      >
        <motion.div
          style={{ scale, x, y }}
          className="relative h-full w-full"
        >
          <img
            src={portrait}
            alt="Portrait of Mohamed El Araby, Laravel and full-stack developer"
            className="h-full w-full object-contain object-bottom"
            style={{
              maskImage:
                'radial-gradient(ellipse 75% 90% at 50% 55%, black 55%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 75% 90% at 50% 55%, black 55%, transparent 100%)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
