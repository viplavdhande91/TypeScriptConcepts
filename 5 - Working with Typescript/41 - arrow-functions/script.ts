// Arrow functions

// let add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// // function add(n1: number, n2: number): number {
// //   return n1 + n2;
// // }

// console.log(add(1, 2));

function takeAction(n1: number, n2: number, fun: any) {
  // n1 + n2;
  fun(n1, n2);
}

takeAction(1, 2, (n1: number, n2: number) => {
  console.log(n1 + n2);
});

takeAction(3, 5, (n1: number, n2: number) => {
  console.log(n1 * n2);
});

// let add = (n1: number, n2: number) => {
//   console.log(n1 + n2);
// };
