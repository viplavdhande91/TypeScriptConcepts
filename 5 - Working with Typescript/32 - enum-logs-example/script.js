"use strict";
// enums
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
})(LogLevel || (LogLevel = {}));
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