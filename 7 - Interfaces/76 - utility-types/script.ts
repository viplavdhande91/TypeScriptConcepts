// Utility types

interface Employee {
  name: string;
  city: string;
  skills?: string[];
}

let emp1: Employee = {
  name: "Navin",
  city: "Tirrupur",
  //skills: ["Angular", "NodeJS"],
};

let emp2: Partial<Employee> = {
  name: "Pravin",
};

let emp3: Required<Employee> = {
  name: "Sud",
  city: "Pune",
  skills: ["Angular", "NodeJS"],
};
