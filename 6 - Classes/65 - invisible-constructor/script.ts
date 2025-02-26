// Getters & Setters

// class Person {
//   private name: string = "N/A";

//   public getName() {
//     return this.name;
//   }

//   public setName(name: string) {
//     this.name = name;
//   }
// }

class Person {
  private _name: string = "N/A";

  constructor() {}

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

let p1 = new Person();
p1.name = "Navin";
console.log(p1.name);
