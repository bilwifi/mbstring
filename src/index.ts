/**
 * Allow to capitalize the first character of string param
 * @param {string} str
 * @returns string
 * @example
 * ucFirst('peniel') // 'Peniel'
 */
export const ucFirst = (str: string): string => {
  return str[0].toUpperCase() + str.substring(1);
};

/**
 * Convert the first character of string to lowercase:
 * @param {string} str
 * @returns {string}
 * @example
 * lcFirst('Peniel') // 'peniel'
 */
export const lcFirst = (str: string): string => {
  return str[0].toLowerCase() + str.substring(1);
};

/**
 * Return the remainder of a string after the first occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 * @example
 * after('hello world', 'hello') // ' world'
 */
export const after = (subject: string, search: string): string => {
  if (search === "") return subject;
  return subject.indexOf(search) !== -1
    ? subject.substring(subject.indexOf(search) + search.length)
    : subject;
};

/**
 * Return the remainder of a string after the last occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 * @example
 * afterLast('a/b/c', '/') // 'c'
 */
export const afterLast = (subject: string, search: string): string => {
  return search === "" ? subject : subject.split(search).reverse()[0];
};

/**
 * Get the portion of a string before the first occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 * @example
 * before('hello world', ' world') // 'hello'
 */
export const before = (subject: string, search: string): string => {
  return search === "" ? subject : subject.split(search)[0];
};

/**
 * Get the portion of a string before the last occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 * @example
 * beforeLast('a/b/c', '/') // 'a/b'
 */

export const beforeLast = (subject: string, search: string): string => {
  return search === ""
    ? subject
    : subject.substring(0, subject.lastIndexOf(search));
};

/**
 * Get the portion of a string between two given values.
 *
 * @param  {string}  subject
 * @param  {string}  from
 * @param  {string}  to
 * @returns {string}
 * @example
 * between('This is my name', 'This', 'name') // ' is my '
 */
export const between = (subject: string, from: string, to: string): string => {
  if (from === "" || to === "") return subject;
  return beforeLast(after(subject, from), to);
};

/**
 * Get the smallest possible portion of a string between two given values.
 *
 * @param  {string}  subject
 * @param  {string}  from
 * @param  {string}  to
 * @returns {string}
 * @example
 * betweenFirst('[a] bc [d]', '[', ']') // 'a'
 */

export const betweenFirst = (
  subject: string,
  from: string,
  to: string
): string => {
  if (from === "" || to === "") return subject;
  return before(after(subject, from), to);
};

/**
 * Convert a value to camel case.
 *
 * @param  {string}  value
 * @returns {string}
 * @example
 * camel('foo_bar') // 'fooBar'
 */

export const camel = (value: string): string => {
  return lcFirst((" " + value)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    }));
};

/**
 * Convert a string to snake case.
 *
 * @param  {string}  value
 * @param  {string}  delimiter
 * @returns {string}
 * @example
 * snake('fooBar') // 'foo_bar'
 */

export const snake = (value: string, delimiter: string = "_"): string => {
  const found =
    value.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    ) || [];
  return found.map((x) => x.toLowerCase()).join(delimiter);
};

/**
 * Convert a string to kebab case.
 *
 * @param  {string}  $value
 * @returns {string}
 * @example
 * kebab('fooBar') // 'foo-bar'
 */

export const kebab = (value: string): string => {
  return snake(value, "-");
};

/**
 * Determine if a given string contains a given substring.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @param  {bool}  ignoreCase
 * @returns {bool}
 * @example
 * contains('This is my name', 'my') // true
 */

export const contains = (
  subject: string,
  search: string,
  ignoreCase: boolean = false
): boolean => {
  if (ignoreCase) return subject.toLowerCase().includes(search.toLowerCase());
  return subject.includes(search);
};

/**
 * Determine if a given string contains all array values.
 *
 * @param  {string}  subject
 * @param  {array}  words
 * @param  {bool}  ignoreCase
 * @returns {bool}
 * @example
 * containsAll('This is my name', ['my', 'name']) // true
 */

export const containsAll = (
  subject: string,
  words: Array<string>,
  ignoreCase: boolean = false
): boolean => {
  return !words.find((str) => {
    if (ignoreCase) return subject.toLowerCase().includes(str.toLowerCase());
    return !subject.includes(str);
  });
};

/**
 * Determine if a given string ends with a given substring.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {bool}
 * @example
 * endsWith('This is my name', 'name') // true
 */

export const endsWith = (subject: string, search: string): boolean => {
  return subject.endsWith(search);
};

/**
 * Determine if a given string is valid JSON.
 *
 * @param  {string}  value
 * @returns {bool}
 * @example
 * isJson('{"name":"foo"}') // true
 */

export const isJson = (value: string): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

/**
 * Return the length of the given {string}.
 *
 * @param  {string}  value
 * @returns {int}
 * @example
 * length('Peniel') // 6
 */

export const length = (value: string): number => {
  return value.length;
};

/**
 * Limit the number of characters in a string.
 *
 * @param  {string}  value
 * @param  {int}  limit
 * @param  {string}  end
 * @returns {string}
 * @example
 * limit('Peniel DIALUNDAMA', 12) // 'Peniel DIALU...'
 */

export const limit = (
  value: string,
  limit: number,
  end: string = "..."
): string => {
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}${end}`;
};

/**
 * Convert the given string to lower-case.
 *
 * @param  {string}  value
 * @returns {string}
 * @example
 * lower('Peniel') // 'peniel'
 */

export const lower = (value: string): string => {
  return value.toLowerCase();
};

/**
 * Convert the given string to upper-case.
 *
 * @param  {string}  value
 * @returns {string}
 * @example
 * upper('Peniel') // 'PENIEL'
 */

export const upper = (value: string): string => {
  return value.toUpperCase();
};

/**
 * Generate a more truly "random" alpha-numeric string.
 *
 * @param  {int}  length
 * @returns {string}
 * @example
 * random(5) // e.g. 'a1b2c'
 */

export const random = (length: number): string => {
  return Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
};

/**
 * Wrap the string with the given strings.
 *
 * @param  {string}  before
 * @param  {string}  after
 * @returns {string}
 * @example
 * wrap('Peniel', 'Mr. ', ' Wifi') // 'Mr. Peniel Wifi'
 */
export const wrap = (
  value: string,
  before: string,
  after: string = ""
): string => {
  return `${before}${value}${after || before}`;
};
