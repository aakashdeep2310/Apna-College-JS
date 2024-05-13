let arr = [250, 645, 300, 900, 50];
// let val;
// for(let i = 0; i<arr.length; i++){
//     val = arr[i] -(arr[i] * 0.1);
//     arr[i] = val;

    
    
// }

let i = 0;
for(let el of arr){
    let offer = el-(el*0.1);
    arr[i] = offer;
    i++;
}


console.log(arr);


