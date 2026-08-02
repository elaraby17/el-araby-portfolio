import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const ease = [0.16, 1, 0.3, 1]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center gap-16 bg-void px-6 py-32 md:gap-24 md:px-12 md:py-40 lg:px-16"
    >
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col gap-4 border-t border-iron/40 pt-8 md:flex-row md:items-baseline md:gap-10"
        >
          <div className="flex items-baseline gap-4 md:w-64 md:shrink-0">
            <span className="font-mono text-sm text-blood-bright">{group.index}</span>
            <h3 className="font-display text-[10vw] leading-none text-bone sm:text-[6vw] md:text-[3.5vw]">
              {group.label}
            </h3>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="font-mono text-sm tracking-[0.1em] text-ash md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  )
}
