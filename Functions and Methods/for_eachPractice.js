let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal (value){
    console.log(value*value);
});

//callback

arr.forEach((num) => {
    console.log(num*num);
});


console.log("/******************/");
let calcSquare = (number) => {
    console.log(number*number);
}

arr.forEach(calcSquare)