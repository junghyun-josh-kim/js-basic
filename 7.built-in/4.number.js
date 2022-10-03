const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());

console.log(Number.EPSILON);
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num);

function isEqual(original, expected) {
  return original - expected < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(num, 0.1));
