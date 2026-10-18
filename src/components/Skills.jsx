import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const ease = [0.16, 1, 0.3, 1]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 bg-void px-6 py-28 md:px-12 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-blood-text">03</span>
          <span className="h-px w-8 bg-iron" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-ash">SKILLS &amp; TOOLS</h2>
        </div>

        <div className="mt-14 flex flex-col gap-12 md:mt-20 md:gap-16">
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease }}
              className="flex flex-col gap-5 border-t border-iron/30 pt-8 md:flex-row md:items-baseline md:gap-12"
            >
              <div className="flex items-baseline gap-4 md:w-72 md:shrink-0">
                <span className="font-mono text-sm text-blood-text">{group.index}</span>
                <h3 className="font-display text-[10vw] leading-none text-bone sm:text-[6vw] md:text-[3vw]">
                  {group.label}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
