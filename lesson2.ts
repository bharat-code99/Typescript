//literal Types
let myName:"Bharat" = "Bharat";
const myName2 = "Bharat";

type UserRole = "guest" | "member" | "admin";

let enteredUser = "Admin";

let user: UserRole = enteredUser as UserRole;

console.log(user);