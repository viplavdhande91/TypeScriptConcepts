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
    BankAccount.prototype.debit = function () {
        console.log("debit called");
    };
    BankAccount.prototype.credit = function () {
        console.log("credit called");
    };
    return BankAccount;
}());
var StudentBankAccount = /** @class */ (function (_super) {
    __extends(StudentBankAccount, _super);
    function StudentBankAccount(accountName, accountNumber, accountBalance, collegeName) {
        var _this = _super.call(this, accountName, accountNumber, accountBalance) || this;
        _this.collegeName = collegeName;
        return _this;
    }
    StudentBankAccount.prototype.studentLoan = function () { };
    return StudentBankAccount;
}(BankAccount));
var BusinessBankAccount = /** @class */ (function (_super) {
    __extends(BusinessBankAccount, _super);
    function BusinessBankAccount(accountName, accountNumber, accountBalance, buinessName) {
        var _this = _super.call(this, accountName, accountNumber, accountBalance) || this;
        _this.businessName = buinessName;
        return _this;
    }
    BusinessBankAccount.prototype.businessLoan = function () { };
    return BusinessBankAccount;
}(BankAccount));
//# sourceMappingURL=script.js.map