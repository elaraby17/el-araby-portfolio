import { motion } from 'framer-motion'

const links = ['WORK', 'ABOUT', 'EXPERIENCE', 'CONTACT']

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8"
    >
      <span className="font-mono text-xs tracking-[0.25em] text-bone">EL&nbsp;ARABY</span>

      <nav className="hidden gap-8 md:flex">
        {links.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            data-cursor="link"
            className="font-mono text-[11px] tracking-[0.2em] text-ash transition-colors duration-300 hover:text-bone"
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        data-cursor="link"
        className="font-mono text-[11px] tracking-[0.2em] text-ash md:hidden"
        aria-label="Open menu"
      >
        MENU
      </button>
    </motion.header>
  )
}
