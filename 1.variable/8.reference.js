// Primitive value copy
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

//Object (memory, reference copy)
let apple = { // -> 0x1234
    name: 'apple',
};
let orange = apple; // -> 0x1234 -> heap
orange.name = 'OOrange';
console.log(apple);
console.log(orange);
