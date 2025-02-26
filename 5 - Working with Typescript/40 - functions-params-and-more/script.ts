// Functions

// function add(n1: number, n2: number, n3?: number): number {
//   return n1 + n2 + (n3 || 0);
// }
// console.log(add(2, 3));

// function add(n1: number, n2: number, n3: number = 0): number {
//   return n1 + n2 + n3;
// }
// console.log(add(2, 3));

function displayLogs(...logs: string[]) {
  logs.forEach((log) => {
    console.log(log);
  });
}

displayLogs();
