import { buildSync } from 'esbuild'
buildSync({
  logLevel: 'info',
  entryPoints: ['src/Header.jsx'],
  outbase: 'src',
  bundle: true,
  minify: true,
  format: 'esm',
  jsx: 'automatic',
  outdir: 'dist'
})
