let employee = {
    name: "John Doe",
    age: 30,
    position: "Developer"
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}