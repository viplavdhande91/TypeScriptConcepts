// any vs unknown

// let val1: any;
// val1 = 123;

// let result1 = val1 + 1;
// let result2 = val1.toUpperCase();

// console.log(result2);

let val1: unknown;
val1 = "navin";

if (typeof val1 === "number") {
  let result1 = val1 + 1;
  console.log(result1);
} else if (typeof val1 === "string") {
  let result1 = val1.toUpperCase();
  console.log(result1);
  
}
