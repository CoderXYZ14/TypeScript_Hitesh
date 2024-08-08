let score: number | string = 33;

type User3 = {
  name: string;
  id: number;
};

type Admin3 = {
  username: string;
  id: number;
};

let shahwaiz: User3 | Admin3 = {
  name: "Shahwaiz",
  id: 123456,
};

const data: number[] | string[] = [1, 2, 3]; //can be either no or string not match of both
//to do this
const data2: (number | string)[] = [1, 2, "3"];

let pi: 3.14 = 3.14; //asign value that cant be changed

//useful for seat allotment like
let seatAllotment: "aisle" | "middle" | "window"; //can choose from three val only

seatAllotment = "aisle";
