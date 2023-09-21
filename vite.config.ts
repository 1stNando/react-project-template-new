import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), checker({ typescript: true })],
// })
export default defineConfig((configEnv) => ({
  plugins: [
    checker({ typescript: true }),
    linterPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { cache: false, formatter: 'visualstudio' },
        }),
        new TypeScriptLinter(),
      ],
    }),
  ],
}))
