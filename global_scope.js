// global scope example
var globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // Accessing the global variable
}

showGlobalVar(); // Output: I am a global variable

function modifyGlobalVar() {
    globalVar = "I have been modified!";
}

modifyGlobalVar();
showGlobalVar(); // Output: I have been modified!