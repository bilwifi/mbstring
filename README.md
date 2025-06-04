# mbstring

![Build Status](https://github.com/bolenge/mbstring/actions/workflows/test.yml/badge.svg)

TypeScript/Node.js library offering utility functions for working with character strings.

The goal of this package is to provide handy string manipulation helpers that can be consumed in any Node.js or TypeScript project.

## Installation

```bash
npm install --save mbstring
```

Or

```bash
yarn add mbstring
```

## Available npm scripts

- `npm run build` – compile the TypeScript sources to JavaScript in `lib/`
- `npm test` – run the Jest test suite
- `npm run doc` – generate API documentation into the `docs/` folder
- `npm run release` – create a new release using `standard-version`

## Folder structure

- `src/` – TypeScript sources
- `lib/` – compiled JavaScript output (created after running the build script)
- `docs/` – generated Typedoc documentation
- `.github/` – GitHub Actions workflows

## Documentation

Generated API documentation is available in the [`docs/`](docs/) directory and is also hosted on [GitHub Pages](https://bolenge.github.io/mbstring/).

## Example usage

```ts
import { ucFirst } from 'mbstring';

console.log(ucFirst('bolenge')); // Bolenge
```

## API

```js
var mbstring = require("mbstring");

```

### mbstring.ucFirst(str: string)

Allow to capitalize the first character of string

```js
var text = "bolenge";
console.log(mbstring.ucFirst(text)); // Bolenge
```
