let firstName = null;

if (firstName === null) {
    console.log("The variable 'firstName' is null.");
} else {
    console.log("The variable 'firstName' has a value:", firstName);
}

// null value in array
let arr = [1, null, 3];
console.log("Array with null element:", arr);

// null object property
let obj = {
    firstName: "Jane",
    lastName: "Doe",
    middleName: null
};
console.log("Middle name is:", obj.middleName); // null