"use strict";
// enums
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["INFO"] = 10] = "INFO";
    LogLevel[LogLevel["WARNING"] = 15] = "WARNING";
})(LogLevel || (LogLevel = {}));
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["BADREQUEST"] = 400] = "BADREQUEST";
    HttpStatus[HttpStatus["INTERNALSERVERERROR"] = 500] = "INTERNALSERVERERROR";
})(HttpStatus || (HttpStatus = {}));
var Directions;
(function (Directions) {
    Directions["UP"] = "Up";
    Directions["DOWN"] = "Down";
})(Directions || (Directions = {}));
function displayLog(logLevel, message) {
    if (logLevel === LogLevel.ERROR) {
        console.log("ERROR : " + message);
    }
    else if (logLevel === LogLevel.INFO) {
        console.log("INFO : " + message);
    }
    else if (logLevel === LogLevel.WARNING) {
        console.log("WARNING : " + message);
    }
}
displayLog(LogLevel.INFO, "All good");
displayLog(LogLevel.ERROR, "Array index issue");
displayLog(LogLevel.WARNING, "ALl code path not covered");
//# sourceMappingURL=script.js.map