//Fetching a JSON file
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// //Fetching a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//Fetching from API
fetch("https://api.github.com/users/Dimitar-Iliev7")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login)); //make h1 with the data

//GET REQUEST
