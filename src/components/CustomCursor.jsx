import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default')
  const x = useSpring(0, { damping: 30, stiffness: 400, mass: 0.4 })
  const y = useSpring(0, { damping: 30, stiffness: 400, mass: 0.4 })

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isDesktop || reduced) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)

    const overLink = (e) => {
      if (e.target.closest('[data-cursor="link"]')) setVariant('link')
      else if (e.target.closest('[data-cursor="view"]')) setVariant('view')
      else setVariant('default')
    }
    window.addEventListener('mouseover', overLink)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overLink)
    }
  }, [x, y])

  if (!enabled) return null

  const size = variant === 'view' ? 72 : variant === 'link' ? 44 : 14

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: variant === 'view' ? 'transparent' : '#efece5',
        border: variant === 'view' ? '1px solid #efece5' : 'none',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {variant === 'view' && (
        <span className="font-mono text-[10px] tracking-widest text-bone">VIEW</span>
      )}
    </motion.div>
  )
}
