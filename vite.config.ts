import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'timertasks',
      fileName:'index'
    },
  },
  plugins: [
    dts({
        outDir: './dist',
    }),
]
})
