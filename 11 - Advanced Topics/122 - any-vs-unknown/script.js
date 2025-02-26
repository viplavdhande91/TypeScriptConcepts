"use strict";
// any vs unknown
// let val1: any;
// val1 = 123;
// let result1 = val1 + 1;
// let result2 = val1.toUpperCase();
// console.log(result2);
var val1;
val1 = "navin";
if (typeof val1 === "number") {
    var result1 = val1 + 1;
    console.log(result1);
}
else if (typeof val1 === "string") {
    var result1 = val1.toUpperCase();
    console.log(result1);
}
