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
  private _courseCount = 1;
  private readonly city: string = "Lucknow";
  constructor(public email: string, public name: string) {} //better syntax

  private deleteToken() {
    console.log("Token deleted");
  }

  //getter
  get getAppleEmail(): string {
    return `apple-${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //setter shouldn't have a return type
  set courseCount(courseNum) {
    if (courseNum <= 1)
      throw new Error("Course count should be greater than 1");
    this._courseCount = courseNum;
  }
}

const shahwaiz = new User("s@s.com", "shahwaiz");
