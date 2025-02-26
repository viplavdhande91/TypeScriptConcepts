// Interfaces

interface BankAccount {
  accountNumber: number;
  accountName: string;
  accountBalance: number;
}

class StudentBankAccount implements BankAccount {
  accountNumber: number;
  accountName: string;
  accountBalance: number;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }
}

class BusinessBankAccount implements BankAccount {
  accountNumber: number;
  accountName: string;
  accountBalance: number;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }
}

let studentAcc1 = new StudentBankAccount(101, "Navin", 1000);

let businessAcc1 = new BusinessBankAccount(1001, "Sud", 5000);
