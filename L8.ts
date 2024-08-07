const heros = ["thor", "shinchan", "doraemon"];

heros.map((hero): string => {
  return "";
});

function consoleError(errMsg: string): void {
  console.error(errMsg);
}

//never returns a value. Used for throwing error
function consoleError2(errMsg: string): never {
  throw errMsg;
}
