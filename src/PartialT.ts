import { User } from "./types";

let sam: User = {
  id: "asdf",
  name: "Sam",
  age: 22,
  posts: []
};

type UserPartialUpdates = Partial<User>;

function updateUser(userId: string, updates: UserPartialUpdates) {
  // TODO: do something with the database
}

updateUser(sam.id, { age: 23 });
