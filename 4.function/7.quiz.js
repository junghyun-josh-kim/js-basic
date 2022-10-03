// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function double(num) {
  console.log(num * 2);
}

iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('apple');
}, 3000);
