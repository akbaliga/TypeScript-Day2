type Book = {
  id: string;
  author: string;
  isbn: number;
  rating: number;
};

// "id" | x"author | "isbn"

type AllKeys = keyof Book;

// "author | "isbn"
type EditableKeys = Exclude<AllKeys, "id" | "isbn">;

function updateBook<T extends EditableKeys>(
  id: string,
  key: T,
  newValue: Book[T]
) {
  let oldBook: Book = getFromDb(id);
  let newBook = { ...oldBook, [key]: newValue };
  saveToDB(id, newBook);
  return { success: true };
}

updateBook("123", "rating", 7);
