import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function ProjectCard({ project }) {
  const fromLeft = project.direction === 'left'
  const hasLink = project.link && project.link !== '#'

  return (
    <article className="mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-12 px-6 py-20 md:px-12 md:py-28 lg:flex-row lg:gap-20 lg:px-16">
      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease }}
        className={`w-full max-w-xl lg:w-[40%] ${fromLeft ? '' : 'lg:order-2'}`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.25em] text-blood-text">
            {project.index}
          </span>
          <span className="h-px w-6 bg-iron" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            {project.subtitle}
          </span>
        </div>

        <h3 className="font-display mt-4 text-[10vw] leading-[0.92] text-bone sm:text-[6.5vw] lg:text-[3.4vw]">
          {project.title}
        </h3>

        <p className="mt-5 max-w-md font-body text-sm font-light leading-relaxed text-ash md:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {hasLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-blood-bright pb-1 font-mono text-xs tracking-[0.2em] text-bone transition-colors duration-300 hover:border-blood-text hover:text-blood-text"
          >
            VIEW LIVE SITE
            <span aria-hidden="true">→</span>
          </a>
        )}
      </motion.div>

      {/* Visual column */}
      <motion.div
        data-cursor="view"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className={`group w-full max-w-2xl lg:w-[55%] ${fromLeft ? '' : 'lg:order-1'}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-iron/40 bg-panel">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title} — ${project.subtitle.toLowerCase()}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Scrim keeps the corner marks legible over any screenshot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/60 via-transparent to-abyss/20"
          />

          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute left-4 top-2 text-5xl leading-none text-bone/15 md:text-6xl"
          >
            {project.index}
          </span>

          {hasLink && (
            <span className="pointer-events-none absolute bottom-3 right-3 border border-bone/20 bg-abyss/70 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-ash">
              LIVE
            </span>
          )}
        </div>
      </motion.div>
    </article>
  )
}
