let x;

const person = {
  name: "John Doe",
  age: 34,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name; // access the name in the object

x = person.address.city; // access the person object then the second object = > city:Boston

x = person.hobbies[0]; // access the array and then the 0 index position

person.hasChildren = true; // add prop in the object

console.log(x);
