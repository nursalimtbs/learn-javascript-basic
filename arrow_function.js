// arrow function example
const add = (a, b) => {
    return a + b;
};

console.log(add(3, 5)); // Output: 8

const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

const square = x => x * x;
console.log(square(4)); // Output: 16

const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

// arrow function as parameter example
function giveMeFive(callback) {
    const result = callback(2, 3);
    console.log(result);
}

giveMeFive((x, y) => x + y); // Output: 5

