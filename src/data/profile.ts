/**
 * Every word rendered on the page comes from this file.
 * Edit here; the components never hardcode copy.
 */

export const profile = {
  name: 'Miguel Rogelio Rodriguez Federico',
  role: 'Software Developer',
  company: 'AirLife',

  /**
   * Centered line under the name, separated by bullets.
   * No email or phone here on purpose — the page is public and indexable.
   */
  contact: ['AirLife', 'Medical device manufacturing', 'Aug 2016 – Present'],

  summary:
    'Software developer at AirLife, a medical device manufacturer, building the web and industrial IoT systems the plant runs on. Ten years on the same site — first labeling production, then quality, now software — so I know what a production number means before I query it. I work in React, TypeScript, Node.js and SQL Server, and I read live data off Allen-Bradley PLCs without touching plant operation.',
} as const

/** Same site, three corporate identities. Rendered as one line under Experience. */
export const employers = [
  { name: 'Halyard Health', span: '2016–2018' },
  { name: 'Avanos Medical', span: '2018–2023' },
  { name: 'AirLife', span: '2023–present' },
] as const

/**
 * Skills as inline rows: a category label followed by items separated by bullets.
 * Icon keys resolve in src/components/TechIcon.tsx.
 */
export type SkillRow = {
  label: string
  items: { label: string; icon: string }[]
}

export const skillRows: SkillRow[] = [
  {
    label: 'Frontend',
    items: [
      { label: 'React', icon: 'react' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'Vite', icon: 'vite' },
      { label: 'HTML', icon: 'html' },
      { label: 'CSS', icon: 'css' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { label: 'Node.js', icon: 'node' },
      { label: 'Express', icon: 'express' },
      { label: 'REST APIs', icon: 'rest' },
      { label: 'Socket.IO', icon: 'socketio' },
      { label: 'JWT', icon: 'jwt' },
      { label: 'bcrypt', icon: 'bcrypt' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { label: 'SQL Server', icon: 'sqlserver' },
      { label: 'T-SQL', icon: 'tsql' },
      { label: 'SSMS', icon: 'ssms' },
    ],
  },
  {
    label: 'Power Platform',
    items: [
      { label: 'Power Apps', icon: 'powerapps' },
      { label: 'Power Fx', icon: 'powerfx' },
      { label: 'SharePoint', icon: 'sharepoint' },
    ],
  },
  {
    label: 'Industrial IoT',
    items: [
      { label: 'EtherNet/IP', icon: 'ethernetip' },
      { label: 'CompactLogix', icon: 'plc' },
      { label: 'ControlLogix', icon: 'plc' },
    ],
  },
  {
    label: 'DevOps & tooling',
    items: [
      { label: 'Git', icon: 'git' },
      { label: 'GitHub', icon: 'github' },
      { label: 'PM2', icon: 'pm2' },
      { label: 'pnpm', icon: 'pnpm' },
    ],
  },
  {
    label: 'AI-assisted',
    items: [
      { label: 'Claude Code', icon: 'claude' },
      { label: 'GitHub Copilot', icon: 'copilot' },
    ],
  },
  {
    label: 'Legacy',
    items: [
      { label: 'VB.NET', icon: 'dotnet' },
      { label: 'Visual Studio', icon: 'visualstudio' },
    ],
  },
  {
    label: 'Security practices',
    items: [
      { label: 'Authentication & authorization (JWT, bcrypt)', icon: 'shield' },
      { label: 'OT-safe read-only PLC integration', icon: 'plc' },
    ],
  },
]

export type Project = {
  id: string
  name: string
  kind: string
  stack: string
  points: string[]
}

/**
 * Systems built, described at the technical level: architecture, decisions,
 * constraints. Ongoing duties belong in `roles` instead — keeping the two at
 * different altitudes is what stops the sections repeating each other.
 */
export const projects: Project[] = [
  {
    id: 'assetscore',
    name: 'AssetsCore',
    kind: 'Fixed-asset management platform',
    stack: 'React · TypeScript · Express · SQL Server',
    points: [
      'Designed, built and deployed the platform that tracks fixed assets across plants in Mexico and the United States.',
      'JWT and bcrypt authentication with role-based access control.',
      'Normalized SQL Server schema designed from the ground up; self-hosted on the corporate LAN with PM2.',
    ],
  },
  {
    id: 'iot-dashboard',
    name: 'Production Floor Dashboard',
    kind: 'Real-time industrial IoT',
    stack: 'Node.js · EtherNet/IP · Socket.IO · React',
    points: [
      'Reads live data from Allen-Bradley CompactLogix and ControlLogix PLCs over EtherNet/IP in Node.js.',
      'Read-only against the controllers, so plant operation is never affected.',
      'Streams hourly, shift and monthly production metrics over Socket.IO to a React and Recharts frontend, with downtime recorded in SQL Server.',
    ],
  },
  {
    id: 'power-platform',
    name: 'Power Platform Apps',
    kind: 'Internal tooling',
    stack: 'Power Apps · Power Fx · SharePoint',
    points: [
      'Canvas apps for plant workflows that needed to ship in days rather than months.',
      'Power Fx logic backed by SharePoint list integrations.',
    ],
  },
]

export type Role = {
  title: string
  span: string
  employer: string
  context: string
  points: string[]
}

export const roles: Role[] = [
  {
    employer: 'AirLife',
    context: 'Temporary assignment',
    title: 'Software Developer',
    span: 'May 2026 – Present',
    points: [
      'Currently developing and maintaining AssetsCore, a fixed-asset management platform I designed, built, and deployed end to end (React, TypeScript, Express, SQL Server) — tracking assets across Mexico and U.S. plants with JWT/bcrypt authentication and role-based access control, self-hosted on the corporate LAN with PM2.',
      "Own the plant's real-time production monitoring, from acquiring controller data on the floor to the hourly, shift and monthly numbers the teams work from.",
      'Build and support the internal Power Platform apps plant teams use day to day.',
      'Maintain the legacy VB.NET applications the plant depends on, migrating their functionality onto the modern web stack one piece at a time.',
      'Administer the development database environments, including migration from SQL Server.',
    ],
  },
  {
    employer: 'Avanos Medical → AirLife',
    context: 'Production lines',
    title: 'Quality Inspector / Quality Auditor',
    span: '2019 – 2026',
    points: [
      "Supported the plant's DPM and DHR systems, written in Visual Basic, including their migration. This was the first hands-on software experience that led to the current developer assignment.",
      // TODO(miguel): replace this line with your actual inspection and audit duties —
      // in-process inspection, DHR review, label verification, line audits, whichever applied.
      'Performed quality inspections and audits on production lines in a regulated medical device environment.',
    ],
  },
  {
    employer: 'Halyard Health → Avanos Medical',
    context: 'Labeling area',
    title: 'Production Operator',
    span: 'Aug 2016 – 2019',
    points: [
      'Hands-on manufacturing experience in a regulated medical device labeling environment.',
    ],
  },
]

export const education = {
  school: 'Universidad Estatal de Sonora (UES)',
  degree: 'Lic. Administrative Computer Systems',
  note: 'Licenciatura en Sistemas Computacionales Administrativos',
} as const
