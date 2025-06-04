
type UserRole = "guest" | "member" | "admin";

type User = {
  userName: string,
  role: UserRole
}

const users: User[] = [
  {userName: "Bharat", role: "admin"},
  {userName: "Sayam", role: "admin"},
  {userName: "Sumit", role: "member"},
  {userName: "Vishal", role: "guest"},
];

const fetchUserDetails = (name: string): User => {
  const user = users.find(user => user.userName === name);
  if(!user){
    throw new Error(`User ${name} not found`);
  }
  return user;
}

console.log(fetchUserDetails("Sumit"));