"use strict";
// Casting
function displayLength(input) {
    if (typeof input === "string") {
        console.log(input.length);
    }
    else {
        console.log("Sorry length calculation is possible for string only");
    }
}
displayLength("ABC");
displayLength(12345);
//# sourceMappingURL=script.js.map