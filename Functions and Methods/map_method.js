// Map method in moder javascript it is same like forEach loop
// Creates a new array with the results of some operation. The value
//  its callback returns are used to form new array

//arr.map(callbackFnx(value, index, array))

// syntax
// let newArr = arr.map((val)=>{

//     return val * 2;
// });

let nums = [67, 52, 39];

//copy of array, changes will not reflect in original array -- nums

let newArr = nums.map((val) => {
    // console.log(val);
    return val*val;
});

console.log(newArr);

