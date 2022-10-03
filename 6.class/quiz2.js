class Staff {
  constructor(name, department, hours, payRate) {
    this.name = name;
    this.department = department;
    this.hours = hours;
    this.payRate = payRate;
  }
  calculatedPay() {
    return this.hours * this.payRate;
  }
}

class FullTime extends Staff {
  static PAY_RATE = 10000;
  constructor(name, department, hours) {
    super(name, department, hours, FullTime.PAY_RATE);
  }
}
class PartTime extends Staff {
  static PAY_RATE = 8000;
  constructor(name, department, hours) {
    super(name, department, hours, PartTime.PAY_RATE);
  }
}

const josh = new FullTime('Josh', 'hr', 30);
const mike = new PartTime('Mike', 'hr', 20);
console.log(josh.calculatedPay());
console.log(mike.calculatedPay());
console.log(josh);
console.log(mike);
