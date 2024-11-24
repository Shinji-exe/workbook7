"use strict";

const searchByTypeSelect = document.getElementById("searchByTypeSelect");
const searchByProduct = document.getElementById("searchByProduct");
const cardSection = document.getElementById("cardSection");
const searchInput = document.getElementById("searchInput");
const sortAlphabetical = document.getElementById("sortAlphabetical");
const sortAlphabeticalBackwards = document.getElementById("sortAlphabeticalBackwards");

let productData = [];

async function getData() {
  try {
    let fetching = fetch(`http://localhost:8081/api/categories`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    showOptions(data);
  } catch (error) {
    console.log("Error code:", error.message);
  }
}

getData();

async function getProductsData() {
  try {
    let fetching = fetch("http://localhost:8081/api/products");
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    displayCards(data);
  } catch (error) {
    console.log("Error code: ", error.message);
  }
}

getProductsData();

function displayCards(products) {
  for (let i = 0; i < products.length; i++) {
    createCardsForDisplay(
      products[i].productName,
      products[i].unitPrice,
      products[i].unitsInStock,
      products[i].supplier,
      products[i].discontinued,
      products[i].productId
    );
  }
}

function createCardsForDisplay(
  productName,
  productCost,
  productUnits,
  productSupplier,
  productContinuation,
  productId
) {
  const cardContainers = document.createElement("div");
  cardContainers.className = "card bodyOfCard";
  cardContainers.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = productName;

  const cardLine = document.createElement("hr");

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.innerText = `$${productCost.toFixed(2)}`;

  const cardText = document.createElement("p");
  cardText.className = "card-text";

  if (productUnits === 0) {
    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    cardText.textContent = "Out of Stock!";
  } else {
    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    cardText.textContent = `Avaliable units: ${productUnits}`;
  }

  const cardText2 = document.createElement("p");
  cardText2.className = "card-text";
  cardText2.textContent = `Supplier: ${productSupplier}`;

  const cardLink = document.createElement("a");
  cardLink.href = `productsDetails.html?productId=${productId}`;
  cardLink.innerText = "See More";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardLine);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardText2);
  cardBody.appendChild(cardLink);
  cardContainers.appendChild(cardBody);

  cardSection.appendChild(cardContainers);
}

///////////////////////////

function showOptions(categories) {
  for (let i = 0; i < categories.length; i++) {
    populateFirstDropdown(categories[i]);
  }
}

function populateFirstDropdown(categories) {
  // for(let i = 0; i < categories.length; i++){
  let createOptions = document.createElement("option");
  createOptions.value = categories.categoryId;
  createOptions.innerText = categories.name;
  searchByProduct.appendChild(createOptions);
  // }
}
//////////////////////////

async function getCertainProductsDropdown() {
  let idvalue = searchByProduct.value;
  if (idvalue) {
    try {
      let fetching = fetch(`http://localhost:8081/api/products`);
      let response = await fetching;
      let data = await response.json();
      console.log(data);
      const filteredProducts = data.filter((item) => item.categoryId === idvalue);
      cardSection.innerHTML = "";
      displayCards(filteredProducts);
    } catch (error) {
      console.log("Error code: ", error.message);
    }
  } else {
    cardSection.innerHTML = "";
    getProductsData();
  }
}

function searchAProduct(data) {
  let searchValue = searchInput.value.trim().toLowerCase();
  cardSection.innerHTML = "";
  let findProduct = data.find((product) => product.productName === searchValue);
  if (findProduct) {
    const cardContainers = document.createElement("div");
    cardContainers.className = "card bodyOfCard";
    cardContainers.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = findProduct.productName;

    const cardLine = document.createElement("hr");

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
    cardSubtitle.textContent = `${findProduct.toFixed(2)}`;

    const cardText = document.createElement("p");
    cardText.className = "card-text";

    if (findProduct.unitsInStock === 0) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.textContent = findProduct.discontinued;
    } else {
      // const cardText = document.createElement("p");
      // cardText.className = "card-text";
      cardText.textContent = `Avaliable units: ${findProduct.unitsInStock}`;
    }

    const cardText2 = document.createElement("p");
    cardText2.className = "card-text";
    cardText2.textContent = `Supplier: ${findProduct.supplier}`;

    const cardLink = document.createElement("a");
    cardLink.href = `productsDetails.html?productId=${findProduct.productId}`;
    cardLink.innerText = "See More";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardLine);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardLink);
    cardContainers.appendChild(cardBody);

    cardSection.appendChild(cardContainers);
  } else {
    const noProduct = document.createElement("p");
    noProduct.innerText = "No Product Found!";
    cardSection.appendChild(noProduct);
  }
}

function show() {
  searchAProduct(data);
}

async function sortCards() {
  // if(sortAlphabetical.checked){

  // }
  cardSection.innerHTML = "";
  try {
    let fetching = fetch(`http://localhost:8081/api/products`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    data.sort((a, b) => {
      if (a.productName < b.productName) {
        return -1;
      } else if (a.productName == b.productName) {
        return 0;
      } else {
        return 1;
      }
    });
    displayCards(data);
  } catch (error) {
    console.log("Error code: ", error.message);
  }
}

async function sortCardsBackwards() {
  cardSection.innerHTML = "";
  try {
    let fetching = fetch(`http://localhost:8081/api/products`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    data.sort((a, b) => {
      if (a.productName < b.productName) {
        return 1;
      } else if (a.productName == b.productName) {
        return 0;
      } else {
        return -1;
      }
    });
    displayCards(data);
  } catch (error) {
    console.log("Error code: ", error.message);
  }
}

// sortCards()

function changeSort() {
  if (sortAlphabetical.checked) {
    sortCards()
  }else{
    sortCardsBackwards()
  }
}
