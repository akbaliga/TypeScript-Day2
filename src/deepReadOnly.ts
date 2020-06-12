/* eslint-disable @typescript-eslint/no-unused-vars */

type Book = {
  id: string;
  author: {
    id: string;
    name: string;
  };
  title: string;
  isbn: number;
  rating: number;
};

type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};

let book: DeepReadonly<Book> = {
  id: "123",
  author: {
    id: "456",
    name: ""
  },
  title: "",
  isbn: 123,
  rating: 5
};

// This should error out as the properties are readonly!!
book.title = "10 ways to be awesome";
book.author.name = "Karen";

// Ignore this.
export {};
