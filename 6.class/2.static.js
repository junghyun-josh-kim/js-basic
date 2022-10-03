class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const banana = Fruit.makeRandomFruit();
console.log(banana);
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(Fruit.MAX_FRUITS);
console.log(apple);
console.log(orange);
apple.display();
orange.display();

Math.pow();
Number.isFinite(1);
