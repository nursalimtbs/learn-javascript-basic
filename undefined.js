let name;

if (name === undefined) {
    console.log("The variable 'name' is undefined.");
} else {
    console.log("The variable 'name' has a value:", name);
}

// undefined value in array
let arr = [1, 2, , 4]; // The third element is undefined
console.log("Array with undefined element:", arr);

// undefined object property
let obj = {
    firstName: "John",
    lastName: "Doe"
};
console.log("Middle name is:", obj.middleName); // undefined