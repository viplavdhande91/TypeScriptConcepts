// Utility types

interface Employee {
  name: string;
  city: string;
  skills: string[];
}

let emp1: Omit<Employee, "skills"> = {
  name: "Navin",
  city: "Tirrupur",
};

// let emp1: Pick<Employee, "name" | "city"> = {
//   name: "Navin",
//   city: "Tirrupur",
// };

// let emp1: Employee = {
//   name: "Navin",
//   city: "Tirrupur",
//   //skills: ["Angular", "NodeJS"],
// };

// let emp2: Partial<Employee> = {
//   name: "Pravin",
// };

// let emp3: Required<Employee> = {
//   name: "Sud",
//   city: "Pune",
//   skills: ["Angular", "NodeJS"],
// };
