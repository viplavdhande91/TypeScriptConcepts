"use strict";
// Classes
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountName, accountBalance) {
        if (accountBalance === void 0) { accountBalance = 0; }
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
    BankAccount.prototype.showBalance = function () {
        console.log("Balance : " + this.accountBalance);
    };
    return BankAccount;
}());
var account1 = new BankAccount(101, "Navin", 1000);
//account1.accountNumber = 12367523;
console.log(account1.showBalance());
//# sourceMappingURL=script.js.map