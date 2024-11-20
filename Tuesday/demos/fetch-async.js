//You cant use await without a async function

//Call the api to get the data
//when we get data back, we will print it
//async just marks the function 
async function getData() {
  //will send you a signal that the previous operation has completed
  let promise = fetch("https://jsonplaceholder.typicode.com/users"); //asking another computer for the data
  let response = await promise; //code pauses until data is available/waits for response message to come back from the server with the data in the body
  let data = await response.json(); //Turns JSON string in the body into JavaScript objects or array of objects/ parse()
  console.log(data);
}

getData();
