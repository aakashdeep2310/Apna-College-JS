function myFunction(){
    console.log("Hello Aakash ");
    console.log("Learnig JS!");
}

myFunction();
myFunction();
console.log("**********");

//parameter
function myFunction2(msg) {
    console.log(msg);
}

myFunction2("How you doinn!!");


//return
function sum(x, y){
    s = x + y;
    return s;
}

let val = sum(3, 5);
console.log(val);


// Arrow fuunction
const arrowSum = (a, b) =>{
    return a+b;
}
// arrowSum(3, 3);
console.log(arrowSum(2,4));