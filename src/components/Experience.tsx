import { employers, roles } from '../data/profile.ts'
import { Section } from './Section.tsx'

const tenure = employers.map((e) => `${e.name} ${e.span}`).join('  ·  ')

export function Experience() {
  return (
    <Section id="experience" title="Experience" note={tenure}>
      {roles.map((role, i) => (
        <article className="entry" key={role.title}>
          <header className="entry-head">
            <p className="entry-org">{role.employer}</p>
            <p className="entry-context">{role.context}</p>
            <h3 className="entry-title">{role.title}</h3>
            {/* The current role gets the accent; the rest stay quiet. */}
            <p className={i === 0 ? 'entry-span entry-span--lead' : 'entry-span'}>{role.span}</p>
          </header>

          <ul className="entry-points">
            {role.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}
