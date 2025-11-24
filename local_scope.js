// local scope example
function localScopeExample() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessing the local variable
}

localScopeExample(); // Output: I am a local variable

// Trying to access localVar outside its function will result in an error
console.log(localVar); // Uncaught ReferenceError: localVar is not defined