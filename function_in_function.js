function outerFunction() {
    console.log("This is the outer function."); 

    function innerFunction() {
        console.log("This is the inner function.");
    }
    innerFunction();
}

outerFunction();