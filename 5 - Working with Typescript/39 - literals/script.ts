// Literals

let httpMethod: "GET" | "POST" | "PUT" = "GET";
//let httpMethod: string = "GET";

function handleRequest(url: string, method: "GET" | "POST" | "PUT") {
  console.log(method + " : calling " + url);
}

handleRequest("https://google.com", "GET");
handleRequest("https://google.com", "POST");

function compare(s1: string, s2: string): 0 | 1 | -1 {
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

let result = compare("CBC", "BBC")
