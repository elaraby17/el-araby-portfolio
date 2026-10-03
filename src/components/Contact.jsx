import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

function FacebookIcon({ size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.5-3H14v-1.5c0-.83.17-1.5 1.3-1.5H16V5.1c-.2 0-1-.1-2-.1-1.9 0-3 1.15-3 3.25" />
    </svg>
  )
}

function InstagramIcon({ size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const links = [
  {
    label: 'FACEBOOK',
    value: 'FACEBOOK.COM/YOURPAGE',
    href: 'https://facebook.com/yourpage',
    Icon: FacebookIcon,
  },
  {
    label: 'INSTAGRAM',
    value: '@YOURHANDLE',
    href: 'https://instagram.com/yourhandle',
    Icon: InstagramIcon,
  },
  {
    label: 'WHATSAPP',
    value: '+20 106 988 0640',
    href: 'https://wa.me/201069880640',
    Icon: MessageCircle,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between bg-black px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="flex flex-1 flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease }}
          className="font-display text-[15vw] leading-[0.85] text-bone sm:text-[11vw] md:text-[7vw]"
        >
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING
          <br />
          <span className="text-blood-bright">TOGETHER.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-14 flex flex-col gap-5 md:mt-20 md:flex-row md:gap-10"
        >
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center gap-3 border border-iron/50 px-4 py-3 transition-colors duration-300 hover:border-blood-bright md:border-none md:px-0 md:py-0"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-iron/60 text-ash transition-colors duration-300 group-hover:border-blood-bright group-hover:text-blood-bright">
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.25em] text-iron">
                  {label}
                </span>
                <span className="font-mono text-sm tracking-[0.05em] text-ash transition-colors duration-300 group-hover:text-bone">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href="https://wa.me/20XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-14 flex w-fit items-center gap-3 border border-bone/40 px-8 py-4 font-mono text-xs tracking-[0.2em] text-bone transition-colors duration-300 hover:border-blood-bright hover:text-blood-bright md:mt-20"
        >
          START A PROJECT ON WHATSAPP →
        </motion.a>
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-iron/30 pt-6 font-mono text-[10px] tracking-[0.15em] text-iron md:flex-row md:items-center md:justify-between">
        <span>© 2026 MOHAMED EL ARABY</span>
        <span>SUEZ, EGYPT</span>
      </div>
    </section>
  )
}
