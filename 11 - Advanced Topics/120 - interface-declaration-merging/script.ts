// Interface - Declaration Merging

interface BankAccount {
  accountNumber: number;
  accountName: string;

  debit: (amount: number) => void;
}

interface BankAccount {
  accountBalance: number;

  credit: (amount: number) => void;
}

let acc1: BankAccount = {
  accountNumber: 101,
  accountName: "Navin;",
  accountBalance: 1000,

  debit: (amount: number) => {
    console.log("Debit successfull");
  },

  credit: (amount: number) => {
    console.log("Debit successfull");
  },
};
