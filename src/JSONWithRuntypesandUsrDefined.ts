/* eslint-disable @typescript-eslint/no-unused-vars */

import { Null, String, Boolean, Number, Union, Static } from "runtypes";

const JSONprimitive = Union(Null, String, Boolean, Number);
type JSONPrimitiveType = Static<typeof JSONprimitive>;
type JSONObject = { [key: string]: JSONValue };

type JSONArray = Array<JSONValue>;

// Recursive Types
type JSONValue = JSONPrimitiveType | JSONObject | JSONArray;

function main() {
  let userContent = prompt("Enter some JSON");
  if (userContent === null) {
    console.log("you;ve cancelled");
    return;
  }

  let parsed: JSONValue = JSON.parse(userContent);

  if (JSONprimitive.guard(parsed)) {
    console.log("Error: please insert a JSON object", parsed);
  } else if (Array.isArray(parsed)) {
    console.log(
      "OK, technically an array is an object so ill accept this",
      parsed.join("\n")
    );
  } else {
    console.log("Congrats!, you can manually type valid JSON", parsed);
  }
}

// If this returns true, then we can be certain that the input is a JSON Primitive
// User defined type guards
// function isPrimitive(input: JSONValue): input is JSONprimitive {
//   return (
//     input === null ||
//     typeof input === "number" ||
//     typeof input === "string" ||
//     typeof input === "boolean"
//   );
// }
//main();
