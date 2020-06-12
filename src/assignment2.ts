/**
 * make a function that accepts an array of unkowns and
 * returns an array of string
 */

function toTypedArray<T>(input: Array<unknown>, converter: (x: unknown) => T) {
  let arrayOfString: Array<T> = [];

  for (let el of input) {
    arrayOfString.push(converter(el));
  }
  return arrayOfString;
}

console.log(toTypedArray([1, "hi", false, null, "bye"], String));
