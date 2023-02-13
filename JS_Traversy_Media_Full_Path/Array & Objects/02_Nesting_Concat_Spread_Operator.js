let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// fruits.push(berries); //nested

// x = fruits[3][1]; // access blueberry

const allFruits = [fruits, berries]; // declare both in new array

x = allFruits;

x = fruits.concat(berries); // one single array that have items from fruits and berries = > collect - all

//SPREAD OPERATOR (...)
x = [...fruits, ...berries]; // same result as concate => took the items from both and combine them

//FLATTEN ARRAYS
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); //one single array, => not nested

//STATIC METHODS ON ARRAY OBJECT
x = Array.isArray(fruits); // check if it is an array = > TRUE

x = Array.from("12345"); // create array with the items

console.log(x);
