// Interfaces vs Type Aliases

// interface Employee {
//   name: string;
// }

// interface Employee {
//   name: string;
// }

// interface EmployeeV2 extends Employee {
//   city: string;
// }

// let emp: EmployeeV2 = {
//   name: "Navin",
//   city: "Tirrupur",
// };

// type Employee = { name: string };
// type EmployeeV2 = Employee & { city: string };

// let emp: EmployeeV2 = {
//   name: "Navin",
//   city: "Tirrupur",
// };

// interface Employee {
//   name: string;
// }

// class EmployeeV2 implements Employee {
//   name: string = "N/A";
// }

// type Employee = {
//   name: string;
// };

// class EmployeeV2 implements Employee {
//   name: string = "N/A";
// }

interface Employee {
  name: string;
}

interface Employee {
  city: string;
}

let emp: Employee = {
  name: "Navin",
  city: "Tirrupur",
};

// type Employee = {
//   name: string;
// }

// type Employee {
//   city: string;
// }

// let emp: Employee = {
//   name: "Navin",
//   city: "Tirrupur",
// };
