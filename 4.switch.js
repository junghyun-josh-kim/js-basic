let day = 7;
let dayName;
if (day === 0) {
  dayName = 'mon';
} else if (day === 1) {
  dayName = 'tue';
} else if (day === 2) {
  dayName = 'wed';
} else if (day === 3) {
  dayName = 'thu';
} else if (day === 4) {
  dayName = 'fri';
} else if (day === 5) {
  dayName = 'sat';
} else if (day === 6) {
  dayName = 'sun';
}

switch (day) {
  case 0:
    dayName = 'mon';
    break;
  case 1:
    dayName = 'tue';
    break;
  case 2:
    dayName = 'wed';
    break;
  case 3:
    dayName = 'thu';
    break;
  case 4:
    dayName = 'fri';
    break;
  case 5:
    dayName = 'sat';
    break;
  case 6:
    dayName = 'sun';
    break;
  default: // else
    console.log('nothing!');
}
console.log(dayName);

let condition = 'bad';
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = 'Great!';
    break;
  case 'bad':
    text = 'Not good';
    break;
}
console.log(condition);
