const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; //combine the two objects in one => the new var.

x = obj3;

// x = Object.keys(todo); // get the keys from the object (todo is example and reference)

// x = Object.values(todo); /// array of the values only

// x = todo.hasOwnProperty("name"); // check the property => true or false if not existing

// console.log(x);

const tasks = {
  id: 1,
  title: "Take out trash",
};

const { id, title } = tasks;
// console.log(id, title);

//DESTRUCTURE ARRAYS
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers; // the first and the second item in the array (output)
console.log(first, second, rest); // rest items in array => in the case (33, 49)
