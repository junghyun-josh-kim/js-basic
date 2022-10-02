// let -> Reassignable✅ Mutable✅
let a = 1;
a = 2;

// const -> Reassignable❌ Mutable✅
const text = 'hello';
//text = 'hi';

const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);
apple.name = 'orange';
apple.display = '🍋';
console.log(apple);
