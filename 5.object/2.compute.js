const obj = {
  name: 'Josh',
  age: 20,
};
obj.name;
obj.age;

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'developer');
console.log(obj);

function deletKey(obj, key) {
  delete object[key];
}
