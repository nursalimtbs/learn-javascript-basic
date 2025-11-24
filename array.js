
// Creating Arrays in JavaScript
let empty_array = [];
console.log(empty_array); // []

let names = ["Alice", "Bob", "Charlie"];
console.log(names); // ["Alice", "Bob", "Charlie"]

let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // [10, 20, 30, 40, 50]

// Accessing Array Elements
console.log(names[0]); // "Alice"
console.log(numbers[2]); // 30

// Modifying Array Elements
names[1] = "Robert";
console.log(names); // ["Alice", "Robert", "Charlie"]

// Add elements to the end of the array
names.push("David");
console.log(names); // ["Alice", "Robert", "Charlie", "David"]

// array operations
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // 3

fruits.pop(); // removes "Cherry"
console.log(fruits);

fruits.shift(); // removes "Apple"
console.log(fruits);

fruits.unshift("Mango"); // adds "Mango" at the beginning
console.log(fruits);

fruits.splice(1, 0, "Orange"); // adds "Orange" at index 1
console.log(fruits); // ["Mango", "Orange", "Banana"]

let citrus = fruits.slice(0, 2); // creates a new array with first two elements
console.log(citrus); // ["Mango", "Orange"]