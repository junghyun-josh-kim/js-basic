class Fruit {
  // for new keyword -> new object
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple -> instance of Fruit
const apple = new Fruit('apple', '🍎');
// orange -> instace of Fruit
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);
