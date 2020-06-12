/**
 * make a function that accepts an array of unkowns and
 * returns an array of string
 */

function toStringArray(input: Array<unknown>) {
  let arrayOfString: Array<string> = [];

  for (let el of input) {
    if (typeof el === "string") {
      arrayOfString.push(el.toString());
    }
  }
  return arrayOfString;
}

console.log(toStringArray([1, "hi", false, null, "bye"]));
