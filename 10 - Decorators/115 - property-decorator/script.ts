// Property Decorator

function Trim() {
  return function (target: any, key: string) {
    let value = target[key];

    let getter = () => {
      return value;
    };

    let setter = (nextValue: string) => {
      value = nextValue.trim();
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class BankAccount {
  @Trim()
  accountName: string = "     Navin   ";
}

let acc1 = new BankAccount();

acc1.accountName = "     Pravin     ";

console.log(acc1.accountName + " : length " + acc1.accountName.length);
