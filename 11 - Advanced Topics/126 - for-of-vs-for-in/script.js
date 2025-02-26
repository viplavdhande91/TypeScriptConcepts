"use strict";
// for..of vs. for..in
var arr = [10, 20, 30];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
for (var index in arr) {
    console.log(arr[index]);
}
