function sayHello(name) {
    console.info("Hello, " + name + "!");
}

let say = sayHello;

sayHello("Alice");
say("Bob");

// function as parameter
function greet(name, formatter) {
    console.info("Greeting: " + formatter(name));
}

function upperCaseFormatter(name) {
    return name.toUpperCase();
}

greet("Charlie", upperCaseFormatter);
greet("Dave", function(name) {
    return name.toLowerCase();
});
