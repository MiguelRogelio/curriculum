import { languages } from '../data/profile.ts'
import { Section } from './Section.tsx'

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      {languages.map((entry) => (
        <article className="entry" key={entry.language}>
          <header className="entry-head">
            <p className="entry-org">{entry.language}</p>
            <p className="entry-context">{entry.level}</p>
          </header>
          <p className="lang-note">{entry.note}</p>
        </article>
      ))}
    </Section>
  )
}
