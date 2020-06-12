/*eslint-disable @typescript-eslint/no-unused-vars*/

// type Unsafe
/**
 * let a : any;
 let b: Object;
 let c: Function;
 */

function formatDate(input: unknown) {
  if (typeof input === "string") {
    let num = Date.parse(input);
    return new Date(num).toLocaleDateString();
  } else if (input instanceof Date) {
    let result = input.toLocaleDateString();
    return result;
  } else {
    return new Date();
  }
}

console.log(formatDate("Aug 3, 2019"));
console.log(formatDate(null));
console.log(formatDate(new Date()));
