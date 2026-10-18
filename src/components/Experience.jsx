import { motion } from 'framer-motion'
import { experience } from '../data/experience.js'

const ease = [0.16, 1, 0.3, 1]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-void px-6 py-28 md:px-12 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-blood-text">05</span>
          <span className="h-px w-8 bg-iron" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-ash">EXPERIENCE</h2>
        </div>

        <div className="mt-14 border-l border-iron/30 md:mt-20">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease }}
              className="relative flex flex-col gap-3 py-8 pl-6 md:flex-row md:items-baseline md:gap-12 md:py-12 md:pl-10"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full bg-blood-text md:top-14 ${
                  i === 0 ? '' : 'opacity-60'
                }`}
              />

              <span className="font-mono text-[11px] tracking-[0.25em] text-blood-text md:w-56 md:shrink-0">
                {item.era}
              </span>

              <div>
                <h3 className="font-body text-xl font-medium text-bone md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl font-body text-sm font-light leading-relaxed text-ash md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
