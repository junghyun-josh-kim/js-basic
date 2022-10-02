let integer = 123;
let negative = -123;
let double = 1.23;
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(bigInt);
