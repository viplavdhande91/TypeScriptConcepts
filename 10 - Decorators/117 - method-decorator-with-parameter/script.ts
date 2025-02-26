// Method Decorator

function UserConfirmation(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    let originalFun = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let isOk = confirm(message);

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

  @UserConfirmation("Are you sure to debit from your account?")
  debit() {
    console.log("Debit successfull");
  }

  @UserConfirmation("Are you sure to credit to your account?")
  credit() {
    console.log("Credit successfull");
  }
}

let acc1 = new BankAccount();

acc1.debit();
// let isOk = confirm("Are you sure to debit?");
// if (isOk) {
//   acc1.debit();
// } else {
// }
