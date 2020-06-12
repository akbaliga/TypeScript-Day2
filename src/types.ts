export type User = Readonly<{
  id: string;
  name: string;
  age: number;
  posts: ReadonlyArray<string>;
}>;
