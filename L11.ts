type User2 = {
  readonly _id: string; //cant be changed
  name: string;
  creditCardDetails?: number; //optional
};

let myUser: User2 = {
  _id: "1234",
  name: "Shahwaiz",
};

//myUser._id = "1235"; gives error

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
