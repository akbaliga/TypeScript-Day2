/* eslint-disable @typescript-eslint/no-unused-vars */

function getter<O extends object, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

let recipe = {
  id: "445",
  name: "Pasta Bolognese",
  ingredients: ["Pasta"],
  rating: 5
};

let ingredients = getter(recipe, "ingredients");
