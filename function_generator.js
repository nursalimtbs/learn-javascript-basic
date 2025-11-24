function* createNames() {
    yield "Alice";
    yield "Bob";
    yield "Charlie";
}

const names = createNames();
console.log(names.next().value);

for (const name of names) {
    console.log(name);
}

function* createOddNumbers(limit) {
    for (let i = 1; i <= limit; i += 2) {
        yield i;
    }
}

const oddNumbers = createOddNumbers(10);
// console.log([...oddNumbers]);
console.log([...oddNumbers]); // 1  