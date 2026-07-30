import { useEffect, useState } from 'react'

/**
 * Built once — constructing a formatter per tick is wasteful. Pinned to en-US
 * because the document is written in English; the date should not switch
 * language depending on who opens the page.
 */
const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

/** A minute is plenty: the only change worth catching is midnight. */
function useToday() {
  const [today, setToday] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setToday(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return today
}

/**
 * "Present" on a resume is a dead word. Here it is the reader's own date, taken
 * from their machine — so the page never goes stale the way a hardcoded month
 * does, and no server is involved.
 */
export function Present() {
  const today = useToday()

  return (
    <span className="present">
      <span className="present-dot" aria-hidden="true" />
      Present
      <time className="present-date" dateTime={today.toISOString().slice(0, 10)}>
        {dateFormat.format(today)}
      </time>
    </span>
  )
}
