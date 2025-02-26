"use strict";
// Classes
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountName, accountBalance) {
        if (accountBalance === void 0) { accountBalance = 0; }
        this.debitCharges = 5;
        this.numberOfDebits = 0;
        // Increamenting count
        BankAccount.count += 1;
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.debit = function (amount) {
        if (amount >= 10) {
            this.numberOfDebits += 1;
            console.log("Debit #" + this.numberOfDebits);
            console.log("Doing debit of " + amount);
            if (this.numberOfDebits > 5) {
                console.log("Debit charge appiled  " + this.debitCharges);
                this.accountBalance = this.accountBalance - amount - this.debitCharges;
            }
            else {
                this.accountBalance = this.accountBalance - amount;
            }
        }
        else {
            console.log("Invalid amount to debits");
        }
    };
    BankAccount.prototype.credit = function (amount) {
        if (amount >= 10) {
            console.log("Doing credit of " + amount);
            this.accountBalance = this.accountBalance + amount;
        }
        else {
            console.log("Invalid amount to credit");
        }
    };
    BankAccount.prototype.showBalance = function () {
        console.log("Balance : " + this.accountBalance);
    };
    BankAccount.getCount = function () {
        return BankAccount.count;
    };
    BankAccount.count = 0;
    return BankAccount;
}());
var account1 = new BankAccount(101, "Navin", 1000);
var account2 = new BankAccount(102, "Pravin", 1500);
console.log(BankAccount.getCount());
var account3 = new BankAccount(103, "Sud", 1700);
console.log(BankAccount.getCount());
//# sourceMappingURL=script.js.map