/*eslint-disable @typescript-eslint/no-unused-vars*/

type Book = {
  id: string;
  author: {
    id: string;
    name: string;
  };
  isbn: number;
  rating: number;
};

// type NullableBook = {
//   id: string | null;
//   author: string | null;
//   isbn: number | null;
//   rating: number | null;
// }

type NullableBook = { [K in keyof Book]: Book[K] | null };

// Generic and recursive Nullalble
type Nullable<T extends object> = {
  [K in keyof T]: T[K] extends object ? Nullable<T[K]> : (T[K] | null)
};

function getBook(id: string): Nullable<Book> {
  return {
    id: null,
    author: {
      id: "234",
      name: "bob"
    },
    isbn: 12345,
    rating: 7
  };
}
//ignore this, this is to avoid global namepspace pollution
export {};
