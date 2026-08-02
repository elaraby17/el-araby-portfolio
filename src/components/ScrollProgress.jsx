import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress({ progress }) {
  const width = useSpring(progress, { damping: 30, stiffness: 200, mass: 0.3 })

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[80] h-[2px] w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-blood-bright"
        style={{ scaleX: width }}
      />
    </div>
  )
}
