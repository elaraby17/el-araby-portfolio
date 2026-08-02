import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="work" className="relative bg-black">
      <div className="border-b border-iron/30 px-6 pt-24 md:px-12 lg:px-16">
        <span className="font-mono text-xs tracking-[0.3em] text-ash">SELECTED WORK</span>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.index} project={project} />
      ))}
    </section>
  )
}
