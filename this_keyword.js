console.info(this)

function showThis() {
    console.info(this);
}

showThis(); // In non-strict mode, this will refer to the global object (window in browsers)