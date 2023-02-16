//Falsy Values
// - false
// - 0
// "" or '' (Empty string)
// - null
// - undefined
// - NaN

const x = 0;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

//Truthy Values:
// - Everything else is not falsy
// - true
// - '0' (0 in a strins)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - function () {} (empty function)

//Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log(`Please enter number of children`);
}

//Checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log("List posts");
} else {
  console.log("No list posts");
}

//Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
  console.log("lists user");
} else {
  console.log("No user");
}
