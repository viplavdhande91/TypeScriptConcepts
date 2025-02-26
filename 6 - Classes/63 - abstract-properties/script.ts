abstract class BankAccount {
  accountName: string;
  accountNumber: number;
  accountBalance: number;
  abstract branch: string;

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

  abstract netBanking(): void;
}

class StudentBankAccount extends BankAccount {
  collegeName: string;
  branch: string;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    collegeName: string,
    branch: string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.collegeName = collegeName;
    this.branch = branch;
  }

  studentLoan() {
    console.log("studentLoan called");
  }

  // Abstract method implementation
  netBanking(): void {
    console.log("netBanking() for student users");
  }
}

class BusinessBankAccount extends BankAccount {
  businessName: string;
  branch: string;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    buinessName: string,
    branch: string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.businessName = buinessName;
    this.branch = branch;
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

  // Abstract method implementation
  netBanking(): void {
    console.log("netBanking() for Buinsess users");
  }
}

//let acc1 = new BankAccount("Navin", 101, 1000);
let studentAcc1 = new StudentBankAccount("Navin", 101, 1000, "ABC", "Banglore");
let studentAcc2 = new StudentBankAccount("Pravin", 102, 1500, "ABC", "Mumbai");

let businessAcc1 = new BusinessBankAccount("Sud", 1001, 5000, "PQR", "Mumbai");

studentAcc1.netBanking();
businessAcc1.netBanking();
