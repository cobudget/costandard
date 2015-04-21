# JavaScript Co-Standard Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

### One Semicolon And Comma for the Dark Lord on his dark throne

All the goodness of [feross/standard] with semicolons and dangling commas sprinkled on top.

## Install

```bash
npm install costandard
```

## Rules

Importantly:

- **semicolons**
- **dangling commas in multiline literals**
- Check [feross/standard] for the rest of the rules.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

TODO

## Usage

The easiest way to use JavaScript Co-Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `costandard` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install costandard -g
```

After you've done that you should be able to use the `costandard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ costandard
Error: Use JavaScript Co-Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### Editor plugins

TODO

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "costandard": "*"
    },
    "scripts": {
      "test": "costandard && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again! (unless it's about semicolons)


See [feross/standard] for more information.

[travis-image]: https://img.shields.io/travis/cobudget/costandard.svg?style=flat-square
[travis-url]: https://travis-ci.org/cobudget/costandard
[npm-image]: https://img.shields.io/npm/v/costandard.svg?style=flat-square
[npm-url]: https://npmjs.org/package/costandard
[downloads-image]: https://img.shields.io/npm/dm/costandard.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/costandard
[feross/standard]: https://github.com/feross/standard
