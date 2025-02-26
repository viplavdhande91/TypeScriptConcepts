// Interfaces

interface BankAccount {
  accountNumber: number | string;
  accountName: string;
  accountBalance: number;

  debit: (amount: number) => void;
  credit: (amount: number) => void;
}

interface BankStandards {
  idProof: string;

  helpline: () => void;
}

interface BankAccountV2 extends BankAccount {
  netBanking: () => void;
}

class StudentBankAccount implements BankAccountV2 {
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
  netBanking() {
    console.log("Student netBanking()");
  }
}

class BusinessBankAccount implements BankAccount, BankStandards {
  accountNumber: string;
  accountName: string;
  accountBalance: number;
  idProof: string = "N/A";

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
  helpline() {
    console.log("business helpline");
  }
}

let studentAcc1 = new StudentBankAccount(101, "Navin", 1000);
studentAcc1.debit(100);

let businessAcc1 = new BusinessBankAccount("B1001", "Sud", 5000);
businessAcc1.debit(100);
