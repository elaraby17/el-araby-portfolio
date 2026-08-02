import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function ProjectCard({ project }) {
  const fromLeft = project.direction === 'left'

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center gap-10 px-6 py-24 md:min-h-[120vh] md:flex-row md:gap-16 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease }}
        className={`w-full max-w-xl md:w-1/2 ${fromLeft ? '' : 'md:order-2'}`}
      >
        <span className="font-mono text-xs tracking-[0.25em] text-blood-bright">
          PROJECT {project.index}
        </span>

        <h3 className="font-display mt-3 text-[11vw] leading-[0.9] text-bone sm:text-[7vw] md:text-[4vw]">
          {project.title}
        </h3>

        <p className="mt-2 font-mono text-xs tracking-[0.15em] text-ash">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-md font-body text-base font-light text-bone/80 md:text-lg">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="border border-iron/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-ash"
            >
              {t}
            </li>
          ))}
        </ul>

        <button
          data-cursor="link"
          className="mt-8 font-mono text-xs tracking-[0.2em] text-bone underline decoration-blood-bright decoration-2 underline-offset-4"
        >
          VIEW CASE STUDY →
        </button>
      </motion.div>

      <motion.div
        data-cursor="view"
        initial={{ opacity: 0, x: fromLeft ? 80 : -80, scale: 1.15 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease }}
        className={`relative flex aspect-[4/3] w-full max-w-xl items-center justify-center border border-iron/50 bg-panel md:w-1/2 ${fromLeft ? 'md:order-1' : ''}`}
      >
        <span className="font-display text-[10vw] text-iron/60 md:text-[5vw]">
          {project.index}
        </span>
        <span className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.15em] text-iron">
          SCREENSHOT PREVIEW
        </span>
      </motion.div>
    </div>
  )
}
