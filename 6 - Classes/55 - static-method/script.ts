// Classes

class BankAccount {
  public readonly accountNumber: number;
  public accountName: string;
  private accountBalance: number;
  private debitCharges: number = 5;
  private numberOfDebits: number = 0;
  private static count: number = 0;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number = 0
  ) {
    // Increamenting count
    BankAccount.count += 1;

    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }

  public debit(amount: number) {
    if (amount >= 10) {
      this.numberOfDebits += 1;
      console.log("Debit #" + this.numberOfDebits);
      console.log("Doing debit of " + amount);

      if (this.numberOfDebits > 5) {
        console.log("Debit charge appiled  " + this.debitCharges);
        this.accountBalance = this.accountBalance - amount - this.debitCharges;
      } else {
        this.accountBalance = this.accountBalance - amount;
      }
    } else {
      console.log("Invalid amount to debits");
    }
  }

  public credit(amount: number) {
    if (amount >= 10) {
      console.log("Doing credit of " + amount);

      this.accountBalance = this.accountBalance + amount;
    } else {
      console.log("Invalid amount to credit");
    }
  }

  public showBalance() {
    console.log("Balance : " + this.accountBalance);
  }

  public static getCount() {
    return BankAccount.count;
  }
}

let account1 = new BankAccount(101, "Navin", 1000);
let account2 = new BankAccount(102, "Pravin", 1500);

console.log(BankAccount.getCount());

let account3 = new BankAccount(103, "Sud", 1700);

console.log(BankAccount.getCount());