// Enum - Declaration Merging

enum ErrorCode {
  ARRAY = 0,
  CLASS = 1,
}

enum ErrorCode {
  INDEX = 2,
}

console.log(ErrorCode.ARRAY);
console.log(ErrorCode.CLASS);
console.log(ErrorCode.INDEX);
