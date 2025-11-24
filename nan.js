// handling invalid conversion
const invalidStr = "Hello";
const invalidNum = Number(invalidStr);

console.info(invalidNum); // NaN
console.info(typeof invalidNum); // "number"

const value1 = Number("123abc");
const value2 = parseInt("123abc", 10);
console.info(value1); // NaN
console.info(value2); // 123

const sum = value1 + 10;;
console.info(sum); // NaN

// checking for NaN
console.info(Number.isNaN(invalidNum)); // true
console.info(Number.isNaN(value1)); // true
console.info(Number.isNaN(value2)); // false 

// NaN is not equal to anything, including itself
console.info(invalidNum === NaN); // false
console.info(Object.is(invalidNum, NaN)); // true