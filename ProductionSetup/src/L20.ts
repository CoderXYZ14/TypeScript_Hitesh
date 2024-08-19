//Generics

const score: Array<number> = [];
const names: Array<string> = [];

//bad practice
function identityOne(val: boolean | number): boolean | number {
  return val;
}

//even bad practice
function identityTwo(val: any): any {
  return val;
}

//best
function identityThree<Type>(val: Type): Type {
  //not necesaary write Type but any thing like T
  return val;
}
// identityThree(3);

function identityFour<T>(val: T): T {
  //not necesaary write Type but any thing like T
  return val;
}
interface Bottle {
  brand: string;
}
identityFour<Bottle>({
  brand: "Pepsico",
});
