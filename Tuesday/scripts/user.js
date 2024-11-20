// let promise = fetch("https://jsonplaceholder.typicode.com/users/");

// function parseJSON(response) {
//     let arrayOfUsersObject = response.json();
//     return arrayOfUsersObject;
//   }

//   function displayUsers(users) {
//     console.log(users);
//   }

/////////////////////////////////

const tableBody = document.getElementById("tableBody");
const inputBox = document.getElementById("inputBox");

let searchBox = Number(inputBox.value.trim());

// fetch(`https://jsonplaceholder.typicode.com/users/${searchBox}`)
//   .then((response) => response.json())
//   .then((data) => {
//     for (let i = 0; i < data.length; i++) {
//       let row = tableBody.insertRow();
//       let cell1 = row.insertCell();
//       let cell2 = row.insertCell();
//       let cell3 = row.insertCell();
//       let cell4 = row.insertCell();
//       let cell5 = row.insertCell();
//       let cell6 = row.insertCell();
//       cell1.innerText = data[i].id;
//       cell2.innerText = data[i].name;
//       cell3.innerText = data[i].phone;
//       cell4.innerText = data[i].username;
//       cell5.innerText = data[i].address.street;
//       cell6.innerText = data[i].website;
//     }
//   });

//OR

async function getUsers() {
  let promise = fetch(`https://jsonplaceholder.typicode.com/users`);
  let response = await promise;
  let users = await response.json();
  console.log(users);
  displayUsers(users);
}

getUsers();

// async function getUsers() {
//   let url = searchBox
//     ? `https://jsonplaceholder.typicode.com/users/${searchBox}`
//     : `https://jsonplaceholder.typicode.com/users`;

//   let response = await fetch(url);
//   let users = await response.json();
//   console.log(users);
//   displayUsers(users);
// }

// getUsers();

function buildTable(user) {
  let row = tableBody.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();

  cell1.innerText = user.id;
  cell2.innerText = user.name;
  cell3.innerText = user.phone;
  cell4.innerText = user.username;
  cell5.innerText = user.address?.street || "N/A";
  cell6.innerText = user.website;
}

// function filteringUserTable(users) {
//   let row = tableBody.insertRow();
//   let cell1 = row.insertCell();
//   let cell2 = row.insertCell();
//   let cell3 = row.insertCell();
//   let cell4 = row.insertCell();
//   let cell5 = row.insertCell();
//   let cell6 = row.insertCell();

//   cell1.innerText = users.id;
//   cell2.innerText = userFilter.name;
//   cell3.innerText = userFilter.phone;
//   cell4.innerText = userFilter.username;
//   cell5.innerText = userFilter.address?.street || "N/A";
//   cell6.innerText = userFilter.website;
// }

function displayUsers(users) {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    buildTable(users[i]);
  }
}
