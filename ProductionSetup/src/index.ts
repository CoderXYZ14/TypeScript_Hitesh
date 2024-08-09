// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Lucknow";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  private readonly city: string = "Lucknow";
  constructor(public email: string, public name: string) {} //better syntax
}

const shahwaiz = new User("s@s.com", "shahwaiz");
