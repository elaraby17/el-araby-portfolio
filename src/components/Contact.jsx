import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const links = [
  { label: 'EMAIL', value: 'elaraby98123@EMAIL.COM', href: 'mailto:elaraby98123@EMAIL.COM' },
  { label: 'GITHUB', value: 'GITHUB.COM/ELARABY17', href: 'https://github.com/elaraby17' },
  { label: 'LINKEDIN', value: 'LINKEDIN.COM/IN/MOHAMED-EL-ARABY', href: 'https://www.linkedin.com/in/mohamed-el-araby-a1a098301/' },
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
          className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:gap-16"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              data-cursor="link"
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-iron">
                {link.label}
              </span>
              <span className="font-mono text-sm tracking-[0.05em] text-ash transition-colors duration-300 group-hover:text-bone">
                {link.value}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:elaraby98123@email.com"
          data-cursor="link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-14 w-fit border border-bone/40 px-8 py-4 font-mono text-xs tracking-[0.2em] text-bone transition-colors duration-300 hover:border-blood-bright hover:text-blood-bright md:mt-20"
        >
          START A PROJECT →
        </motion.a>
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-iron/30 pt-6 font-mono text-[10px] tracking-[0.15em] text-iron md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} MOHAMED EL ARABY</span>
        <span>SUEZ, EGYPT</span>
      </div>
    </section>
  )
}
