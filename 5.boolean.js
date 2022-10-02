let a = true;
let b = false;

console.log(a);
console.log(b);

let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();

// Falsy
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
