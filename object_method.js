const employee = {
    name: "Alice",
    position: "Developer",
    greet: function(name) {
        console.log(`Hello ${name}, my name is ${this.name} and I am a ${this.position}.`);
    }
};

employee.greet("Nursalim"); // Output: Hello Nursalim, my name is Alice and I am a Developer.