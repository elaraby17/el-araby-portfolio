
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'


const ease = [0.16, 1, 0.3, 1]

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}
function FacebookIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.8-.1-1.7-.2-2.6-.2-2.7 0-4.5 1.6-4.5 4.7v2H6.8v3.2h2.9V21h3.8Z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

const links = [
  {
    label: 'FACEBOOK',
    value: 'Mohamed El Araby',
    href: 'https://www.facebook.com/mohamed.el.araby.833588/',
    Icon: FacebookIcon,
  },
  {
    label: 'INSTAGRAM',
    value: '@me_mohamedessam',
    href: 'https://www.instagram.com/me_mohamedessam/',
    Icon: InstagramIcon,
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
    Icon: GithubIcon,
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
