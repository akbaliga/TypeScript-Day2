/*eslint-disable @typescript-eslint/no-unused-vars*/

interface IAnimal {
  type: string;
  sayHi: () => string;
}

class Animal implements IAnimal {
  type = "Uninitialized";

  constructor(type: string) {
    this.type = type;
  }

  sayHi() {
    return `Hi from ${this.type}`;
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }
}

let cat = new Cat();

console.log(cat.sayHi());
//ignore this, this is to avoid global namepspace pollution
export {};
