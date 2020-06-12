/*eslint-disable @typescript-eslint/no-unused-vars*/
type Setter1<U> = (newState: U) => void;
type StateReturn1<T> = [T, Setter1<T>];

function useState<T>(initialState: T): StateReturn1<T> {
  let state = initialState;
  let setState = (newState: T) => {
    state = newState;
  };

  return [state, setState];
}

function App() {
  let [count, setCount] = useState(0);
  setCount(count + 1);
}
