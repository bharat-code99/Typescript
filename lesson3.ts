const gameScores = [14, 21, 23, 33, 45, 57];

const favouriteThings = ["raindropes on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];

const voters = [{name: "Alice", age: 23}, {name: "Bob", age: 37}];

// Generic
// In this case <T> is a generic type
// It acts as an placeholder for a type can be used throught the function
const getLastItem = <T> (array: T[]): T | undefined => {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));