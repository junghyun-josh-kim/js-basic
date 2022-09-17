let string = "Hello World!";

string = `Hello World!`;
console.log(string);

string = '"Hello World!"'
console.log(string);

string = "Hi\n World\t\t It's me\\\u09AC";
console.log(string);

// Template Literal
let id = 'hi';
let greetings = "'hi', " + id + "👍\n have a good day!";
console.log(greetings);

greetings = `'Hello, ${id}👍
have a good day`

console.log(greetings);