// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('can eat!');
//   }
//   sleep() {
//     console.log('can sleep!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('can eat!');
//   }
//   sleep() {
//     console.log('can sleep!');
//   }
//   play() {
//     console.log('can play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('can eat!');
  }
  sleep() {
    console.log('can sleep!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('YELLOW');
console.log(tiger);
tiger.eat();
tiger.sleep();
console.clear;

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // from Animal
    this.ownerName = ownerName;
  }
  play() {
    console.log('can play!');
  }
  // overriding
  eat() {
    super.eat();
    console.log('DOG EATS!');
  }
}
const dog = new Dog('RED', 'Josh');
console.log(dog);
