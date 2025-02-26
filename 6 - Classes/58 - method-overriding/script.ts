class BankAccount {
  accountName: string;
  accountNumber: number;
  accountBalance: number;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number
  ) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
  }

  debit() {
    console.log("debit called");
  }
  credit() {
    console.log("credit called");
  }
}

class StudentBankAccount extends BankAccount {
  collegeName: string;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    collegeName: string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.collegeName = collegeName;
  }

  studentLoan() {
    console.log("studentLoan called");
  }
}

class BusinessBankAccount extends BankAccount {
  businessName: string;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    buinessName: string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.businessName = buinessName;
  }

  businessLoan() {
    console.log("businessLoan called");
  }

  // debit() {
  //   console.log("Updated debit function for buinsess accounts");
  // }
}

let studentAcc1 = new StudentBankAccount("Navin", 101, 1000, "ABC");
let studentAcc2 = new StudentBankAccount("Pravin", 102, 1500, "ABC");

let businessAcc1 = new BusinessBankAccount("Sud", 1001, 5000, "PQR");

businessAcc1.debit();
