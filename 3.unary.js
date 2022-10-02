// +
// -
// !
let a = 5;
a = -a; // -1 * 5
console.log(a); // -5
a = -a;
console.log(a);

a = +a;
console.log(a);

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// non number types -> number type
console.clear(); // 0
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!!1); // value -> boolean
