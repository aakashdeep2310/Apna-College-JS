let arr = [1, 2, 3, 4, 5];
// Higher order function/ method => takes another function as an argument or return any function
// forEach loop
//  CallBackfunction : Here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.
arr.forEach(function printVal(val){
    console.log(val);
});

let city = ["Pune", "Delhi", "Mumbai", "Banglore"];

city.forEach((value, idx, city) =>{
    console.log(value.toUpperCase(), idx, city);
})