// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = numbers.filter(function (kurec) {
//   return kurec % 2 === 0;
// });

// console.log(evenNum);

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

// GET ONLY RETAIL COMPANIES
const retailCompany = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompany);

const yearCalc = companies.filter((dateFil) => dateFil.end > 2010);
console.log(yearCalc);
