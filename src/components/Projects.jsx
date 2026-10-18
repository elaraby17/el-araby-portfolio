import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-black">
      <div className="mx-auto max-w-[1500px] border-b border-iron/30 px-6 pb-10 pt-24 md:px-12 md:pt-32 lg:px-16">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-blood-text">04</span>
          <span className="h-px w-8 bg-iron" />
          <span className="font-mono text-xs tracking-[0.3em] text-ash">SELECTED WORK</span>
        </div>

        <h2 className="font-display mt-5 text-[13vw] leading-[0.9] text-bone sm:text-[10vw] md:text-[6vw]">
          PROJECTS
        </h2>

        <p className="mt-5 max-w-lg font-body text-sm font-light leading-relaxed text-ash md:text-base">
          Full-stack builds with Laravel, PHP, MySQL and React — ordering
          platforms, learning systems, and clinic management tools.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.index} project={project} />
      ))}
    </section>
  )
}
