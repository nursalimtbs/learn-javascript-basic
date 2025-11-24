// convert string to number
const strNum1 = "42";
const strNum2 = "3.14";

const num1 = Number(strNum1);
const num2 = parseFloat(strNum2);
const num3 = parseInt(strNum1, 10); // base 10

console.info(num1); // 42
console.info(num2); // 3.14
console.info(num3); // 42

console.info(typeof num1); // "number"
console.info(typeof num2); // "number"
console.info(typeof num3); // "number"