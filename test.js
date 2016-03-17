var cp = require('child_process')
var path = require('path')
var assert = require('assert')

var opts = {encoding: 'utf8'}
assert.equal(cp.execSync('./bin.js resolve-from', opts), path.resolve('./node_modules/resolve-from/index.js') + '\n')
assert.equal(cp.execSync('./bin.js non-existent-module', opts), '')
assert.equal(cp.execSync('./bin.js ./bin.js', opts), path.resolve('./bin.js') + '\n')
