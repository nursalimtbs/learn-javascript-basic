const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const [firstName, secondName, ...restNames] = names;

console.log(firstName);
console.log(secondName);
console.log(restNames);

const employee = {
    name: "Alice",
    position: "Developer",
    location: "New York",
    experience: 5
};

const { name, position, ...others } = employee;

console.log(name);
console.log(position);
console.log(others);

// desctructuring function parameters
function displayEmployeeInfo({ name, position, location }) {
    console.log(`Name: ${name}, Position: ${position}, Location: ${location}`);
}

displayEmployeeInfo(employee);

// default values in destructuring
const rgb = [255, 200];

const [red, green, blue = 0] = rgb;
console.log(red);
console.log(green);
console.log(blue);

const settings = {
    theme: "dark",
    fontSize: 14
};

const { theme, fontSize, language = "en" } = settings;
console.log(theme);
console.log(fontSize);
console.log(language);
