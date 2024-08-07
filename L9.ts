const User = {
  name: "Shahwaiz",
  email: "shahwaiz@gmail.com",
  isActive: true,
};
function createUser({ name: string, isPaid: boolean }) {}
//wrong
//createUser({ name: "Shahwaiz", isPaid: true, email: "shahwaiz@gmail.com" });

//right
let newUser = { name: "Shahwaiz", isPaid: true, email: "shahwaiz@gmail.com" };
createUser(newUser); //weird behavior of ts

//return object
function login(): { name: string; isPaid: boolean } {
  return { name: "Shahwaiz", isPaid: true };
}

export {};
