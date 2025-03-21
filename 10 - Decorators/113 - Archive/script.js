"use strict";
// Excecution Sequence Decorator
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    console.log("Log decorator factory called");
    return function (constructor) {
        console.log("Log decorator  called");
    };
}
function LockClass() {
    console.log("LockClass decorator factory called");
    return function (constructor) {
        console.log("LockClass decorator called");
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber) {
        this.accountNumber = accountNumber;
    }
    BankAccount = __decorate([
        LockClass(),
        Log()
    ], BankAccount);
    return BankAccount;
}());
var StudentBankAccount = /** @class */ (function (_super) {
    __extends(StudentBankAccount, _super);
    function StudentBankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StudentBankAccount;
}(BankAccount));
// let acc1 = new BankAccount(101);
// let acc2 = new BankAccount(101);
// let acc3 = new BankAccount(101);
