// Method Decorator

function UserConfirmation() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    let originalFun = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let isOk = confirm("Are you sure?");

      if (isOk) {
        let result = originalFun.apply(target, args);
        return result;
      } else {
        return null;
      }
    };
  };
}

class BankAccount {
  accountName: string = "Navin";

  @UserConfirmation()
  debit() {
    console.log("Debit successfull");
  }

  @UserConfirmation()
  credit() {
    console.log("Credit successfull");
  }
}

let acc1 = new BankAccount();

acc1.credit();
// let isOk = confirm("Are you sure to debit?");
// if (isOk) {
//   acc1.debit();
// } else {
// }
