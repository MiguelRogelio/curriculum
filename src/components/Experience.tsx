import { employers, roles } from '../data/profile.ts'
import { Present } from './Present.tsx'
import { Section } from './Section.tsx'

/**
 * One site, three names. Set as a chain rather than a joined string so the
 * company reads brighter than its dates and the arrows carry the takeaway:
 * these are renames, not job changes.
 */
const tenure = (
  <span className="tenure">
    {employers.map((employer) => (
      <span className="tenure-item" key={employer.name}>
        <span className="tenure-name">{employer.name}</span>
        <span className="tenure-span">
          {employer.span}
          {employer.live ? <Present /> : null}
        </span>
      </span>
    ))}
  </span>
)

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
            <p className={i === 0 ? 'entry-span entry-span--lead' : 'entry-span'}>
              {role.span}
              {role.live ? <Present /> : null}
            </p>
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
