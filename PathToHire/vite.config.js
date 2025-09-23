import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,tsx,js,ts}",
  })],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(import.meta.env.MODE || 'development'),
    'process.env.REACT_APP_BASE_URL': JSON.stringify(import.meta.env.VITE_REACT_APP_BASE_URL || ''),
  },
})
