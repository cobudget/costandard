#!/usr/bin/env node

/**
 * Clones several projects that are known to follow "JavaScript Standard Style" and runs
 * the `standard` style checker to verify that it passes without warnings. This helps
 * ensure we don't accidentally introduce new style rules that cause previously "good"
 * code to start failing with new warnings! (And if we do, then that needs to be a MAJOR
 * VERSION BUMP.)
 */

var cp = require('child_process')
var extend = require('xtend')
var mkdirp = require('mkdirp')
var path = require('path')
var rimraf = require('rimraf')
var series = require('run-series')
var test = require('tape')

var TMP = path.join(__dirname, '..', 'tmp')
var COSTANDARD = path.join(__dirname, '..', 'bin', 'cmd.js')
var URLS = [
]

var MODULES = {}
URLS.forEach(function (url) {
  var name = /\/([^\/]+)\.git$/.exec(url)[1]
  MODULES[name] = url
})

test('clone repos from github', function (t) {
  t.plan(1)
  rimraf.sync(TMP)
  mkdirp.sync(TMP)

  series(Object.keys(MODULES).map(function (name) {
    var url = MODULES[name]
    return function (cb) {
      var args = [ 'clone', '--depth', 1, url, path.join(TMP, name) ]
      // TODO: Start `git` in a way that works on Windows – PR welcome!
      spawn('git', args, {}, cb)
    }
  }), function (err) {
    if (err) throw err
    t.pass('cloned repos')
  })
})

test('lint repos', function (t) {
  t.plan(URLS.length)
  series(Object.keys(MODULES).map(function (name) {
    return function (cb) {
      var cwd = path.join(TMP, name)
      console.log('!!!!!!!!!' + cwd)
      spawn(COSTANDARD, [], { cwd: cwd }, function (err) {
        t.error(err, name)
        cb(null)
      })
    }
  }))
})

function spawn (command, args, opts, cb) {
  var child = cp.spawn(command, args, extend({ stdio: 'inherit' }, opts))
  child.on('error', cb)
  child.on('close', function (code) {
    if (code !== 0) cb(new Error('non-zero exit code: ' + code))
    else cb(null)
  })
  return child
}
