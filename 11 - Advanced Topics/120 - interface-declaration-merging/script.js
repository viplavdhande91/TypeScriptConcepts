"use strict";
// // Method Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function UserConfirmation(message: string) {
//   return function (target: any, key: string, descriptor: PropertyDescriptor) {
//     let originalFun = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       let isOk = confirm(message);
//       if (isOk) {
//         let result = originalFun.apply(target, args);
//         return result;
//       } else {
//         return null;
//       }
//     };
//   };
// }
// function Trim() {
//   return function (target: any, key: string, description: PropertyDescriptor) {
//     description.enumerable = true;
//   };
// }
// class BankAccount {
//   private _accountName: string = "    Navin";
//   @UserConfirmation("dsf")
//   public set accountName(v: string) {
//     this._accountName = v;
//   }
//   debit() {
//     console.log("Dibit sss");
//   }
// }
// let acc1 = new BankAccount();
// acc1.accountName = "     NAVIN";
// console.log(acc1.accountName);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        configurable(false)
    ], Point.prototype, "y", null);
    return Point;
}());
var p1 = new Point(1, 2);
p1.x = 12;
console.log(p1.x);
console.log(p1.x);
