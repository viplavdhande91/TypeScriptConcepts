"use strict";
// Interfaces
var StudentBankAccount = /** @class */ (function () {
    function StudentBankAccount(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    return StudentBankAccount;
}());
var BusinessBankAccount = /** @class */ (function () {
    function BusinessBankAccount(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    return BusinessBankAccount;
}());
var studentAcc1 = new StudentBankAccount(101, "Navin", 1000);
var businessAcc1 = new BusinessBankAccount(1001, "Sud", 5000);
//# sourceMappingURL=script.js.map