/*eslint-disable @typescript-eslint/no-unused-vars*/

function filterArray<T>(list: Array<T>, shouldInclude: (num: T) => boolean) {
  let results: Array<T> = [];
  for (let num of list) {
    if (shouldInclude(num)) {
      results.push(num);
    }
  }
  return results;
}

let result1 = filterArray([1, 2, 3, 4, 5], num => num % 2 === 0);
