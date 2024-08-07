//Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: user.name, email: user.email, isActive: user.isActive };
}

createUser({ name: "", email: "", isActive: true });
