import { profile } from '../data/profile.ts'

export function Footer() {
  return (
    <footer className="foot">
      <p className="foot-meta">
        {profile.name} · {profile.role} · {profile.company}
      </p>
    </footer>
  )
}
