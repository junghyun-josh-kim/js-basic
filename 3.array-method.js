const fruits = ['banana', 'apple', 'lemon'];

console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

console.log(fruits.indexOf('banana'));
console.log(fruits.includes('apple'));

fruits.push('peach');
console.log(fruits);

fruits.unshift('watermelon');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 0, 'APPLE', 'BANANA');
console.log(fruits);
