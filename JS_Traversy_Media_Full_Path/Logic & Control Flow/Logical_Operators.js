// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;

console.log(a);

// || - will return the first truthy value or the last value
let b;

b = 10 || 20;
b = "" || 0 || 5 || false;
console.log(b);
