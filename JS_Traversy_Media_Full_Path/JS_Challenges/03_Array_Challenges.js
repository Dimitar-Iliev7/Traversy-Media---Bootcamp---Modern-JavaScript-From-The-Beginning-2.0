//ARRAY CHALLENGES
//CHALLENGE 1:
//Use some ot the array methods to mutate the following array to = expected result below:
//const arr = [1, 2, 3, 4, 5, ];
//EXPECTED RESULT => [6, 5, 4, 3, 2, 1, 0];
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.push(0);
arr.unshift(6);
/////////////////////////////////////////////////////
//CHALLENGE 2:
//Combine arr1 and arr2 into a new array called arr3 with the following elements;
//const arr1 = [1, 2 ,3 ,4 , 5]
//const arr2 = [5, 6, 7, 8, 9, 10]
//EXPECTED RESULT => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3);
