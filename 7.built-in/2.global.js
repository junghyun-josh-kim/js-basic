console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

// URL (one of URI, Uniform Resource Identifier)
const URL = 'https://김정현.com';
const encoded = encodeURI(URL);
console.log(encoded);

const part = '정현.com';
console.log(encodeURIComponent(part));
