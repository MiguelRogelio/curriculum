import { siteTenure } from '../data/profile.ts'

const start = new Date(siteTenure.start)

/**
 * Rounded to the nearest whole year, the way a resume states tenure — inside a
 * few months of an anniversary, the round number is what a reader expects.
 */
function yearsSince(from: Date, to: Date) {
  const months =
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
  return Math.round(months / 12)
}

/**
 * The one number that carries the section, computed from the first day on site
 * so nobody has to remember to bump it. Set as a line of its own: it earns the
 * eye through type and colour, not through a border — the page has no other
 * boxes and should not grow one here.
 */
export function TenureHeadline() {
  const years = yearsSince(start, new Date())

  return (
    <span className="tenure-total">
      <span className="tenure-years">{years} years</span> {siteTenure.label}
    </span>
  )
}
