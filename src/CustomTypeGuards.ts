type Person = {
  id: string;
  name: string;
  ssn: number;
};

type Pet = {
  id: string;
  nane: string;
  licenseTag: string;
};

let jon: Person = {
  id: "111",
  name: "Jon Snow",
  ssn: 342 - 56 - 4356
};
function getCreditScore(being: Person | Pet) {
  if (isPerson(being)) {
    console.log("The credit score is:", ficoScore(being.ssn));
  } else {
    throw new Error("Pets do not have credit scores");
  }
}

function isPerson(being: Person | Pet): being is Person {
  if ("ssn" in being) {
    return true;
  } else {
    return false;
  }
}

function ficoScore(ssn: string) {
  return 700;
}

console.log(getCreditScore(jon));

function hello(foo: Array<string> | number | string = 7) {
  if (Array.isArray(foo)) {
    console.log(foo.join(","));
  } else {
    console.log(foo);
  }
}

hello();
