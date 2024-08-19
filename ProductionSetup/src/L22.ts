interface Database {
  connection: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

anotherFunction(3, { connection: "abc" });
