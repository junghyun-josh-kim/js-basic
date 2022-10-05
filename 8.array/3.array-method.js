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

let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = arr3.reverse();
console.log(arr4);

console.clear;

let arr = [[1, 2, 3], 4, [5, 6]];
console.log(arr.flat());
console.clear;

arr.fill('s', 1, 3);
console.log(arr);

let text = arr.join();
console.log(text);
