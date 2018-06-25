// this file loops through the ProductDB and products element creator function to print product data to the DOM

let Products = require("./productDatabase"); // imports database of products
let productElCreator = require("./products");
let printReviews = require("./reviewList");

const productContainer = document.querySelector("#product-container");
const productFragment = document.createDocumentFragment();

const printProducts = () => { // prints products to DOM
    for (let i in Products) {
        let printProduct = productElCreator(Products[i]);
        productFragment.appendChild(printProduct);

        let printReview = printReviews(Products[i].title);
        productFragment.appendChild(printReview);
    }
    productContainer.appendChild(productFragment);

}

module.exports = printProducts;