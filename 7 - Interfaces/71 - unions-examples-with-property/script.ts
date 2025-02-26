// Interfaces

interface BankAccount {
  accountNumber: number | string;
  accountName: string;
  accountBalance: number;

  debit: (amount: number) => void;
  credit: (amount: number) => void;
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

  debit(amount: number): void {
    console.log("debit is happing in student object");
  }
  credit(amount: number): void {
    console.log("credit is happing in student object");
  }
}

class BusinessBankAccount implements BankAccount {
  accountNumber: string;
  accountName: string;
  accountBalance: number;

  constructor(
    accountNumber: string,
    accountName: string,
    accountBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }

  debit(amount: number): void {
    console.log("debit is happing in business object");
  }
  credit(amount: number): void {
    console.log("credit is happing in bussines object");
  }
}

let studentAcc1 = new StudentBankAccount(101, "Navin", 1000);
studentAcc1.debit(100);

let businessAcc1 = new BusinessBankAccount("B1001", "Sud", 5000);
businessAcc1.debit(100);
