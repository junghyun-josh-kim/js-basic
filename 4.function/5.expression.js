// function name () {}
// const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// const name = () => {}
add = (a, b) => {
  return a + b;
};
add = (a, b) => a + b;
console.log(add(1, 2));

// IIFE (Immediately-Invoked Function Expresstion)
(function run() {
  console.log('Apple');
})();
