import { skillRows } from '../data/profile.ts'
import { Section } from './Section.tsx'
import { TechIcon } from './TechIcon.tsx'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillRows.map((row) => (
          <div className="skill-row" key={row.label}>
            <p className="skill-label">{row.label}</p>
            <ul className="skill-items">
              {row.items.map((item) => (
                <li className="skill-item" key={`${row.label}-${item.label}`}>
                  <TechIcon name={item.icon} className="skill-icon" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
