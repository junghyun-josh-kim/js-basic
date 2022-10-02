/**Primitive & Object
 * Primitive -> copy by value
 * Object -> copy by reference
 */

// copy by value
let a = 1;
let b = a;
b = 2;

console.log(a);
console.log(b);

// copy by reference
let apple = {
  // 0x1234
  name: 'Apple',
};
let orange = apple; // 0x1234
orange.name = 'Orange';
console.log(apple);
console.log(orange);
