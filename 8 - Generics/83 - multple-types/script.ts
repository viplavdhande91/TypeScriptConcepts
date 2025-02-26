// Mutliple Types Generics

function display<T, P>(value1: T, value2: P, value3: P) {
  console.log(value1);
  console.log(value2);
}

display("Hi", 45, 327);
//display(123, 456);
