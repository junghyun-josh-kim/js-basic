const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
  // action takes reference
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
}

calculator(1, 1, add);
calculator(5, 5, multiply);
