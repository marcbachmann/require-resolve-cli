#!/usr/bin/env node
var resolve = require('resolve-from')
var path = process.argv[2]

if (path) {
  var file = resolve(process.cwd(), process.argv[2])
  if (file) process.stdout.write(file + '\n')
  return
}

console.log([
  'Usage: resolve [path]',
  '',
  'Where [path] is either:',
  '  - a node module name',
  '  - a directory that contains a package.json or an index.js',
  '  - a file'
].join('\n'))
