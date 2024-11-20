"use strict";

// const { response } = require("express");

// const fetching = async function (url) {
// //   fetch("https://jsonplaceholder.typicode.com/posts/")
// //     .then((res) => res.json())
// //     .then((data) => console.log(data));

// return new Promise()
// };

// let promise = {
//     then: function(fnDoThisWhenYouAreDone){
//         fnDoThisWhenYouAreDone()
//     }
// }

//Step 1
//You get a promise object back which
//You hold as collateral for eventually getting thr data you requested
//Fetch data from API
let promise = fetch("https://jsonplaceholder.typicode.com/users/");

//Step 2
//takes the body (after the blank line) in the http response
//and calls JSON.parse() on it to transform it from a json string to an array of objects
function parseJSON(response) {
  let arrayOfUsersObject = response.json(); //response.body's json string
  return arrayOfUsersObject; //returning the array is important because it keeps the promise chain going, i.e. the data will flow into the next then block
}

//Step 3: Display the users data
//Receives the data you ask for and does something to display it


//Step 4: Chain the promises
//you get a promise object back which
//you hold as collateral for eventually getting the data you requested
//Receives the data you asked for and does something to display it
 promise.then(parseJSON).then(displayUsers);

//OR

fetch("https://jsonplaceholder.typicode.com/users/")
.then((response) => response.json())
.then((users)=> console.log(users))

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

