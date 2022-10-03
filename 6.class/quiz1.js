class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(5);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);
