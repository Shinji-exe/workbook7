"use strict";

const getData = async function () {
  let promise = fetch("https://jsonplaceholder.typicode.com/todos");
  let response = await promise; //First await waiting for response to comeback
  console.log(response.status, response.statusText);
  if(response.status === 404){
    console.log("Unavaliable. Please try again later ")
  }
  let data = await response.json(); // Turning it to a body of array of objects
  console.log(data);
};

getData();
