import * as mbstring from "./";

/**
 * @function mbstring.ucFirst
 */

test("should return strings with first character uppercase", () => {
  expect(mbstring.ucFirst("peniel")).toEqual("Peniel");
});

/**
 * @function mbstring.after
 */

test("should return everything after the given value in a string.", () => {
  expect(mbstring.after("This is my name", "This is")).toEqual(" my name");
});

/**
 * @function mbstring.afterLast
 */

test("should return everything after the last occurrence of the given value in a string.", () => {
  expect(mbstring.afterLast("My name is wifi, your name is bil", "is")).toEqual(
    " bil"
  );
});

/**
 * @function mbstring.before
 */

test("should return everything before the given value in a string.", () => {
  expect(mbstring.before("This is my name", "my name")).toEqual("This is ");
});

/**
 * @function mbstring.beforeLast
 */

test("should return everything before the last occurrence of the given value in a string.", () => {
  expect(mbstring.beforeLast("This is my name", "is")).toEqual("This ");
});

/**
 * @function mbstring.between
 */

test("should return the portion of a string between two given values", () => {
  expect(mbstring.between("This is my name", "This", "name")).toEqual(
    " is my "
  );
});

/**
 * @function mbstring.betweenFirst
 */

test("should return the smallest possible portion of a string between two given values", () => {
  expect(mbstring.betweenFirst("[a] bc [d]", "[", "]")).toEqual("a");
});

/**
 * @function mbstring.camel
 */

 test("should return converts the given string to camelCase.", () => {
  expect(mbstring.camel("foo_bar")).toEqual("fooBar");
});
