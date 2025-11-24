// create object using object literal

// empty object
const person = {};

// add properties to the object
person.name = "John";
person.age = 30;
person.city = "New York";
person["job"] = "Developer";
console.log(person); // { name: 'John', age: 30, job: 'Developer' }

// remove a property
delete person.city;

// create object using property
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};


console.log(car);    // { make: 'Toyota', model: 'Camry', year: 2020 }