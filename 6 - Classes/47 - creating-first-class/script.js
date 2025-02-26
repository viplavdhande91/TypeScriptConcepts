"use strict";
// Classes
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.debit = function () {
        console.log("debit called : " + this.accountNumber);
    };
    BankAccount.prototype.credit = function () {
        console.log("credit called : " + this.accountNumber);
    };
    return BankAccount;
}());
var account1 = new BankAccount(101, "Navin", 1000);
var account2 = new BankAccount(102, "Pravin", 1500);
account1.debit();
account2.credit();
//# sourceMappingURL=script.js.map