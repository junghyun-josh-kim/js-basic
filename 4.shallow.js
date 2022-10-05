const pizza = { name: 'pizza', price: 2 };
const ramen = { name: 'ramen', price: 1 };
const sushi = { name: 'sushi', price: 3 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

store2.push(sushi);
console.log('store1', store1);
console.log(store2);

pizza.price = 4;
console.log(store1);
console.log(store2);
