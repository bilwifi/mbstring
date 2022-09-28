/**
 * Allow to capitalize the first character of string param
 * @param {string} str
 * @returns string
 */
export const ucFirst = (str: string) : string => {
  return str[0].toUpperCase() + str.substring(1)
}

/**
 * Return the remainder of a string after the first occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
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
 */

 export const beforeLast = (subject: string, search: string): string => {
  return search === ""
    ? subject
    : subject.substring(0, subject.lastIndexOf(search));
};