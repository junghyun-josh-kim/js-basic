// Object literal { key: value}
// new Object()
// Object.creat()
// key -> string, number, symbol
// value -> primitive, object

let apple = {
  name: 'apple', //✅
  'hello-bye': '👍',
  0: 1,
  ['hello-bye-now']: '👍',
};

// acess to data
apple.name; // dot notation
console.log(apple['hello-bye-now']); // bracket notation
apple['name'];

// add data
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// delete data
delete apple.emoji;
console.log(apple.emoji);
