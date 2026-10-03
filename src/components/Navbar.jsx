import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['WORK', 'ABOUT', 'EXPERIENCE', 'CONTACT']
const ease = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease }}
        className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8"
      >
        <a
          href="#top"
          onClick={handleLinkClick}
          className="font-mono text-xs tracking-[0.25em] text-bone"
        >
          EL&nbsp;ARABY
        </a>

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
          onClick={() => setOpen((v) => !v)}
          className="relative z-[110] flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-bone md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? 'CLOSE' : 'MENU'}
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[100] flex flex-col justify-center bg-abyss/98 px-8 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease }}
                  className="font-display border-b border-iron/30 py-4 text-4xl text-bone active:text-blood-bright"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 font-mono text-[10px] tracking-[0.2em] text-iron"
            >
              MOHAMED EL ARABY — SUEZ, EGYPT
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
