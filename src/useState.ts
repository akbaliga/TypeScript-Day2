/*eslint-disable @typescript-eslint/no-unused-vars*/
type User = {
  id: string;
  name: string;
  age: number;
};

type UserDict = { [key: string]: User };

let simon: User = {
  id: "234",
  name: "Simon",
  age: 37
};

let bob: User = {
  id: "235",
  name: "Bob",
  age: 32
};

let kat: User = {
  id: "236",
  name: "Kat",
  age: 32
};

let users: UserDict = {};
users[simon.id] = simon;
users[bob.id] = bob;

users = Object.assign({}, users, { "236": kat });
console.log(users);

type Setter = (state: string) => void;
type StateReturn = [string, Setter];

function useStateOld(initialState: string): StateReturn {
  let state = initialState;
  let setState = (newState: string) => {};

  return [state, setState];
}
