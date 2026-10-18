import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

function GithubIcon({ size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const links = [
  {

    label: 'FACEBOOK',
    value: 'FACEBOOK.COM/MOHAMED-ELARABY',
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 flex min-h-screen flex-col justify-between bg-black px-6 py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-blood-text">06</span>
          <span className="h-px w-8 bg-iron" />
          <span className="font-mono text-xs tracking-[0.3em] text-ash">CONTACT</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease }}
          className="font-display mt-8 text-[13vw] leading-[0.88] text-bone sm:text-[10vw] md:mt-12 md:text-[6.5vw]"
        >
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING
          <br />
          <span className="text-blood-text">TOGETHER.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-12 flex flex-col gap-4 md:mt-16 md:flex-row md:gap-10"
        >
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center gap-3 border border-iron/40 px-4 py-3 transition-colors duration-300 hover:border-blood-text md:border md:px-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-iron/60 text-ash transition-colors duration-300 group-hover:border-blood-text group-hover:text-blood-text">
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.25em] text-ash">
                  {label}
                </span>
                <span className="font-mono text-sm tracking-[0.05em] text-bone/80 transition-colors duration-300 group-hover:text-bone">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href="https://wa.me/201069880640"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-10 flex w-fit items-center gap-3 border border-bone bg-bone px-8 py-4 font-mono text-xs tracking-[0.2em] text-void transition-colors duration-300 hover:border-blood-text hover:bg-blood-text hover:text-bone md:mt-14"
        >
          START A PROJECT ON WHATSAPP
          <span aria-hidden="true">→</span>
        </motion.a>
      </div>

      <footer className="mx-auto mt-20 flex w-full max-w-[1500px] flex-col gap-2 border-t border-iron/30 pt-6 font-mono text-[10px] tracking-[0.15em] text-ash md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} MOHAMED EL ARABY</span>
        <span>SUEZ, EGYPT — AVAILABLE FOR WORK</span>
      </footer>
    </section>
  )
}
