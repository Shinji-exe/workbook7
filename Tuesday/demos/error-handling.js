"use strict";

const getData = async function () {
  try {
    let promise = fetch("https://jsonplaceholder.typicode.com/todos");
    let response = await promise; //First await waiting for response to comeback
    if(!response.ok){
      throw new Error("Unavailable. Please Try Again.")
    }
    let data = await response.json(); // Turning it to a body of array of objects
    console.log(data);
  } catch (error) {
    console.log("error:", error.message)
  }
};

getData();
