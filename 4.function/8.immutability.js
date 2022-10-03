function display(num) {
  num = 5; // ❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Josh'; // ❌
  console.log(obj);
}

const bob = { name: 'bob' };
displayObj(bob);
console.log(bob);

function changeName(obj) {
  return { ...obj, name: 'Josh' };
}
