// Logical Operator
// &&
// \\
// !
// !!
let num = 8;
if (num >= 0 && num < 9) {
  console.log('Apple');
}

if (num != 8) {
  console.log('Orange');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text');
console.log(!!'text');
