//functions

function addTwo(num) {
  return num + 2;
}
addTwo(5);

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Shahwaiz", "s@s.com", true);

//u can even give default value to a parameter
function login(name: string, email: string, isPaid: boolean = false) {}

login("Shahwaiz", "s@s.com");
