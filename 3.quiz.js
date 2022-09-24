let num = 3;
//num 짝수 "!" 홀수 "?"

//if

//ternary


if (num % 2 === 0) {
    console.log("!")
} else {
    console.log("?")
}

num % 2 === 0 ? console.log("!") : console.log("?");

let emoji = num % 2 === 0 ? '!' : '?';
console.log(emoji);