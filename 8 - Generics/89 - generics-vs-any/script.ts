// Generics Vs Any

function assignWithGeneric<T>(value: T): T {
  return value;
}

function assignWithNonGeneric(value: any): any {
  return value;
}

let numericString: string = "10";
let listOfNames: string[] = ["Navin", "Pravin"];

let genericNumericString: string = assignWithGeneric(numericString);
let genericListOfNames: string[] = assignWithGeneric(listOfNames);

let nonGenericNumericString = assignWithNonGeneric(numericString);
let nonGenericListOfNames = assignWithNonGeneric(listOfNames);

console.log(parseInt(genericNumericString));
// console.log(parseInt(genericListOfNames));

console.log(parseInt(nonGenericNumericString));
console.log(parseInt(nonGenericListOfNames));

