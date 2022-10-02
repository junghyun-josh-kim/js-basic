// Loop Statement

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// for(;;) {}

// continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // ignores codes below
    console.log('i is 10');
    break;
  }
  console.log(i);
}
