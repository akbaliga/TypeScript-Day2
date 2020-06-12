function getEvens(list: Array<number>): Array<number> {
  let evens: Array<number> = [];
  for (let num of list) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

function getEvensSimple(list: Array<number>) {
  return list.filter(num => num % 2 === 0);
}

let result = getEvens([1, 2, 3, 4, 5, 6]);
console.log(result);

let evens = getEvensSimple([1, 2, 3, 4, 5, 6]);
evens.forEach(num => {
  console.log(num);
});
