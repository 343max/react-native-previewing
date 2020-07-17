#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const argv = process.argv

function error(message) {
  console.error(`

       !!!!!!!
    ${message}
       !!!!!!!

  `)
  process.exit(1)
}

var data
if (argv.length === 3) {
  const tsPath = path.relative(process.cwd(), argv[2])

  const source = fs.readFileSync(tsPath, { encoding: 'utf-8' })

  const previewProvider = source.match(
    /^export const ([A-Za-z_0-9]+)\s*:\s*PreviewProvider/m
  )
  if (!previewProvider) {
    error('Could not find a PreviewProvider')
  }

  const call = previewProvider[1]

  data = `import { ${call} } from "./${tsPath}"

export const preview = {
  generator: ${call},
  path: "${tsPath}",
  generatorName: "${call}"
}`
} else if (argv.length === 2) {
  // no arguments, reset to app view

  data = 'export const preview = undefined\n'
}

if (data !== undefined) {
  fs.writeFileSync('preview_temp.js', data)
} else {
  error('incorrect usage!')
}
