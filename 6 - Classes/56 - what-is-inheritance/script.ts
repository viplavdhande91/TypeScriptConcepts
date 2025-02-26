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

  studentLoan() {}
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

  businessLoan() {}
}


