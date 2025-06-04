
type PizzaType = {
  id: number,
  name: string,
  price: number
}

type OrderType = {
  id: number,
  pizza: PizzaType,
  status: "ordered" | "completed"
}

const menu: PizzaType[] = [
  {id: 1, name: "Margherita", price: 10},
  {id: 2, name: "Pepperoni", price: 12},
  {id: 3, name: "Hawaiian", price: 15},
  {id: 4, name: "Vegetarian", price: 10},
  {id: 5, name: "BBQ Chicken", price: 12},
  {id: 6, name: "Mushroom", price: 15},
];

let cashInRegister = 100;
let orderId = 1;
const orderQueue: OrderType[] = [];

const addnewPizza = (newPizza: PizzaType) => {
  menu.push(newPizza);
}

const placeOrder = (pizzaName: string) => {
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

const completeOrder = (id: number) => {
  const orderedPizza = orderQueue.find(pizza => pizza.id === id);
  if(!orderedPizza){
    console.log("Not Found.");
    return;
  }
  orderedPizza.status = "completed";
  return orderedPizza;
}

export const getPizzaDetails = (identifier: string | number): PizzaType | string => {
  if(typeof identifier === "string"){
    return menu.find(pizza => pizza.name === identifier) ?? "Not Found";
  }
  else if(typeof identifier === "number"){
    return menu.find(pizza => pizza.id === identifier) ?? "Not Found";
  }
  else{
    throw new TypeError("Parameter `identifier` must be a string or number");
  }
}

addnewPizza({id: 7, name: "Peppy Paneer", price: 10});
addnewPizza({id: 8, name: "Farm House", price: 12});

placeOrder("Farm House");

completeOrder(1);

// console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order Queue: ", orderQueue);

console.log(getPizzaDetails("Mushroom"));
