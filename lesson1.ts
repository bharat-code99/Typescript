
type Address = {
  street: string,
  city: string,
  country: string
}

// Optional Properties add ? after it's name
type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address?: Address
}

const person1: Person = {
  name: "Bharat",
  age: 23,
  isStudent: true,
}

// Optional Properties
// the optional property may be undefined to add ? before it's name 
// to tell TypeScript that it is optional when using it
function displayInfo(person: Person){
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);