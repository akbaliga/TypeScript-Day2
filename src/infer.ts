type ValueFromArray<Arr> = Arr extends Array<infer R> ? R : Arr;

let a = [1, 2, 3];

type what = ValueFromArray<typeof a>;
let num: what = 0;
console.log("value in array is on type", typeof num);
