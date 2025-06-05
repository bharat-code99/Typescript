
// Custom Type
type PizzaType = {
  id: number,
  name: string,
  price: number
}

// Custom Type
type OrderType = {
  id: number,
  pizza: PizzaType,
  status: "ordered" | "completed"
}

let pizzaId = 1;
let orderId = 1;
let cashInRegister = 100;
const orderQueue: OrderType[] = [];
const menu: PizzaType[] = [
  {id: pizzaId++, name: "Margherita", price: 10},
  {id: pizzaId++, name: "Pepperoni", price: 12},
  {id: pizzaId++, name: "Hawaiian", price: 15},
  {id: pizzaId++, name: "Vegetarian", price: 10},
  {id: pizzaId++, name: "BBQ Chicken", price: 12},
  {id: pizzaId++, name: "Mushroom", price: 15},
];

// Generics
// Generic is written before the bracket of the function.
// Return type is written after the bracket e.g. functionName <Generic>(): return type
const addToArray = <T>(array: T[], item: T): T[] => {
  array.push(item);
  return array;
}

console.log(addToArray<PizzaType>(menu, {id: pizzaId++, name: "Peppy Paneer", price: 10}));
console.log(addToArray<OrderType>(orderQueue, {id: orderId++, pizza: menu[5], status: "completed"}));

// Utility Type Omit<Custom Type, "property to not include"> Omit the property that is passed as string 
const addnewPizza = (newPizza: Omit<PizzaType, "id">): void => {
  menu.push({id: pizzaId++, ...newPizza});
}

// Union of types. Here function will return either OrderaType object or return nothing
const placeOrder = (pizzaName: string): OrderType | void => {
  const pizzaObj = menu.find(pizza => pizza.name === pizzaName);
  if(!pizzaObj){
    console.log("Pizza Not Found.");
    return;
  }
  cashInRegister += pizzaObj.price;
  const newOrder: OrderType = {id: orderId++, pizza: pizzaObj, status: "ordered"};
  orderQueue.push(newOrder);
  return newOrder;
}

// Union of types
const completeOrder = (id: number) : OrderType | void=> {
  const orderedPizza = orderQueue.find(pizza => pizza.id === id);
  if(!orderedPizza){
    console.log("Not Found.");
    return;
  }
  orderedPizza.status = "completed";
  return orderedPizza;
}

// Union of types in function's parameters and return types
// Type Narrowing in the if else clause
// ?? operator checks left value if it is null or undefined then return the right value
export const getPizzaDetails = (identifier: string | number): PizzaType | string => {
  if(typeof identifier === "string"){
    return menu.find(pizza => pizza.name === identifier) ?? "Not Found";
  }
  else if(typeof identifier === "number"){
    return menu.find(pizza => pizza.id === identifier) ?? "Not Found";
  }
  else{
    // TypeError in TypeScript
    throw new TypeError("Parameter `identifier` must be a string or number");
  }
}

// addnewPizza({name: "Peppy Paneer", price: 10});
// addnewPizza({name: "Farm House", price: 12});

// placeOrder("Farm House");

// completeOrder(1);

// console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order Queue: ", orderQueue);

// console.log(getPizzaDetails(4));
