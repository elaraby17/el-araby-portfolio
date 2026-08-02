import { motion } from 'framer-motion'
import { experience } from '../data/experience.js'

const ease = [0.16, 1, 0.3, 1]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-void px-6 py-32 md:px-12 md:py-40 lg:px-16"
    >
      <span className="font-mono text-xs tracking-[0.3em] text-ash">EXPERIENCE</span>

      <div className="mt-12 divide-y divide-iron/30 md:mt-16">
        {experience.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:gap-10 md:py-12"
          >
            <span className="font-display text-[9vw] leading-none text-blood-bright sm:text-[5vw] md:w-64 md:shrink-0 md:text-[2.2vw]">
              {item.era}
            </span>
            <div>
              <h4 className="font-body text-xl font-medium text-bone md:text-2xl">
                {item.title}
              </h4>
              <p className="mt-2 max-w-xl font-body text-sm font-light text-ash md:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
