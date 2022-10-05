function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['banana', 'strawberry', 'grape', 'strawberry'];
const result = replace(array, 'strawberry', 'kiwi');
console.log(result);

function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

console.log(
  count(['banana', 'strawberry', 'grape', 'strawberry'], 'strawberry')
);
