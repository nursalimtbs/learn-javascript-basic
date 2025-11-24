const employee = {
    name: "Alice",
    position: "Developer",
    get fullInfo() {
        return `${this.name} is a ${this.position}`;
    },
    set updatePosition(newPosition) {
        this.position = newPosition;
    }
};

console.log(employee.fullInfo); // Output: Alice is a Developer
console.log(employee.position); // Output: Developer

employee.updatePosition = "Senior Developer";
console.log(employee.fullInfo);