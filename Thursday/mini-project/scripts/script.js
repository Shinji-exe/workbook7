"use strict";

const searchByTypeSelect = document.getElementById("searchByTypeSelect");
const searchByProduct = document.getElementById("searchByProduct");
const cardSection = document.getElementById("cardSection");

//  let filteredProducts = [];

async function getData() {
  try {
    let fetching = fetch(`http://localhost:8081/api/categories`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    // populateFirstDropdown(data)
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
     filteredProducts = data;
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
      products[i].discontinued
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
  cardContainers.className = "card";
  cardContainers.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = productName;

  const cardLine = document.createElement("hr");

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = `${productCost.toFixed(2)}`;

  const cardText = document.createElement("p");
  cardText.className = "card-text";

  if (productUnits === 0) {
    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    cardText.textContent = productContinuation;
  } else {
    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    cardText.textContent = `Avaliable units: ${productUnits}`;
  }
  // const cardText = document.createElement("p");
  // cardText.className = "card-text";
  // cardText.textContent = `Avaliable units: ${productUnits}`;

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
//   searchByProduct.innerHTML = "";

  try {
    let fetching = fetch(`http://localhost:8081/api/products`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    const filteredProducts = data.filter((item) => item.categoryId === idvalue);
    // showSecondOptions(filteredProducts);
    displayCards(filteredProducts);
  } catch (error) {
    console.log("Error code: ", error.message);
  }
}

function filterCards() {
  let idvalue = searchBye.value;

  cardSection.innerHTML = "";

  let filteringItems = filteredProducts.filter((item) => item.categoryId === idvalue);

  displayCards(filteringItems);
}
