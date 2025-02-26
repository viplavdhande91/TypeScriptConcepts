"use strict";
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
var BankAccount = /** @class */ (function () {
    function BankAccount(accountName, accountNumber, accountBalance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.debit = function (amount) {
        console.log("debit called - parent class");
        var updatedBalance = this.accountBalance - amount;
        if (updatedBalance < 0) {
            console.log("Not allowed to go below 0");
        }
        else {
            this.accountBalance = this.accountBalance - amount;
        }
    };
    BankAccount.prototype.showBalance = function () {
        console.log(this.accountBalance);
    };
    BankAccount.prototype.credit = function () {
        console.log("credit called");
    };
    return BankAccount;
}());
var StudentBankAccount = /** @class */ (function (_super) {
    __extends(StudentBankAccount, _super);
    function StudentBankAccount(accountName, accountNumber, accountBalance, collegeName, branch) {
        var _this = _super.call(this, accountName, accountNumber, accountBalance) || this;
        _this.collegeName = collegeName;
        _this.branch = branch;
        return _this;
    }
    StudentBankAccount.prototype.studentLoan = function () {
        console.log("studentLoan called");
    };
    // Abstract method implementation
    StudentBankAccount.prototype.netBanking = function () {
        console.log("netBanking() for student users");
    };
    return StudentBankAccount;
}(BankAccount));
var BusinessBankAccount = /** @class */ (function (_super) {
    __extends(BusinessBankAccount, _super);
    function BusinessBankAccount(accountName, accountNumber, accountBalance, buinessName, branch) {
        var _this = _super.call(this, accountName, accountNumber, accountBalance) || this;
        _this.businessName = buinessName;
        _this.branch = branch;
        return _this;
    }
    BusinessBankAccount.prototype.businessLoan = function () {
        console.log("businessLoan called");
    };
    // Overriding
    BusinessBankAccount.prototype.debit = function (amount) {
        console.log("debit called - child class");
        var updatedBalance = this.accountBalance - amount;
        if (updatedBalance < -1000) {
            console.log("Not allowed to go below -1000");
        }
        else {
            this.accountBalance = this.accountBalance - amount;
        }
    };
    // Abstract method implementation
    BusinessBankAccount.prototype.netBanking = function () {
        console.log("netBanking() for Buinsess users");
    };
    return BusinessBankAccount;
}(BankAccount));
//let acc1 = new BankAccount("Navin", 101, 1000);
var studentAcc1 = new StudentBankAccount("Navin", 101, 1000, "ABC", "Banglore");
var studentAcc2 = new StudentBankAccount("Pravin", 102, 1500, "ABC", "Mumbai");
var businessAcc1 = new BusinessBankAccount("Sud", 1001, 5000, "PQR", "Mumbai");
studentAcc1.netBanking();
businessAcc1.netBanking();
//# sourceMappingURL=script.js.map