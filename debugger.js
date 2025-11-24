function createFullName(firstName, lastName) {
    debugger; // Execution will pause here if the debugger is open
    return `${firstName} ${lastName}`;
}

const fullName = createFullName("John", "Doe");
console.log(fullName);