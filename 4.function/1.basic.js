function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = 'Kim';
let firstName = 'Josh';
console.log(fullName(firstName, lastName));
