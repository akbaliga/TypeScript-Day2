/*eslint-disable @typescript-eslint/no-unused-vars*/

function adjustTimeZone<T extends Date | string>(date: T, tzOffset: number): T {
  if (typeof date === "string") {
    return new Date(date).toISOString();
  } else {
    return date;
  }
}
