import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },

  plugins: [react(), sentryVitePlugin({
    org: "jsm-4x",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})