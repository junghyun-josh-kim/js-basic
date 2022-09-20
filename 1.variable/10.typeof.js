// typeof
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

// dynamic, weakly typed
// strong X

variable = 123; 
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);