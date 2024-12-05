

// async function getData(){

//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response.json();
    
//     let hero = document.createElement("div");
//     hero.textContent = `This is  ${data.title} , ${data.completed}, ${data.id} title completed`;
//     document.body.appendChild(hero);
//     console.log(data);
// }


// let value = prompt("Hello man give a input")
// alert("This is danger message")
// console.log(value)
// getData();



// let user = "Aakash";
// let name = null || "Pawan"; // Coerces `null` to false
// console.log(name);          // Output: Guest


const person = {
    name: "Aakash",
    name2: "Aman",
    greet: function () {
        console.log(`Hi, I am ${name2}`);
    },
};
person.greet(); // Output: Hi, I am Aakash
