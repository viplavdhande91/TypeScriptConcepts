"use strict";
// Enum - Declaration Merging
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ARRAY"] = 0] = "ARRAY";
    ErrorCode[ErrorCode["CLASS"] = 1] = "CLASS";
})(ErrorCode || (ErrorCode = {}));
(function (ErrorCode) {
    ErrorCode[ErrorCode["INDEX"] = 2] = "INDEX";
})(ErrorCode || (ErrorCode = {}));
console.log(ErrorCode.ARRAY);
console.log(ErrorCode.CLASS);
console.log(ErrorCode.INDEX);
