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

// const person = {
//     name: "Aakash",
//     name2: "Aman",
//     greet: function () {
//         console.log(`Hi, I am ${name2}`);
//     },
// };
// person.greet(); // Output: Hi, I am Aakash

// console.log(greet("Aakash")); // Output: Hello, Aakash!

// const greet = (name) => `Hello, ${name}!`;

// console.log(hello());

// const hello = () => {
//     return 5*2;
// }

// console.log(sum())
// function sum(){
//     return 5*3
// }

// asynchronous js

// function fetchData(callback){
//     // setTimeout(()=>{
//     //     console.log("Data is fetched!");
//     // }, 5000);

//     console.log("Printing main")
//     callback();
// }
// function add(){
//     console.log(2*6);
// }

// // fetchData(()=>{console.log("Data is processing!....")} )
// fetchData(add)

// promises
// const fetchData = new Promise(
//     (resolve, reject) => {
//   setTimeout(() => 
//         resolve("Data fetched!"),
//         // reject("this is rejected"),

//         2000);
    
       
// },
// );


// fetchData.then((data) => console.log(data)); // Output: Data fetched!

//************************************************************************************************* */
// example
// const fetchData = new Promise((resolve, reject) => {
//     let value = 18;
//     setTimeout(() => {
//         if (value > 18) {
//             resolve("You can drive the car");
//         } else if(value == 18){
//             resolve("Be ready to drive the car")
//         }else{
//             // pending("This is a pending data because data is not comming from the API")
//             reject("You can not drive");
//         }

//     }, 2000);
// });

// Handling the promise
// fetchData
//     .then((e) => console.log(e)) // Output if resolved: Data fetched successfully!
//     .catch((errorhere) => console.error(errorhere)) // Output if rejected: Failed to fetch data.
//     // .finally(()=> console.log("This will always execute"))


// ********************************************************************************************************************
//callback function
// function setData(callback){

//     console.log("this is main")
//     callback();

// }

// setData(()=> console.log("Hello this is callback"))

// **********************************************************************************************************

// This is promise chaining
// const fetchNumber = new Promise((resolve) => {
//     setTimeout(() => resolve(5), 3000); // Returns 5 after 1 second
// });

// fetchNumber
//     .then((number) => {
//         console.log(number); // Output: 5
//         return number * 2;
//     })
//     .then((number) => {
//         console.log(number); // Output: 10
//         return number * 3;
//     })
//     .then((number) => {
//         console.log(number); // Output: 30
//     })
//     .catch((error) => console.error(error)); // Handles any error in the chain
// // **********************************************************************************************

// async function functionName() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const res = await result.json();
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// }


// async function functionName() {
//     try {
//         console.log("Fetching data...");
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//         console.log("Fetch successful, converting to JSON...");
//         const res = await result.json();
//         console.log("JSON conversion successful:", res);
//     } catch (error) {
//         console.error("Error occurred:", error);
//     }
// }
//********************************************************************************* */
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data fetched!"), 4000);
//     });
// }

// async function getData() {
//     console.log("Fetching data...");
//     const data = await fetchData(); // Waits for the promise to resolve
//     console.log(data); // Output: Data fetched!
// }

// getData();



//*************************************************************************************** */

// function fetchUser(success) {
//     return new Promise((resolve) => setTimeout(() => resolve(`User Data ${success}`), 1000));
// }

// function fetchPosts() {
//     return new Promise((resolve) => setTimeout(() => resolve("Posts Data"), 2000));
// }

// async function fetchData() {
//     console.log("Fetching data...");
//     let success = "Aman";
//     const user = await fetchUser(success);
//     console.log(user); // Output: User Data Aman

//     const posts = await fetchPosts();
//     console.log(posts); // Output: Posts Data
// }

// fetchData();
// *****************************************************************************************
// function fetchUser() {
//     return new Promise((resolve) => setTimeout(() => resolve("User Data"), 5000));
// }

// function fetchPosts() {
//     return new Promise((resolve) => setTimeout(() => resolve("Posts Data"), 1000));
// }

// async function fetchData() {
//     console.log("Fetching data...");
//     const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
//     console.log(user); // Output: User Data
//     console.log(posts); // Output: Posts Data
// }

// fetchData();

// ********************************************************************************************
// async function processItems(items) {
//     for (const item of items) {
//         const result = await new Promise((resolve) =>
//             setTimeout(() => resolve(`Processed ${item}`), 000)
//         );
//         console.log(result);
//     }
// }

// processItems(["Item1", "Item2", "Item3"]);

// ***************************************************************************
// const newPara = document.createElement("button");
// newPara.innerHTML = "This is a new paragraph.";
// document.body.appendChild(newPara);

// const div = document.querySelector("#hel");
// const res = div.innerContext;
// console.log(res)
// document.body.appendChild(res);


const title = document.getElementById("title");
// title.parentNode.removeChild(title);

// const newTitle = document.createElement("h1");
// newTitle.textContent = "New Title";
// document.body.replaceChild(newTitle, title); // Replaces the old title


