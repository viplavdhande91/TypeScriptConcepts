"use strict";
// Functions
// function add(n1: number, n2: number, n3?: number): number {
//   return n1 + n2 + (n3 || 0);
// }
// console.log(add(2, 3));
// function add(n1: number, n2: number, n3: number = 0): number {
//   return n1 + n2 + n3;
// }
// console.log(add(2, 3));
function displayLogs() {
    var logs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        logs[_i] = arguments[_i];
    }
    logs.forEach(function (log) {
        console.log(log);
    });
}
displayLogs();
//# sourceMappingURL=script.js.map