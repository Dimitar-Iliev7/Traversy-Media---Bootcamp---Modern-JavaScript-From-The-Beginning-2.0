let i = 0;

// while (i <= 20) {
//   console.log("Number " + i);
//   i++;
// }

// LOOP OVER ARRAYS
const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

//NESTING WHILE LOOPS
while (i <= 5) {
  console.log("Number " + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
