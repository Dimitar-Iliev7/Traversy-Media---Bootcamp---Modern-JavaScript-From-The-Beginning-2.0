let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100); // push 100 at the end of the array

// arr.pop(); // removes the last element

// arr.unshift(99); // add 99 at the first element

// arr.shift(); // remove the first element

// arr.reverse(); // reverse the array elements

x = arr.includes(20); // check the existing element of 20. Output "true" at that case => if not ("false")

x = arr.indexOf(15); // check the position of the element in the array

x = arr.slice(1, 4); // show the 1st index position  and everything after that => DOES NOT CHANGE THE ORIGINAL ARRAY

// x = arr.splice(); //CHANGE THE ORIGINAL ARRAY

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
