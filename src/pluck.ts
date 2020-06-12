/* eslint-disable @typescript-eslint/no-unused-vars */
type Usr = {
  id: string;
  name: string;
  age: number;
};

function pluck<T extends object, K extends keyof T>(
  arrOfObjs: Array<T>,
  key: K
) {
  let results: Array<T[K]> = [];
  for (let item of arrOfObjs) {
    results.push(item[key]);
  }
  return results;
}

let usersList = [
  { id: "a123", name: "Bob", age: 25 },
  { id: "a124", name: "Sam", age: 75 },
  { id: "a125", name: "Brenda", age: 37 }
];

let nameList = pluck(usersList, "age");

console.log(nameList);
// ['Bob', 'Sam', 'Brenda']
