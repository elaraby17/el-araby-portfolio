
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  MessageCircle,
  Mail,
} from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const links = [
  {
    label: 'FACEBOOK',
    value: 'Mohamed El Araby',
    href: 'https://www.facebook.com/mohamed.el.araby.833588/',
    Icon: Facebook,
  },
  {
    label: 'INSTAGRAM',
    value: '@me_mohamedessam',
    href: 'https://www.instagram.com/me_mohamedessam/',
    Icon: Instagram,
  },
  {
    label: 'WHATSAPP',
    value: '+20 106 988 0640',
    href: 'https://wa.me/201069880640',
    Icon: MessageCircle,
  },
  {
    label: 'GITHUB',
    value: 'github.com/elaraby17',
    href: 'https://github.com/elaraby17',
    Icon: Github,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#080808] px-5 py-24 text-[#F1EEE8] sm:px-8 sm:py-28 md:px-12 lg:px-16 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-red-700/[0.07] blur-[120px]"
      />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-red-500">
            06
          </span>

          <span className="h-px w-9 bg-white/20" />

          <span className="font-mono text-xs tracking-[0.25em] text-white/45">
            CONTACT
          </span>
        </motion.div>

        {/* Main content */}
        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <div>
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="mb-6 max-w-md text-sm leading-7 text-white/50 sm:text-base"
            >
              Have a project in mind or looking for a developer?
              Let&apos;s discuss how we can build something meaningful.
            </motion.p>

            <motion.h2
              id="contact-heading"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
              className="break-words font-display text-[16vw] leading-[0.86] tracking-[-0.065em] sm:text-[12vw] md:text-[10vw] lg:text-[7.5vw]"
            >
              LET&apos;S
              <br />
              BUILD
              <br />
              <span className="text-red-600">TOGETHER.</span>
            </motion.h2>

            <motion.a
              href="https://wa.me/201069880640"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact El Araby on WhatsApp"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="group mt-9 inline-flex min-h-14 items-center justify-center gap-4 bg-red-600 px-6 py-4 font-mono text-xs tracking-[0.12em] text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 sm:px-8"
            >
              <MessageCircle size={18} />

              <span>START A PROJECT</span>

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>

          {/* Contact links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            className="border-t border-white/15"
          >
            <div className="border-b border-white/15 py-5">
              <span className="font-mono text-[10px] tracking-[0.25em] text-red-500">
                GET IN TOUCH
              </span>

              <h3 className="mt-2 text-xl font-medium sm:text-2xl">
                Find me online
              </h3>
            </div>

            {links.map(({ label, value, href, Icon }) => (
              <motion.a
                key={label}
                variants={reveal}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${value}`}
                className="group flex min-w-0 items-center gap-4 border-b border-white/10 py-5 transition-colors duration-300 hover:border-red-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={18} strokeWidth={1.5} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-white/40">
                    {label}
                  </span>

                  <span className="mt-1 block break-words text-sm text-white/80 transition-colors group-hover:text-white sm:text-base">
                    {value}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/15 pt-6 sm:mt-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <a
                href="#home"
                className="inline-flex items-center gap-2 font-display text-lg tracking-tight transition-colors hover:text-red-500"
              >
                EL ARABY
                <ArrowDownRight size={16} className="text-red-500" />
              </a>

              <p className="mt-2 font-mono text-[10px] tracking-wider text-white/40">
                BUILDING DIGITAL EXPERIENCES
              </p>
            </div>

            <div className="font-mono text-[10px] leading-6 tracking-wider text-white/45 sm:text-right">
              <p>© {new Date().getFullYear()} EL ARABY</p>
              <p>SUEZ, EGYPT</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
