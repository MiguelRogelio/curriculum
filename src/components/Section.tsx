import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  note?: ReactNode
  children: ReactNode
}

/** Centered heading over a full-measure rule, the way a resume sets a section. */
export function Section({ id, title, note, children }: SectionProps) {
  return (
    <section className="section wrap" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section-title" id={`${id}-title`}>
        {title}
      </h2>
      {note ? <p className="section-note">{note}</p> : null}
      <div className="section-body">{children}</div>
    </section>
  )
}
