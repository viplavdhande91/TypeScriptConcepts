"use strict";
let listOfEmp = [
    {
        empName: "Navin",
        salary: 1000,
    },
    {
        empName: "Pravin",
        salary: 1500,
    },
    {
        empName: "Sudarshan",
        salary: 1700,
    },
];
let listOfEmpName = listOfEmp.map((ob) => ob.empName);
let listOfEmpUpdated = listOfEmp.filter((ob) => ob.salary > 1200);
console.log(listOfEmpUpdated);
//# sourceMappingURL=script.js.map