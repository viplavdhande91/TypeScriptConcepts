// enums

enum LogLevel {
  ERROR,
  INFO,
  WARNING,
}

function displayLog(logLevel: LogLevel, message: string) {
  if (logLevel === LogLevel.ERROR) {
    console.log("ERROR : " + message);
  } else if (logLevel === LogLevel.INFO) {
    console.log("INFO : " + message);
  } else if (logLevel === LogLevel.WARNING) {
    console.log("WARNING : " + message);
  }
}

displayLog(LogLevel.INFO, "All good");
displayLog(LogLevel.ERROR, "Array index issue");
displayLog(LogLevel.WARNING, "ALl code path not covered");
