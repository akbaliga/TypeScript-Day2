/*eslint-disable @typescript-eslint/no-unused-vars*/

type Params = Parameters<typeof setTimeout>;

type TimerHandler = Params[0];
type TimerReturn = ReturnType<typeof setTimeout>;

function customSetTimeout(fn: TimerHandler): TimerReturn {
  return setTimeout(fn, 500);
}

//ignore this, this is to avoid global namepspace pollution
export {};
