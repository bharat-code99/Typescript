
// Unions
// theri values can not be other than that
type UserRole = "guest" | "member" | "admin";

type User = {
  id: number,
  userName: string,
  role: UserRole
}

let userId: number = 1;

const users: User[] = [
  {id: userId++, userName: "Bharat", role: "admin"},
  {id: userId++, userName: "Sayam", role: "admin"},
  {id: userId++, userName: "Sumit", role: "member"},
  {id: userId++, userName: "Vishal", role: "guest"},
];

// Utility Type
// Partial | It takes a custom type and make every property optional
// Commonly used when updating an object
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

const addNewUser = (newUser: Omit<User, "id">): User => {
  const user: User = {id: userId++, ...newUser};
  users.push(user);
  return user;
}

console.log(addNewUser({userName: "Nitish", role: "member"}));
console.log(users);

// console.log(fetchUserDetails(3));