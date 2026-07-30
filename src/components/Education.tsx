import { education } from '../data/profile.ts'
import { Section } from './Section.tsx'

export function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((entry) => (
        <article className="entry" key={entry.degree}>
          <header className="entry-head">
            <p className="entry-org">{entry.school}</p>
            <h3 className="entry-title">{entry.degree}</h3>
          </header>
          <p className="edu-note">{entry.note}</p>
        </article>
      ))}
    </Section>
  )
}
