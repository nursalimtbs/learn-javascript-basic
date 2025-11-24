function firstLevel() {
    var firstLevelVar = "I am in the first level";

    function secondLevel() {
        var secondLevelVar = "I am in the second level";
        console.log(firstLevelVar); // Accessing variable from first level
        console.log(secondLevelVar); // Accessing variable from second firstLevel
    }

    secondLevel();
    // Trying to access secondLevelVar here will result in an error
    // console.log(secondLevelVar); // Uncaught ReferenceError: secondLevelVar is not defined
}

firstLevel();