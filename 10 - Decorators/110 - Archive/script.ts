// Decorator Factories

function LockClass() {
  return function (constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
}

@LockClass()
class BankAccount {
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

class StudentBankAccount extends BankAccount {
  // Additional options
}

// let acc1 = new BankAccount(101);
// let acc2 = new BankAccount(101);
// let acc3 = new BankAccount(101);
