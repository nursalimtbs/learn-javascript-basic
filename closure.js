function createAdditionFunction(x) {
    return function(y) {
        return x + y;
    };
}
const addFive = createAdditionFunction(5);
console.log(addFive(10)); // Output: 15 