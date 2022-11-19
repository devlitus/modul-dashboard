#!/usr/bin/env node
require('esbuild')
  .buildSync({
    logLevel: 'info',
    entryPoints: ['src/Dashboard.jsx'],
    outbase: 'src',
    bundle: true,
    minify: true,
    format: 'esm',
    jsx: 'automatic',
    outdir: 'dist'
  })
