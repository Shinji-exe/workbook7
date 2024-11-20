let inputBox = document.getElementById("inputBox");
let messageBox = document.getElementById("messageBox");
let findButton = document.getElementById("findButton");

// function findTodo() {
//   const textbox = Number(inputBox.value);

//   let promise = fetch(`https://jsonplaceholder.typicode.com/todos/${textbox}`);

//   function parseJSON(response) {
//     let arrayOfUsersObject = response.json();
//     return arrayOfUsersObject;
//   }

//   const display = (todo) => {
//     console.log(todo);
//     messageBox.innerText = todo.title + " " + todo.completed;
//   };

//   promise.then(parseJSON).then(display);

// }


// function getButton() {
//   findTodo();
// }


async function findTodo(){
    const textbox = Number(inputBox.value)
    let promise = fetch(`https://jsonplaceholder.typicode.com/todos/${textbox}`);
    let response = await promise;
    let data = await response.json()
    messageBox.innerText = `${data.title}  ${data.completed}`;
} 

function getButton() {
  findTodo();
}