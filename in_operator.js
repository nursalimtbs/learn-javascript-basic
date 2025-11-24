const employee = {
  name: "Alice",
  age: 30,
  position: "Developer",
  gender: undefined
};

console.log("name" in employee);      // true
console.log("salary" in employee);    // false
console.log("gender" in employee);    // true