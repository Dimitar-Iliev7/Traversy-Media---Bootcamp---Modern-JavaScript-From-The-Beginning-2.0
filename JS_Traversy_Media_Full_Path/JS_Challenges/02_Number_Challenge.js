// Number challenge:

// Instructions:

// Create a variable called x that is a random number between 1 and 100 along with a variable called y
// that is a random number between 1 and 50
// Create a variable for the SubmitEvent, difference, product, quotient and remainder of x and y.

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// GET THE SUM
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

//GET THE DIFFERENCE
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;

//GET THE PRODUCT
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;

//GET THE QUOTIENT
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;

//GET THE REMAINDER
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
