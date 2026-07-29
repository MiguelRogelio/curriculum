import { projects } from '../data/profile.ts'
import { Section } from './Section.tsx'

export function Work() {
  return (
    <Section id="work" title="Selected Projects">
      {projects.map((project) => (
        <article className="entry" key={project.id}>
          <header className="entry-head">
            <p className="entry-org">{project.kind}</p>
            <p className="entry-context">{project.stack}</p>
            <h3 className="entry-title">{project.name}</h3>
          </header>

          <ul className="entry-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}
