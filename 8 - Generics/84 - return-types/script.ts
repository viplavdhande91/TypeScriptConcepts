// Return Types in Generics

// function assign(value: number): number {
//   return value;
// }

function assign<T>(value: T): T {
  return value;
}

let n1: number = assign(1);
let s1: string = assign("Tirrupur");
let b1: boolean = assign(true);
let emp1: {
  name: string;
  id: number;
};

emp1 = assign({
  name: "Navin",
  id: 101,
});
