// Classes

class BankAccount {
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

  debit() {
    console.log("debit called : " + this.accountNumber);
  }

  credit() {
    console.log("credit called : " + this.accountNumber);
  }
}

let account1 = new BankAccount(101, "Navin", 1000);
let account2 = new BankAccount(102, "Pravin", 1500);

account1.debit();
account2.credit();
