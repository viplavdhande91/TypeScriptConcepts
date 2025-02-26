// Generics Interfaces

interface Pair<T> {
  key: string;
  value: T;
}

let p1: Pair<string> = {
  key: "Name",
  value: "Navin",
};

let p2: Pair<number> = {
  key: "Id",
  value: 101,
};

// let p11 = new Pair<string>("Name", "Navin");
// let p12 = new Pair<number>("Id", 101);
