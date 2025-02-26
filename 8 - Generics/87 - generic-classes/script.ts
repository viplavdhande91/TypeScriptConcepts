// Generics Classes

class Pair<T> {
  private key: string;
  private value: T;
  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
  getKey(): string {
    return this.key;
  }
  getValue(): T {
    return this.value;
  }
}

let p1 = new Pair("Name", "Navin");
let p2 = new Pair("Id", 101);
let p3 = new Pair("IsManager", false);
