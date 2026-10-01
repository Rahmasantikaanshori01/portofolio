import { projects } from '@/data/siteData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-eyebrow">Work</span>
          <h2 className="section-title section-title-lg">
            Selected Projects
          </h2>
          <p className="section-desc">
            A collection of things I&apos;ve built while learning, experimenting, and exploring technology.
          </p>
        </div>

        {/* Projects */}
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
