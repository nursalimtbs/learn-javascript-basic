// anonymous function example
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Eve"));

// anonymous function in parameter
function processUserInput(callback) {
    callback("Nursalim");
}

processUserInput(function(name) {
    console.log("User input processed for: " + name);
});


