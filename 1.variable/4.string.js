let string = 'Hi';
string = `Hi`;
console.log(string);

string = "'Hi'";
console.log(string);

string = 'Hi\nJosh\t\tHi\\\u09AC';
console.log(string);

// Template Literal ``
let id = 'Josh';
let greetings = "'Hi," + 'id' + '😉\n how are you?';
console.log(greetings);

greetings = `'Hi, ${id}😉
how are you?`;
console.log(greetings);
