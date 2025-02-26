type DisplayStringOrNumberFunc = (value: string | number) => void;

function displayString(value1: string, value2: string): void {
  console.log(value1);
  console.log(value2);
}

// displayString("Hello");
// displayString.call( null,"Hello", 123);

// let func: DisplayStringOrNumberFunc = displayString;
