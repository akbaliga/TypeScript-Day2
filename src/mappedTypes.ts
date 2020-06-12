/*eslint-disable @typescript-eslint/no-unused-vars*/

type Book = {
  id: string;
  author: string;
  isbn: number;
  rating: number;
};

// type AsyncBook = {
//   id: () => Promise<string>;
//   author: () => Promise<string>;
//   isbn: () => Promise<number>;
//   rating: () => Promise<number>;
// };

type AsyncBook = { [K in keyof Book]: () => Promise<Book[K]> };

function getBook(id: string): AsyncBook {
  return 0 as any;
}

async function main() {
  let book = getBook("123");
}

//ignore this, tthis is to avoid global namepspace pollution
export {};
