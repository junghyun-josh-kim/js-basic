function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments[1]);
  return a + b;
}
add();

// Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
