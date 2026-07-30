import { profile } from '../data/profile.ts'
import { AuroraField } from './Masthead.tsx'

export function Footer() {
  return (
    <footer className="foot">
      <AuroraField variant="foot" />
      <p className="foot-meta">
        {profile.name} · {profile.role} · {profile.company}
      </p>
    </footer>
  )
}
