const fruits = ['banana', 'apple', 'grape', 'orange'];

fruits.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});
fruits.forEach((value) => {
  console.log(value);
});

console.clear();

const item1 = { name: 'milk', price: 2 };
const item2 = { name: 'food', price: 3 };
const item3 = { name: 'ramen', price: 2 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === 'milk');
console.log(result);

result = products.findIndex((item) => item.name === 'ramen');
console.log(result);

result = products.some((item) => item.name === 'milk');
console.log(result);

result = products.every((item) => item.name === 'milk');
console.log(result);

result = products.filter((item) => item.name === 'mlik');
console.log(result);

console.clear();

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['Josh', 'Kim'].flatMap((text) => text.split(''));
console.log(result);

const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
