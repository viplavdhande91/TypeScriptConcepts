"use strict";
// Property Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Trim() {
    return function (target, key) {
        var value = target[key];
        var getter = function () {
            return value;
        };
        var setter = function (nextValue) {
            value = nextValue.trim();
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountName = "     Navin   ";
    }
    __decorate([
        Trim()
    ], BankAccount.prototype, "accountName", void 0);
    return BankAccount;
}());
var acc1 = new BankAccount();
acc1.accountName = "     Pravin     ";
console.log(acc1.accountName + " : length " + acc1.accountName.length);
