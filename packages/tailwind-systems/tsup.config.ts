import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  external: ['tailwindcss'],
  format: ['cjs', 'esm'],
})
