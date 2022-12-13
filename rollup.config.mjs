import pkg from './package.json' assert { type: 'json' }
const banner = `
/**
 * @name ${pkg.name}
 * @version ${pkg.version}
 * @author ${pkg.author}
 * @license ${pkg.license}
 */
`.trim()

export default {
  input: 'src/index.js',
  external: ['fs', 'http', 'https', 'url'],
  output: [
    { banner, file: pkg.main, format: 'cjs' },
    { banner, file: pkg.module, format: 'es' }
  ]
}