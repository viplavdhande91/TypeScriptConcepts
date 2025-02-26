"use strict";
// hash # prefix class members
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BankAccount_accountBalance;
class BankAccount {
    constructor() {
        this.accountName = "N/A";
        _BankAccount_accountBalance.set(this, 0);
    }
    credit(amount) {
        __classPrivateFieldSet(this, _BankAccount_accountBalance, __classPrivateFieldGet(this, _BankAccount_accountBalance, "f") + amount, "f");
    }
    getBal() {
        return __classPrivateFieldGet(this, _BankAccount_accountBalance, "f");
    }
}
_BankAccount_accountBalance = new WeakMap();
let acc1 = new BankAccount();
console.log(acc1.getBal());
acc1.credit(100);
console.log(acc1.getBal());
