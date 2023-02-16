const d = new Date(2023, 1, 16, 15, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("None of them");
}

switch (true) {
  case hour < 12:
    console.log("good morning");
    break;
  case hour < 18:
    console.log("good afternoon");
    break;
  default:
    console.log("good night");
}
