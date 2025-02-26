// enums

enum LogLevel {
  ERROR = 0,
  INFO = 10,
  WARNING = 15,
}

enum HttpStatus {
  BADREQUEST = 400,
  INTERNALSERVERERROR = 500,
}

enum Directions {
  UP = "Up",
  DOWN = "Down",
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
