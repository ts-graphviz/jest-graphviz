[![GitHub Action](https://github.com/kamiazya/jest-graphviz/workflows/Linux/badge.svg)](https://github.com/kamiazya/jest-graphviz/actions?workflow=Linux) [![npm version](https://badge.fury.io/js/jest-graphviz.svg)](https://badge.fury.io/js/jest-graphviz) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# jest-graphviz

A plugin for [jest](https://jestjs.io/) that supports graphviz integration.

## Installation

The plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/jest-graphviz.png)](https://nodei.co/npm/jest-graphviz/)

### yarn

```bash
yarn add -D jest-graphviz
```

### npm

```bash
npm install --save-dev jest-graphviz
```

### Requirement

This extension requires Graphviz.
If you don't have it installed, install it here[here](https://graphviz.gitlab.io/download/).

## Usage

### toBeValidDot

```typescript
describe('toBeValidDot test', () => {
  it('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toBeValidDot();
  });

  it('invalid dot', () => {
    const dot = 'invalid';
    expect(dot).not.toBeValidDot();
  });
});

```

## License

This software is released under the MIT License, see LICENSE.

## Author

[kamiazya(Yuki Yamazaki)](https://github.com/kamiazya)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5VDNO)
