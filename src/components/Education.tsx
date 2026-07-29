import { education } from '../data/profile.ts'
import { Section } from './Section.tsx'

export function Education() {
  return (
    <Section id="education" title="Education">
      <article className="entry">
        <header className="entry-head">
          <p className="entry-org">{education.school}</p>
          <h3 className="entry-title">{education.degree}</h3>
        </header>
        <p className="edu-note">{education.note}</p>
      </article>
    </Section>
  )
}
