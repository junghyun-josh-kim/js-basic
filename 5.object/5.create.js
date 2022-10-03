// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

//Template
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this;
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);
