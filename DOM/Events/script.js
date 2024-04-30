// document.getElementById('click-me').addEventListener('click', function(){
//     console.log("This is click button");
//     alert("Hello click me clicked")
// });
// document.getElementById('dbl-click').addEventListener('dblclick', function(){
//     console.log("This is double click button");
//     alert("Hello dubble click me clicked")
// });

// document.getElementById('box').addEventListener('mouseover', function(){
//     console.log("Hover on box");
// });

let btn1 = document.querySelector("#btn1");
// event listners
btn1.addEventListener("click", (evt) =>{
    console.log("button was clicked 1");
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click", (evt) =>{
    console.log("button was clicked 2");
    
})

const handler =()=>{
    console.log("button was clicked 3");

}

btn1.removeEventListener('click', handler)

// btn1.onclick=()=>{

//     console.log("Hiiii");
// }
let box = document.querySelector("#box");
box.onmouseover=()=>{
    console.log("hover on box");
}

// Adding dark theme to our website
// HW
// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again.
// one to another then another to same back - toggle button lile light to dark then dark to light

let modeBtn = document.querySelector("#mode");
let currMode = "light";

// modeBtn.addEventListener("click", () => { 
//     // console.log("You are trying to change mode");
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor=" white ";
//     }
//     console.log(currMode);
// });

// using classlist
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => { 
    console.log("You are trying to change mode");
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
