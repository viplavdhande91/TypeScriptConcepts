// Aliases

type EmpId = number;

let id1: EmpId = 10;
let id2: EmpId = 20;

type Employee = {
  empName: string;
  empId: number;
};

let emp1: Employee = {
  empName: "Navin",
  empId: 12,
};

type Input = string | number | boolean;

function display(value: Input) {
  console.log(value);
}

display(123);
display("Navin");
display(true);
