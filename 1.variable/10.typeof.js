/**
 * weakly type
 * dynamic
 */

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; //
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
