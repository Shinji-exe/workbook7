"use strict";

const urlParams = new URLSearchParams(location.search);

let productId = urlParams.get("productId");

async function getAProduct() {
  let promise = fetch(`http://localhost:8081/api/products/` + productId);
  let response = await promise;
  let product = await response.json();
  console.log(product);
}

getAProduct();
