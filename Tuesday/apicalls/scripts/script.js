const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const showCase = document.getElementById("showCase");
const imageBaseUrl = "https://starwars-visualguide.com/assets/img/";

// let characterData = [];

const getData = async function () {
  let fetching = fetch(` https://swapi.dev/api/people`);
  let response = await fetching;
  let data = await response.json();
  characterData = data.results;
  console.log(data.results);
  makeCards(data.results);
  //   findCharacter(data.results)
};

getData();

// function getImageUrl(card) {
//     if (card.url.includes("people")) {
//         return `${imageBaseUrl}characters/${card.url.match(/(\d+)\/$/)[1]}.jpg`;
//     }
//     return "https://via.placeholder.com/150"; // Fallback image
// }

function buildCards(cards) {
  cards.forEach((card) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = card.name;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `${card.name}`);
    createElement.appendChild(mountainImage);

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");
    createElement.appendChild(createCardBody);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = card.name;
    // createCardBodyText.style.display = "none";
    createCardBody.appendChild(createCardBodyText);

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = `Name: ${card.name}`;
    // cardBodyTextTwo.style.display = "none";
    createCardBody.appendChild(cardBodyTextTwo);

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Gender: ${card.gender}`;
    // cardBodyTextThree.style.display = "none";
    createCardBody.appendChild(cardBodyTextThree);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);

    columns.appendChild(createElement);
    showCase.appendChild(columns);
  });
}

function findCharacter(characters) {
  let characterSearch = searchBar.value.trim();
  showCase.innerHTML = "";
  let characterFind = characters.find((character) => character.name === characterSearch);
  if (characterFind) {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = characterFind.name;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `${characterFind.name}`);
    createElement.appendChild(mountainImage);

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");
    createElement.appendChild(createCardBody);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = characterFind.name;
    createCardBody.appendChild(createCardBodyText);

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = `Name: ${characterFind.name}`;
    createCardBody.appendChild(cardBodyTextTwo);

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Gender: ${characterFind.gender}`;
    createCardBody.appendChild(cardBodyTextThree);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);
    columns.appendChild(createElement);
    showCase.appendChild(columns);
  }
}

// buildCards();

function makeCards(cards) {
  buildCards(cards);
}

function find() {
  findCharacter(characterData);
}
