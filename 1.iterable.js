// Symbol.iterator
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 }; // not itreable
for (const item in obj) {
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
