"use strict";
// Generics Vs Any
function assignWithGeneric(value) {
    return value;
}
function assignWithNonGeneric(value) {
    return value;
}
var numericString = "10";
var listOfNames = ["Navin", "Pravin"];
var genericNumericString = assignWithGeneric(numericString);
var genericListOfNames = assignWithGeneric(listOfNames);
var nonGenericNumericString = assignWithNonGeneric(numericString);
var nonGenericListOfNames = assignWithNonGeneric(listOfNames);
console.log(parseInt(genericNumericString));
// console.log(parseInt(genericListOfNames));
console.log(parseInt(nonGenericNumericString));
console.log(parseInt(nonGenericListOfNames));
//# sourceMappingURL=script.js.map