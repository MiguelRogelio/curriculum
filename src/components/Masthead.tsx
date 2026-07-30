import { profile } from '../data/profile.ts'

/**
 * Light drifting behind a faint grid. Pure CSS: three blurred radial sources on
 * long, offset loops, so it animates transform only and never touches layout.
 * Shared with the footer, which flips the fade via the `aurora--foot` modifier.
 */
export function AuroraField({ variant }: { variant?: 'foot' }) {
  return (
    <div className={variant === 'foot' ? 'aurora aurora--foot' : 'aurora'}>
      <div className="aurora-blob aurora-blob--royal" />
      <div className="aurora-blob aurora-blob--azure" />
      <div className="aurora-blob aurora-blob--indigo" />
      <div className="aurora-grid" />
      <div className="aurora-grain" />
      <div className="aurora-fade" />
    </div>
  )
}

export function Masthead() {
  return (
    <header className="mast">
      <AuroraField />

      <div className="wrap">
        <h1 className="mast-name">{profile.name}</h1>
        <p className="mast-role">{profile.role}</p>

        <ul className="mast-contact">
          {profile.contact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}
