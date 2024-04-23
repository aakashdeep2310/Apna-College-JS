//DOM Manipulation
// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class")
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//Query selectors
// let firstEl = document.querySelector("p"); //First element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); //First element
// console.dir(allEl);

// let allElementofClass = document.querySelectorAll(".myClass");
// console.dir(allElementofClass);

// allElementofClass.tagName

// let childNode = document.getElementById("imgClass");
// // console.dir(childNode);
// // console.log(childNode.lastChild.nodeName);

// console.log(document.body.firstChild);
// console.log(document.body.children[0]);
// console.log(document.body.children[2]);

// let div = document.querySelector("div");
// console.dir(div);

// homework Q1 to append some text in string
// let str = document.querySelector("h2");
// console.dir(str.innerText);
//1st way to add the string in existed string
// str.innerText = str.innerText+ "From Apna College Students";
// console.dir(str.innerText);
// 2nd way to add the string in existed string-->v
// str = str.append(" From Apna College Students");


// Q2 to change the  unique value in box

let box = document.querySelectorAll(".box");
// box[0].innerText = "Hii div 1";
// box[1].innerText = "Hii div 2";
// box[2].innerText = "Hii div 3"; // this will change the old value given in hw.html file
// another way using loops

// let idx = 1;
// for(div of box){
//     div.innerText = `New unique value of div ${idx}`;
//     idx++;
// }


// Dom Manipulation
// 1. Attributes
// .getAttribute(attr)
// .setAttribute(attr, value)

// let div1 = document.querySelector("div");
// console.log(div1);

// let para = div1.getAttribute("p");
// console.log(para);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// console.log("para");

// 2. node.style
// let div = document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.innerText="Aakash";

// 3. Insert Element
//node.append(el)
//node.prepend(el)
// node.before(el)
// node.after(el)

// let newbutton = document.createElement("button");
// newbutton.innerText = "Click me";

// let p = document.querySelector("p");
// p.append(newbutton);

// //
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hii, i am new here </i>";

// document.querySelector("body").prepend(newHeading);

// // delete
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// DOM lectur2 HW
// Q1.
let button2 = document.createElement("button");
button2.innerText = "Click me";

button2.style.backgroundColor = "red";
button2.style.color = "white";

document.querySelector("body").prepend(button2);

// Q2.









