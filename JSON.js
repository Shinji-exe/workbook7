"use strict"

let person = {
    firstname: "Timothy",
      lastname: "Lundy"
}

let peps =[
    {
        firstname: "Timothy",
          lastname: "Lundy"
    },
    {
        firstname: "George",
          lastname: "Michael"
    }
]

let personAsString = JSON.stringify(peps);
console.log(personAsString)