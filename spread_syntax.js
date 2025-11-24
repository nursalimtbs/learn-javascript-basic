function sum(name, ...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

let totalAlice = sum("Alice", ...[1, 7, 10, 15]);
console.log("Total for Alice: " + totalAlice);

let totalBob = sum("Bob", 5, 10, 15, 20, 25);
console.log("Total for Bob: " + totalBob);
