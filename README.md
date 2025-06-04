# mbstring

JavaScript library offering methods for managing character chains (string)

## Installation

```bash
npm install --save mbstring
```

Or

```bash
yarn add mbstring
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

### mbstring.lcFirst(str: string)

Lowercase the first character of `str`.

```js
mbstring.lcFirst("Peniel");
// peniel
```

### mbstring.after(subject: string, search: string)

Return the substring after the first occurrence of `search` in `subject`.

```js
mbstring.after("This is my name", "This");
// " is my name"
```

### mbstring.afterLast(subject: string, search: string)

Return everything after the last occurrence of `search`.

```js
mbstring.afterLast("My name is wifi, your name is bil", "is");
// " bil"
```

### mbstring.before(subject: string, search: string)

Get the portion of `subject` before `search`.

```js
mbstring.before("This is my name", "my name");
// "This is "
```

### mbstring.beforeLast(subject: string, search: string)

Get the portion of `subject` before the last occurrence of `search`.

```js
mbstring.beforeLast("This is my name", "is");
// "This "
```

### mbstring.between(subject: string, from: string, to: string)

Get the portion of `subject` between `from` and `to`.

```js
mbstring.between("This is my name", "This", "name");
// " is my "
```

### mbstring.betweenFirst(subject: string, from: string, to: string)

Return the smallest possible portion of `subject` between `from` and `to`.

```js
mbstring.betweenFirst("[a] bc [d]", "[", "]");
// "a"
```

### mbstring.camel(value: string)

Convert a string to camelCase.

```js
mbstring.camel("foo_bar");
// "fooBar"
```

### mbstring.snake(value: string, delimiter?: string)

Convert a string to snake_case.

```js
mbstring.snake("fooBar");
// "foo_bar"
```

### mbstring.kebab(value: string)

Convert a string to kebab-case.

```js
mbstring.kebab("fooBar");
// "foo-bar"
```

### mbstring.contains(subject: string, search: string, ignoreCase?: boolean)

Check if `subject` contains `search`.

```js
mbstring.contains("This is my name", "my");
// true
```

### mbstring.containsAll(subject: string, words: string[], ignoreCase?: boolean)

Check if `subject` contains all values from `words`.

```js
mbstring.containsAll("This is my name", ["my", "name"]);
// true
```

### mbstring.endsWith(subject: string, search: string)

Determine if `subject` ends with `search`.

```js
mbstring.endsWith("This is my name", "name");
// true
```

### mbstring.isJson(value: string)

Determine if a string is valid JSON.

```js
mbstring.isJson('{"name":"foo"}');
// true
```

### mbstring.length(value: string)

Return the length of `value`.

```js
mbstring.length("Peniel");
// 6
```

### mbstring.limit(value: string, limit: number, end?: string)

Limit a string to `limit` characters, appending `end` if truncated.

```js
mbstring.limit("Peniel DIALUNDAMA", 12);
// "Peniel DIALU..."
```

### mbstring.lower(value: string)

Convert a string to lower case.

```js
mbstring.lower("Peniel");
// "peniel"
```

### mbstring.upper(value: string)

Convert a string to upper case.

```js
mbstring.upper("Peniel");
// "PENIEL"
```

### mbstring.random(length: number)

Generate a random alpha‑numeric string of the given `length`.

```js
mbstring.random(5);
// e.g. "a1b2c"
```

### mbstring.wrap(value: string, before: string, after?: string)

Wrap `value` with the given strings.

```js
mbstring.wrap("Peniel", "Mr. ", " Wifi");
// "Mr. Peniel Wifi"
```

## Development

### Build

Run the TypeScript compiler to generate the `lib` folder:

```bash
npm run build
```

### Test

Execute all unit tests:

```bash
npm test
```