abstract class BankAccount {
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

  debit(amount: number) {
    console.log("debit called - parent class");
    let updatedBalance = this.accountBalance - amount;
    if (updatedBalance < 0) {
      console.log("Not allowed to go below 0");
    } else {
      this.accountBalance = this.accountBalance - amount;
    }
  }

  showBalance() {
    console.log(this.accountBalance);
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

  // Overriding
  debit(amount: number) {
    console.log("debit called - child class");
    let updatedBalance = this.accountBalance - amount;
    if (updatedBalance < -1000) {
      console.log("Not allowed to go below -1000");
    } else {
      this.accountBalance = this.accountBalance - amount;
    }
  }
}

//let acc1 = new BankAccount("Navin", 101, 1000);
let studentAcc1 = new StudentBankAccount("Navin", 101, 1000, "ABC");
let studentAcc2 = new StudentBankAccount("Pravin", 102, 1500, "ABC");

let businessAcc1 = new BusinessBankAccount("Sud", 1001, 5000, "PQR");

businessAcc1.showBalance();
businessAcc1.debit(100);
businessAcc1.showBalance();
businessAcc1.debit(5000);
businessAcc1.showBalance();
businessAcc1.debit(1000);
businessAcc1.showBalance();
