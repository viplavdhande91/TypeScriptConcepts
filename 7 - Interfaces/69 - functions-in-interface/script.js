"use strict";
// Interfaces
var StudentBankAccount = /** @class */ (function () {
    function StudentBankAccount(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    StudentBankAccount.prototype.debit = function (amount) {
        console.log("debit is happing in student object");
    };
    StudentBankAccount.prototype.credit = function (amount) {
        console.log("credit is happing in student object");
    };
    return StudentBankAccount;
}());
var BusinessBankAccount = /** @class */ (function () {
    function BusinessBankAccount(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    BusinessBankAccount.prototype.debit = function (amount) {
        console.log("debit is happing in business object");
    };
    BusinessBankAccount.prototype.credit = function (amount) {
        console.log("credit is happing in bussines object");
    };
    return BusinessBankAccount;
}());
var studentAcc1 = new StudentBankAccount(101, "Navin", 1000);
studentAcc1.debit(100);
var businessAcc1 = new BusinessBankAccount(1001, "Sud", 5000);
businessAcc1.debit(100);
//# sourceMappingURL=script.js.map