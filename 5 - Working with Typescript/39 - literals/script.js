"use strict";
// Literals
var httpMethod = "GET";
//let httpMethod: string = "GET";
function handleRequest(url, method) {
    console.log(method + " : calling " + url);
}
handleRequest("https://google.com", "GET");
handleRequest("https://google.com", "POST");
function compare(s1, s2) {
    // if (s1 === s2) {
    //   return 0;
    // } else {
    //   if (s1 > s2) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // }
    return s1 === s2 ? 0 : s1 > s2 ? 1 : -1;
}
var result = compare("CBC", "BBC");
//# sourceMappingURL=script.js.map