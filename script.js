//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
let details = {
  firstName: 'Akash',
  secondName: 'Singh',
  age: '19',
  country: 'India',
  state: 'Up',
};
localStorage.setItem('details', JSON.stringify(details));
localStorage.setItem('firstName', 'Akash');
localStorage.setItem('state', 'UP');
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

let Details = JSON.parse(localStorage.getItem('details'));

for (let i = 0; i < Object.keys(details).length; i++)
  console.log(Object.keys(Details)[i], ':', Object.values(Details)[i]);
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('firstName');
console.log(localStorage.getItem('firstName'));
//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log(localStorage);
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
console.log(JSON.stringify(user));
