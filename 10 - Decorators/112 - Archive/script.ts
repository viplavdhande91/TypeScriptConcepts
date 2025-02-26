// Class Decorator - Example

function BankStandards() {
  return function (constructor: Function) {
    console.log("Decorator executed");

    constructor.prototype.createdDatetime = Math.random();
  };
}

@BankStandards()
class BankAccount {
  [x: string]: any;
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

let acc1 = new BankAccount(101);
console.log(acc1.createdDatetime);

let acc2 = new BankAccount(102);
console.log(acc2.createdDatetime);
