// Classes

class BankAccount {
  public readonly accountNumber: number;
  public accountName: string;
  private accountBalance: number;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number = 0
  ) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }

  public debit() {
    console.log("debit called : " + this.accountNumber);
  }

  public credit() {
    console.log("credit called : " + this.accountNumber);
  }

  public showBalance() {
    console.log("Balance : " + this.accountBalance);
  }
}

let account1 = new BankAccount(101, "Navin", 1000);
//account1.accountNumber = 12367523;


console.log(account1.showBalance());

