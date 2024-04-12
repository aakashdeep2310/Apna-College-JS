
function vowel(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'a' ||
        str[i] == 'e'||
        str[i] == 'i' ||
        str[i] == 'o' ||
        str[i] == 'u'){
            count++;
            // console.log(str[i]);
        }
        // }else{
        //     console.log("There is no vowel in your name");
        // }
    }
    console.log(count);
}

// vowel("aakash");

let arrowCount = (str)=>{
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'a' ||
        str[i] == 'e'||
        str[i] == 'i' ||
        str[i] == 'o' ||
        str[i] == 'u'){
            count++;
        }
    }
    // console.log(count);
    return count;
}


console.log(arrowCount("aaksshdeep"));

