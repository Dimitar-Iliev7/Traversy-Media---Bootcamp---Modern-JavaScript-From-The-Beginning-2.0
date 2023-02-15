//CHALLENGE 1:
const getCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
};

console.log(getCelsius(50));

//CHALLENGE 2:
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//CHALLENGE 3:
((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width ${width}
    is ${area}`;

  console.log(output);
})(10, 5);
