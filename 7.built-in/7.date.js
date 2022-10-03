// UTC
console.log(new Date());

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0 = Jan
console.log(now.getDate()); // 0 = Sun
console.log(now.getHours());
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
