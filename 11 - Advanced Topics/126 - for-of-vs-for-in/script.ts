// for..of vs. for..in

let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

for (let index in arr) {
  console.log(arr[index]);
}
