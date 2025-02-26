"use strict";
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
var Person = /** @class */ (function () {
    function Person() {
        this._name = "N/A";
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person();
p1.name = "Navin";
console.log(p1.name);
//# sourceMappingURL=script.js.map