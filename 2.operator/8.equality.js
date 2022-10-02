// ==
// !=
// === value & type
// !==
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

const obj1 = {
  name: 'js', // 0x111
};
const obj2 = {
  name: 'js', // 0x112
};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
