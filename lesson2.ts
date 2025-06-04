
type UserRole = "guest" | "member" | "admin";

type User = {
  id: number,
  userName: string,
  role: UserRole
}

const users: User[] = [
  {id: 1, userName: "Bharat", role: "admin"},
  {id: 2, userName: "Sayam", role: "admin"},
  {id: 3, userName: "Sumit", role: "member"},
  {id: 4, userName: "Vishal", role: "guest"},
];

const updateUser = (id: number, updates: Partial<User>) => {
  const foundUser = users.find(user => user.id === id);
  if(!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

updateUser(2, {role: "guest"});
updateUser(3, {userName: "Anshu"});

const fetchUserDetails = (identifier: string | number): User | string => {
  if(typeof identifier === "string"){
    const user = users.find(user => user.userName === identifier) ?? "User not found";
    return user;
  }
  else if(typeof identifier === "number"){
    const user = users.find(user => user.id === identifier) ?? "User not found";
    return user;
  }
  else{
    throw new TypeError("Identifier can either be string or number");
  }
}

console.log(fetchUserDetails(3));