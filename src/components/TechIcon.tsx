import type { ReactNode } from 'react'
import {
  SiClaude,
  SiCss,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPm2,
  SiReact,
  SiSocketdotio,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

type Glyph = (props: { className?: string }) => ReactNode

/**
 * Microsoft pulled its marks from Simple Icons, so SQL Server, SSMS, Power Apps,
 * Power Fx, SharePoint and Visual Studio have no brand icon available. Rather than
 * draw inaccurate look-alikes, these are neutral geometric glyphs that say what the
 * thing does. Same for bcrypt, EtherNet/IP and the PLCs, which have no mark at all.
 */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function Svg({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      {children}
    </svg>
  )
}

/** Database cylinder. */
const GlyphDatabase: Glyph = ({ className }) => (
  <Svg className={className}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
    <path d="M5 5.5v13c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-13" />
    <path d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
  </Svg>
)

/** Cylinder with a query prompt: T-SQL. */
const GlyphQuery: Glyph = ({ className }) => (
  <Svg className={className}>
    <ellipse cx="12" cy="5" rx="7" ry="2.6" />
    <path d="M5 5v6.5c0 1.44 3.13 2.6 7 2.6" />
    <path d="M19 5v4" />
    <path d="m8.5 17.5 2.2 2.2-2.2 2.2" />
    <path d="M13 21.7h4.5" />
  </Svg>
)

/** Management studio: a tool window over a store. */
const GlyphStudio: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="2.5" y="3.5" width="19" height="14" rx="1.8" />
    <path d="M2.5 8h19" />
    <path d="M6 5.75h.01M8.5 5.75h.01" />
    <ellipse cx="12" cy="11.6" rx="4" ry="1.4" />
    <path d="M8 11.6v2.6c0 .78 1.79 1.4 4 1.4s4-.62 4-1.4v-2.6" />
    <path d="M8 20.5h8" />
  </Svg>
)

/** Canvas app: a frame with a run control. */
const GlyphCanvasApp: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="3" y="2.5" width="18" height="19" rx="2.4" />
    <path d="M3 7h18" />
    <path d="m10.5 11.5 4.5 2.75-4.5 2.75z" />
  </Svg>
)

/** Power Fx: a formula. */
const GlyphFormula: Glyph = ({ className }) => (
  <Svg className={className}>
    <path d="M13.5 4.2c-1.9-.7-3.1.2-3.4 2.1L8 19.5c-.3 1.9-1.5 2.8-3.4 2.1" />
    <path d="M7 9.5h6" />
    <path d="m16 10 5 6M21 10l-5 6" />
  </Svg>
)

/** SharePoint list: rows of records. */
const GlyphList: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="2.5" y="4" width="19" height="16" rx="1.8" />
    <path d="M2.5 9h19M9 9v11" />
    <path d="M12 12.5h6.5M12 16h4" />
  </Svg>
)

/** EtherNet/IP: nodes on an industrial network. */
const GlyphNetwork: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="9" y="2.5" width="6" height="4.5" rx="1" />
    <rect x="2" y="16" width="6" height="4.5" rx="1" />
    <rect x="16" y="16" width="6" height="4.5" rx="1" />
    <path d="M12 7v4.5M5 16v-2.5h14V16" />
  </Svg>
)

/** PLC: a DIN-rail controller with terminals. */
const GlyphController: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="4" y="3" width="16" height="18" rx="1.6" />
    <path d="M7.5 6.5h9" />
    <path d="M7.5 10h5" />
    <path d="M8 14.5h.01M11 14.5h.01M14 14.5h.01M8 18h.01M11 18h.01M14 18h.01" />
  </Svg>
)

/** bcrypt: a salted hash behind a lock. */
const GlyphHash: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    <path d="M10 13.5v4M14 13.5v4M8.5 15h7M8.5 16.5h7" />
  </Svg>
)

/** Security practices: a shield with a check. */
const GlyphShield: Glyph = ({ className }) => (
  <Svg className={className}>
    <path d="M12 2.5 4.5 5.4v6.1c0 4.6 3.1 8.5 7.5 10 4.4-1.5 7.5-5.4 7.5-10V5.4z" />
    <path d="m8.75 11.75 2.4 2.4 4.1-4.6" />
  </Svg>
)

/** Visual Studio: an IDE window. */
const GlyphIde: Glyph = ({ className }) => (
  <Svg className={className}>
    <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
    <path d="M2.5 8h19" />
    <path d="m9 11.5-2.5 3L9 17.5" />
    <path d="m15 11.5 2.5 3L15 17.5" />
    <path d="m12.75 11-1.5 7" />
  </Svg>
)

const icons: Record<string, Glyph> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  vite: SiVite,
  html: SiHtml5,
  css: SiCss,
  node: SiNodedotjs,
  express: SiExpress,
  rest: SiOpenapiinitiative,
  socketio: SiSocketdotio,
  jwt: SiJsonwebtokens,
  git: SiGit,
  github: SiGithub,
  pm2: SiPm2,
  claude: SiClaude,
  copilot: SiGithubcopilot,
  dotnet: SiDotnet,

  bcrypt: GlyphHash,
  sqlserver: GlyphDatabase,
  tsql: GlyphQuery,
  ssms: GlyphStudio,
  powerapps: GlyphCanvasApp,
  powerfx: GlyphFormula,
  sharepoint: GlyphList,
  ethernetip: GlyphNetwork,
  plc: GlyphController,
  shield: GlyphShield,
  visualstudio: GlyphIde,
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name]
  if (!Icon) return null
  return <Icon className={className} />
}
