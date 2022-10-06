// Destructuring Assignment
const fruits = ['apple', 'kiwi', 'strawberry', 'banana'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(others);

const point = [1, 2];
const [x, y] = point;
console.log(x);
console.log(y);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
