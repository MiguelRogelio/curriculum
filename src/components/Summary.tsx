import { profile } from '../data/profile.ts'
import { Section } from './Section.tsx'

export function Summary() {
  return (
    <Section id="summary" title="Summary">
      <p className="prose">{profile.summary}</p>
    </Section>
  )
}
