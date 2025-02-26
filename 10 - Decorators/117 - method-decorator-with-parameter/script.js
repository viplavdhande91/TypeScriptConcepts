"use strict";
// Method Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function UserConfirmation(message) {
    return function (target, key, descriptor) {
        var originalFun = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var isOk = confirm(message);
            if (isOk) {
                var result = originalFun.apply(target, args);
                return result;
            }
            else {
                return null;
            }
        };
    };
}
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountName = "Navin";
    }
    BankAccount.prototype.debit = function () {
        console.log("Debit successfull");
    };
    BankAccount.prototype.credit = function () {
        console.log("Credit successfull");
    };
    __decorate([
        UserConfirmation("Are you sure to debit from your account?")
    ], BankAccount.prototype, "debit", null);
    __decorate([
        UserConfirmation("Are you sure to credit to your account?")
    ], BankAccount.prototype, "credit", null);
    return BankAccount;
}());
var acc1 = new BankAccount();
acc1.debit();
// let isOk = confirm("Are you sure to debit?");
// if (isOk) {
//   acc1.debit();
// } else {
// }
