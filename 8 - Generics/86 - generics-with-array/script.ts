// Generics and Array

function displayLogs<T>(logs: T[]) {
  logs.forEach((log) => {
    console.log(log);
  });
}

displayLogs([
  "App started",
  "Taking request",
  "Shutting down",
  "Again starting",
]);

displayLogs([1, 2, 3, 4]);
