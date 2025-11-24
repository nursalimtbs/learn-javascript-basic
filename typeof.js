// typeof operator examples
const num = 42;
const str = "Hello, World!";

console.info(typeof num); // "number"
console.info(typeof str); // "string"

const isActive = true;
console.info(typeof isActive); // "boolean"

const obj = { name: "Nursalim", age: 30 };
console.info(typeof obj); // "object"

const arr = [1, 2, 3];
console.info(typeof arr); // "object" (arrays are of type object)

const func = function() {};
console.info(typeof func); // "function"

const undef = undefined;
console.info(typeof undef); // "undefined"

const nul = null;
console.info(typeof nul); // "object" (this is a known quirk in JavaScript)

// Checking types with typeof
function checkType(value) {
    console.log(`The type of the value is: ${typeof value}`);
}

checkType(100); // "number"
checkType("JavaScript"); // "string"
checkType(false); // "boolean"
checkType({}); // "object"
checkType([]); // "object"
checkType(function() {}); // "function"
checkType(undefined); // "undefined"
checkType(null); // "object"
