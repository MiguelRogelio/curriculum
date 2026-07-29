import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project site from /<repo>/, so the asset base has to match
// or every bundle URL 404s. In Actions, GITHUB_REPOSITORY is "owner/repo".
// A user/org site (owner.github.io) is served from the root instead.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repo?.endsWith('.github.io') ?? false
const base = process.env.VITE_BASE ?? (repo && !isUserSite ? `/${repo}/` : '/')

export default defineConfig({
  base,
  plugins: [react()],
  // Pinned off the default 5173 so this never fights the other Vite app for a port.
  // strictPort makes a collision fail loudly instead of silently moving.
  server: {
    port: 5180,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 4180,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
