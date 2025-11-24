let person = {};

console.log(person?.address?.street); // Output: undefined

person = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

console.log(person?.address?.street); // Output: 123 Main St