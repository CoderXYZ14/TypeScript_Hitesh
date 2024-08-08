interface User4 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  //more clear way
  startTrail(): string;
}

//u forgot to add github id id above so can do it
interface User4 {
  github: string;
}

const shahwaiz2: User4 = {
  dbId: 22,
  email: "s@s.com",
  github: "CoderXYZ14",
  userId: 122,
  startTrail: () => "trail started",
};

interface Admin extends User4 {
  role: "admin" | "ta" | "lerner";
}

const shahwaiz3: Admin = {
  dbId: 22,
  email: "s@s.com",
  github: "CoderXYZ14",
  userId: 122,
  startTrail: () => "trail started",
  role: "admin",
};
