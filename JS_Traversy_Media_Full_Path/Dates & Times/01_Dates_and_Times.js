//Date Methods & DateTimeFormat API

let x;
let d = new Date();

x = d.toString();

x = d.getFullYear(); //get the current year

x = d.getMonth(); // get the curent month = zero based index
x = d.getMonth() + 1; // get the correct month Feb (2) - current number

x = d.getDate(); // current date

x = d.getDay(); // the day of the week

x = d.getHours(); // get the current hour

x = d.getMinutes(); // get the minutes

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; // representation of the date using these methods

x = Intl.DateTimeFormat("en-BG").format(d);

x = Intl.DateTimeFormat();

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
}); // OUTPUT => Monday, February 13, 2023 at 5:42:24 AM

console.log(x);
