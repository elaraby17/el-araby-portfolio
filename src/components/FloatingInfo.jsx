import { motion, useTransform } from 'framer-motion'

const Tag = ({ children, className = '' }) => (
  <div
    className={`w-fit border border-iron/70 bg-abyss/40 px-3 py-2 font-mono text-[10px] uppercase leading-tight tracking-[0.15em] text-ash backdrop-blur-[2px] ${className}`}
  >
    {children}
  </div>
)

export default function FloatingInfo({ scrollYProgress, reducedMotion }) {
  const slow = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -30])
  const mid = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -50])

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: slow }}
        className="absolute left-10 top-[20%] lg:left-16"
      >
        <Tag>
          Based in
          <br />
          Egypt
        </Tag>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: mid }}
        className="absolute right-10 top-[14%] lg:right-16"
      >
        <Tag>Available for work</Tag>
      </motion.div>
    </div>
  )
}
