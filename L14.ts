interface User4 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  //more clear way
  startTrail(): string;
}

const hitesh: User4 = {
  dbId: 22,
  email: "s@s.com",
  userId: 122,
  startTrail: () => "trail started",
};
