
type Address = {
  street: string,
  city: string,
  country: string
}

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

function displayInfo(person: Person){
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);