function sayHelloWorld() {
    console.log("Hello, World!");
}

sayHelloWorld();
sayHelloWorld();

// with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");

// with return value
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 10);
console.log("Sum is: " + sum);

function getFinalGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }   
}

let grade = getFinalGrade(85);
console.log("Final Grade: " + grade);    

// return multiple values using an object
function getUserInfo() {
    return {
        name: "John Doe",
        age: 25,
        email: "",
    };
}

let userInfo = getUserInfo();
console.log("Name: " + userInfo.name);
console.log("Age: " + userInfo.age);
console.log("Email: " + (userInfo.email || "Not provided"));

// optional/default parameters
function multiplyNumbers(a, b = 1) {
    return a * b;
}

let result1 = multiplyNumbers(5, 4); // 20
let result2 = multiplyNumbers(5);
console.log("Result 1: " + result1);
console.log("Result 2: " + result2);

// rest parameters
function sumAllNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

let totalSum = sumAllNumbers(1, 2, 3, 4, 5);
console.log("Total Sum: " + totalSum);