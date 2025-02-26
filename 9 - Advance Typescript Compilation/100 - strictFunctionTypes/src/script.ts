type DisplayStringOrNumberFunc = (value: string | number) => void;

function displayString(value: string): void {
  console.log(value);
}

// let func: DisplayStringOrNumberFunc = displayString;