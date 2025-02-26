// Casting

function displayLength(input: string | number) {
  if (typeof input === "string") {
    console.log((input as string).length);
  } else {
    console.log("Sorry length calculation is possible for string only");
  }
}

displayLength("ABC");
displayLength(12345);
