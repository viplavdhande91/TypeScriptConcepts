// hash # prefix class members

class BankAccount {
  accountName: string = "N/A";
  #accountBalance: number = 0;

  credit(amount: number) {
    this.#accountBalance += amount;
  }

  getBal() {
    return this.#accountBalance;
  }
}

let acc1 = new BankAccount();
console.log(acc1.getBal());
acc1.credit(100);
console.log(acc1.getBal());
