const numbers = [1, 2, 3, 4, 5, 6];

const multiply = numbers.map((nums) => {
  return nums * 2;
});

console.log(multiply);

const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2004 },
  { name: "Company two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((names) => {
  return names.name;
});
console.log(companyNames);

// Create an array with just company and categorie
const companyObj = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyObj);

// Create an array of the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});
console.log(companyYears);

//Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
