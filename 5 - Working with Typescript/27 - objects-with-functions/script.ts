// Objects

let emp = {
  empName: "Navin",
  companyName: "ABC",
  address: {
    city: "Mumbai",
    area: "BKC",
    country: "India",
  },
  display: function () {
    console.log(
      "Hi my name is " +
        this.empName +
        ". I work at " +
        this.companyName +
        " & I am from " +
        this.address.country
    );
  },
};

emp.display();
