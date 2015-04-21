var path = require('path')
var pkg = require('./package.json')

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'costandard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Cobudget-style Javascript',
  eslintConfig: {
      configFile: path.join(__dirname, 'eslintrc.json')
  }
}
