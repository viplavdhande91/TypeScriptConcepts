// Excecution Sequence Decorator

function Log() {
  console.log("Log decorator factory called");
  return function (constructor: Function) {
    console.log("Log decorator  called");
  };
}

function LockClass() {
  console.log("LockClass decorator factory called");

  return function (constructor: Function) {
    console.log("LockClass decorator called");
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
}

@LockClass()
@Log()
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
