
type PizzaType = {
  name: string,
  price: number
}

type OrderType = {
  id: number,
  pizza: PizzaType,
  status: string
}

const menu: PizzaType[] = [
  {name: "Margherita", price: 10},
  {name: "Pepperoni", price: 12},
  {name: "Hawaiian", price: 15},
  {name: "Vegetarian", price: 10},
  {name: "BBQ Chicken", price: 12},
  {name: "Mushroom", price: 15},
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

addnewPizza({name: "Peppy Paneer", price: 10});
addnewPizza({name: "Farm House", price: 12});

placeOrder("Farm House");

completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);